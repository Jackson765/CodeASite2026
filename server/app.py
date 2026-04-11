import os
from dotenv import load_dotenv
from flask import Flask, request
import requests
import mysql.connector
import json
# from requests import headers, Authorization
load_dotenv()

app = Flask(__name__)

db_config = {
    "host": os.getenv("HOST"),
    "user": os.getenv("USER"),
    "password": os.getenv("PASSWORD"),
    "database": os.getenv("DATABASE")   
}
db = mysql.connector.connect(**db_config)
cursor = db.cursor()
# Using LONGTEXT for the any-length string
cursor.execute("""
    CREATE TABLE IF NOT EXISTS water_records (
        id LONGTEXT,
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
    global storeSub
    data = request.get_json()
    response = response = requests.get(
        "https://www.googleapis.com/oauth2/v3/userinfo", 
        headers={
            "Authorization": f"Bearer {data.get('id')}",
            "Accept": "application/json"
        }
    ).json()
    print(response)
    storeSub = response.get('sub')
    water_stack = data.get('waterStack')
    droplets = data.get('droplets')

    
    return {"message": "Success"}, 200