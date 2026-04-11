import os
from dotenv import load_dotenv
from flask import Flask, request
import requests
import mysql.connector
import json

load_dotenv()

app = Flask(__name__)

db_config = {
    "host": os.getenv("HOST"),
    "user": os.getenv("USER"),
    "password": os.getenv("PASSWORD"),
    "database": os.getenv("DATABASE"),
    "port": 15291,
    "ssl_disabled": False
}

# Initial Table Setup
db = mysql.connector.connect(**db_config)
cursor = db.cursor()
cursor.execute("""
    CREATE TABLE IF NOT EXISTS water_records (
        id VARCHAR(255) PRIMARY KEY,
        waterStack LONGTEXT,
        droplets INT
    )
""")
db.commit()
cursor.close()
db.close()

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/auth', methods=['POST'])
def auth():
    global user_sub
    """Handles Google login and creates the user record if it doesn't exist."""
    data = request.get_json()
    google_res = requests.get(
        "https://www.googleapis.com/oauth2/v3/userinfo", 
        headers={
            "Authorization": f"Bearer {data.get('id')}",
            "Accept": "application/json"
        }
    ).json()

    user_sub = google_res.get('sub')
    if not user_sub:
        return {"error": "Invalid Google Token"}, 401

    # Default values for a new user
    water_stack = data.get('waterStack', "[]")
    droplets = data.get('droplets', 0)

    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)
        
        # This adds the user. If they already exist, it does nothing or updates.
        query = """
            INSERT INTO water_records (id, waterStack, droplets) 
            VALUES (%s, %s, %s)
            ON DUPLICATE KEY UPDATE id=id
        """
        cursor.execute(query, (user_sub, json.dumps(water_stack), droplets))
        conn.commit()

        fetch_query = "SELECT waterStack, droplets FROM water_records WHERE id = %s"
        cursor.execute(fetch_query, (user_sub,))
        user_record = cursor.fetchone()

        cursor.close()
        conn.close()
        print(google_res.get('name'))
        return {
            "waterStack": json.loads(user_record['waterStack']) if user_record['waterStack'] else [],
            "droplets": user_record['droplets'],
            "user": google_res.get('name')
        }, 200
    except mysql.connector.Error as err:
        return {"error": str(err)}, 500

@app.route('/update', methods=['POST'])
def update_stats():
    global user_sub
    """Updates the waterStack and droplets for an existing user."""
    data = request.get_json()
    user_id = user_sub # You'll pass the 'sub' back from the frontend
    water_stack = data.get('waterStack')
    droplets = data.get('droplets')

    if not user_id:
        return {"error": "User ID (sub) required"}, 400

    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Update existing record
        query = """
            UPDATE water_records 
            SET waterStack = %s, droplets = %s 
            WHERE id = %s
        """
        # Ensure waterStack is saved as a JSON string
        stack_json = json.dumps(water_stack) if not isinstance(water_stack, str) else water_stack
        
        cursor.execute(query, (stack_json, droplets, user_id))
        conn.commit()
        
        cursor.close()
        conn.close()
        return {"message": "Stats updated successfully"}, 200
    except mysql.connector.Error as err:
        return {"error": str(err)}, 500