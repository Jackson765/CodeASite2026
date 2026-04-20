import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import { User } from './User';



function BottleFlipGame() {
  const [spin, setSpin] = useState(-1);
  const [text, setText] = useState("");
  User.generate();

  function spinIt() {
    if (spin == -1) {
        setSpin(Math.floor(Math.random() * 4));
    }
    else {
        setSpin(-1);
        setText("");
        if (spin == 1 || spin == 3) {
            User.pop();
        }
        if (spin == 0) {
            User.addDrops(10);
        }
        if (spin == 2) {
            User.addDrops(100);
        }
    }
  }

  function endAnim() {
    if (spin == 1 || spin == 3) {
        setText("You lost your water bottle :(");
    }
    if (spin == 0) {
        setText("You got 10 droplets!");
    }
    if (spin == 2) {
        setText("You got 100 droplets!!!");
    }
  }

  return (
    <div>
        <div className="waterGame">
            <div className = "infoTextGame">
                <p>Click the water bottle to spin it.</p><br/>
                <p>If it lands on its side you lose the water bottle.</p><br/>
                <p>If it lands on its bottom you get 10 droplets.</p><br/>
                <p>If it lands on its cap you get 100 droplets.</p>
            </div>
            {User.waterStack.length == 0 && <div className="txtLol">
                <h1>
                    No water bottles to flip.
                </h1>
            </div>}
            {User.waterStack.length != 0 && 
            <img onAnimationEnd={endAnim} onClick={() => spinIt()} className={`waterImgGame ${spin == 0 ? "waterAnim1" : ""} ${spin == 1 ? "waterAnim2" : ""} ${spin == 2 ? "waterAnim3" : ""} ${spin == 3 ? "waterAnim4" : ""}`}src={User.waterStack[0].img}/>}
            {User.waterStack.length != 0 && <img className="tableLMAO" src="uglyTable.png"/>}
            {text != "" && <div className="txtLol">
                <h1>{text}</h1>
                <h3>{"Click the water bottle again to continue."}</h3>
            </div>}
        </div>
        <Navbar/>
    </div>
  )
}

export default BottleFlipGame;
