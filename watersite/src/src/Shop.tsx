import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';

interface WaterBottle {
  name : string;
  cost : number;
  img : string;
  description: string;
  margin: number;
  margin2: number;
}

function Shop() {
  const [viewdex, setViewdex] = useState(-1);
  const [isCart, setIsCart] = useState(false);

  const waterbottles : WaterBottle[] = [
    {
      name: "Polar Springs", 
      cost: 1, 
      img: "polarSprings.png", 
      description: "So cool",
      margin: 2.5,
      margin2: 20,
    },
  ];
  function addToCart(value : WaterBottle) {

  }
  return (
    <div onClick={() => {if (isCart) setIsCart(false)}}>
      <Navbar/>
      {
        (viewdex == -1) && <div>
          <div className="marginCart">
            <div className = "buttonLol cartButton" onClick={() => setIsCart(true)}><p>Cart</p></div>
            <br/>
            {isCart && <div className = "dropDown"><img src="preach.png"/>
              <div>

              </div>
            </div>}
          </div>
          {waterbottles.map((value, index) =>
          <div className = "waterBottle" style={{"--marginLol": value.margin} as React.CSSProperties} key={index}>
            <img src={value.img}/>
            <p>{value.name}: ${value.cost}</p>
            <br/>
            <div style={{"display": "flex"}}>
              <div className = "buttonLol" onClick={() => setViewdex(index)}><p>View</p></div>
              <div className = "buttonLol" onClick={() => addToCart(value)}><p>Add to Cart</p></div>
            </div>
          </div>
        )}</div>
      }
      {
        (viewdex != -1) && <div style={{"display": "flex", "width": "100vw"}}>
            <div className = "waterText">
              <h1>{waterbottles[viewdex].name}</h1>
              <h2>Cost: ${waterbottles[viewdex].cost}</h2>
              <br/>
              <p>{waterbottles[viewdex].description}</p>
              <br/>
              <br/>
              <div className = "buttonLol" onClick={() => setViewdex(-1)}><p>Back to Shop</p></div>
            </div>
            <div className = "waterImg" style={{"--marginLol": waterbottles[viewdex].margin2} as React.CSSProperties}>
              <img src={waterbottles[viewdex].img}/>
            </div>
        </div>
      }
    </div>
  )
}

export default Shop
