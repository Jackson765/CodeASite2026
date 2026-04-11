import './App.css'
import Navbar from './Navbar';
import { User } from './User';

function About() {
  User.generate();

  return (
    <div className="abtUsLol">
      <Navbar/>
      <div style={{display: "flex"}}>
        <div className="abtTxt">
          <h1>Feeling Thirsty?</h1>
          <p>
            Bottle Bridge is a small, up and coming indie company selling water bottles directly to your door step.  Gone are the days of the modern convenience store, as our website delivers water bottles (not available in bulk) one by one directly to your house.  The future is now.
          </p>
        </div>
        <div className="abtImg">
          <img src="abtUs1.png"/>
        </div>
      </div>
      <hr/>
      <div style={{display: "flex"}}>
        <div className="abtImg2">
          <img src="abtUs2.png"/>
        </div>
        <div className="abtTxt2">
          <h1>The Process</h1>
          <p>
            While at first glance, the image to the left might look like an impressive display of the industrial components our company depends on, a keen eye will correctly conclude that this is actually just a stock image from google.  That image might even be AI generated for all we know.
            What's important to remember is that our company doesn't actually create nor fill the water bottles, but instead distributes such products.  The process for obtaining such products usually entails going to our local convenience store and buying a lot of water.  Talk about a hustle!
          </p>
        </div>
      </div>
      <hr/>
      <div style={{display: "flex"}}>
        <div className="abtTxt">
          <h1>The Innovative Minds Behind This Company</h1>
          <p>
            Take a look at the beautiful minds behind Bottle Bridge.
          </p>
        </div>
        <div className="abtImg">
          <img src="abtUs3.png"/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{display: "inline-block"}}>
        <div className = "footer">
          <img src="footer.png"/>
        </div>
        <div className="footerBottom"></div>
      </div>
    </div>
  )
}

export default About
