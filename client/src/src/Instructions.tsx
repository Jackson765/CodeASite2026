import './App.css'
import Navbar from './Navbar';
import { User } from "./User";

function Instructions() {
  User.generate();

  return (
    <div>
      <Navbar />
      <div className = "feelingThirsty">
        <img src="feelingThirsty.gif"/>
      </div>
      <div className = "instruct">
        <h1>No need to fret!</h1><br/>
        <h2>Drinking water is harmless as long as you follow these simple steps!</h2><br/>
        <div style={{display: "flex", width: "50vw", margin: "auto", marginTop: "5vh", textAlign: "left"}}>
          <img style={{width: "15vw"}} src={"keepCalmAndDrinkWater.png"}/>
          <div style={{width: "25vw", marginLeft: "25px"}}>
            <p>1. Stay hydrated</p><br/>
            <p>2. Drink alotta water!</p><br/>
            <p>3. Tilt the container such that it forms a 60 degree angle between the container and your face</p><br/>
            <p>4. Swallow</p><br/>
            <p>5. (if iced) wait until ice cubes melt so you can drink water left over</p><br/>
          </div>
        </div><br/>
        <h2 style={{color: "red", fontSize: "50px", marginTop: "2vh"}}>DO NOT BREATHE WHILE DRINKING WATER!!!</h2>
      </div>
      <div style={{display: "inline-block", marginTop: "5vh"}}>
        <div className = "footer">
          <img src="footer.png"/>
        </div>
        <div className="footerBottom"></div>
      </div>
    </div>
  );
}

export default Instructions;