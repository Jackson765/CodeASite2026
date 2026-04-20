import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import { User, type WaterBottle } from './User';

function Shop() {
  const [viewdex, setViewdex] = useState(-1);
  const [isCart, setIsCart] = useState(false);
  const [cart, setCart] = useState<WaterBottle[]>([]);
  const [checkout, isCheckout] = useState(false);
  User.generate();

  const waterbottles : WaterBottle[] = [
    {
      name: "Polar Springs", 
      cost: 100, 
      img: "polarSprings.png", 
      description: "This is one of my favorites!  Everyone knows and loves polar springs, and for good reason.  This water is phenomenal...",
      margin: 5,
      margin2: 20,
    },
    {
      name: "Dasani", 
      cost: 10, 
      img: "dasani.png", 
      description: "ew",
      margin: 2,
      margin2: 10,
    },
    {
      name: "Aquafina", 
      cost: 50, 
      img: "aquafina.png", 
      description: "So refreshing, you're gonna say yummy yummy yum in my tummy tummy tum.",
      margin: 2,
      margin2: 10,
    },
    {
      name: "Evian", 
      cost: 1, 
      img: "evian.png", 
      description: "wtf is evian",
      margin: 5,
      margin2: 20,
    },
    {
      name: "Fiji", 
      cost: 1000, 
      img: "fiji.png", 
      description: "Think...luxury.  Sounds like this is one for the Bahamas haha!",
      margin: 2,
      margin2: 10,
    },
    {
      name: "Pure Life", 
      cost: 1, 
      img: "pureLife.png", 
      description: "I beg my mommy daily to buy the polar springs but she just refuses.  She insists of pure life :(",
      margin: 2,
      margin2: 10,
    },
    {
      name: "Smart Water", 
      cost: 500, 
      img: "smartWater.png", 
      description: "Whip out your stethoscopes because we've got a nerd over here!  This water bottle isn't shy to tell you his latest theorems.",
      margin: 2,
      margin2: 10,
    },
  ];
  function addToCart(item : WaterBottle) {
    var copy : WaterBottle[] | undefined = [...cart];
    copy.push(item);
    setCart(copy);
  }
  function removeContent(index :number) {
    var copy : WaterBottle[] | undefined = [...cart];
    copy.splice(index, 1);
    setCart(copy);
    setIsCart(true);
  }
  function cumsum() : number {
    var cum : number = 0;
    for (var i : number = 0; i < cart.length; i++) {
      cum += cart[i].cost;
    }
    return cum;
  }
  function purchaseFunc() {
    if (User.droplets >= cumsum()) {
      isCheckout(false);
      User.append(cart);
      User.addDrops(-cumsum());
      localStorage.setItem('userData', JSON.stringify({
        water: User.waterStack,
        droplets: User.droplets,
      }));
      setCart([]);
    }
    else {
      
    }
  }
  return (
    <div>
      <div className="video">
        <video muted autoPlay src="beach.mp4"/>
      </div>
      <Navbar/>
      {
        (viewdex == -1 && !checkout) && <div onClick={() => {if (isCart) setIsCart(false)}}>
          <br/>
          <div style={{display: "flex", width: "100vw", margin: "0px"}}>
          <div className="strokinIt"style={{fontSize: "20px", width: "65vw", margin: "0px", marginLeft: "2vw"}}><h1 style={{margin: "0px"}}>Buy an assortment of water bottles to gamble!</h1></div>
          <div className="marginCart">
            <div style={{width: "25vw"}}>
            <div className = "buttonLol cartButton" onClick={() => setIsCart(true)}><img src="womenBeShopping.png"/></div>
            </div>
            <br/>
            {isCart && <div className = "dropDown" onClick={(e) => e.stopPropagation()}>
              <div style={{position: "relative", width: "20vw"}}>
                <img src="preach.png"/>
                <div className="superDiv">
                  <div className="cartContent">
                    {cart.length == 0 && <div>
                      <br/>
                      <p>No items in your cart.</p>
                      <br/>
                    </div>}
                    {cart.map((value, index) => <div style={{position: "relative"}}>
                      <br/>
                      {index != 0 && <hr style={{marginLeft: "20px", marginRight: "20px"}}/>}
                      <div className="cartItem" key={index}>
                        <img src={value.img} />
                        <div className = "cartText">
                          <p>{value.name}</p>
                        </div>
                        <div className="buttonLol trashButton" onClick={() => removeContent(index)}><img src="trash.png" /></div>
                      </div>
                    </div>)}  
                    <br/>
                  </div>
                  <div>
                    <div className="buttonLol checkOut" onClick={() => isCheckout(true)}>Check Out</div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
          <h1 className="strokinIt">{User.droplets}💧</h1>
          </div>
          <div onClick={() => {if (isCart) setIsCart(false)}}>
            <div style={{display: "flex", width: "100vw", flexWrap: "wrap"}}>
              {waterbottles.map((value, index) =>
          <div className = "waterBottle" style={{"--marginLol": value.margin} as React.CSSProperties} key={index}>
            <img src={value.img}/>
            <p>{value.name}: {value.cost}💧</p>
            <br/>
            <div style={{"display": "flex"}}>
              <div className = "buttonLol" onClick={() => setViewdex(index)}><p>View</p></div>
              <div className = "buttonLol " onClick={() => addToCart(value)}><p>Add to Cart</p></div>
            </div>
          </div>
        )}</div></div></div>
      }
      {
        (viewdex != -1 && !checkout) && <div style={{"display": "flex", "width": "100vw"}} onClick={() => {if (isCart) setIsCart(false)}}>
            <div className = "waterText">
              <h1>{waterbottles[viewdex].name}</h1>
              <h2>Cost: {waterbottles[viewdex].cost}💧</h2>
              <br/>
              <p>{waterbottles[viewdex].description}</p>
              <br/>
              <br/>
              <div style={{display: "flex", marginLeft: "10vw"}}>
                <div className = "buttonLol" style={{marginLeft: "0px"}} onClick={() => addToCart(waterbottles[viewdex])}><p>Add to Cart</p></div>
                <div className = "buttonLol" style={{marginLeft: "0px"}} onClick={() => setViewdex(-1)}><p>Back to Shop</p></div>
              </div>
            </div>
            <div className = "waterImg" style={{"--marginLol": waterbottles[viewdex].margin2} as React.CSSProperties}>
              <img src={waterbottles[viewdex].img}/>
            </div>
        </div>
      }
      {
        checkout && <div style={{"display": "flex", "width": "100vw"}}>
          <div className="checkOutStuff">
            {cart.length == 0 && <div style={{marginTop: "10vh"}}>
              <p>Your shopping cart is empty.</p>
            </div>} 
            {cart.length != 0 && cart.map((value, index) => <div style={{position: "relative"}}>
              <br/>
              {index != 0 && <hr style={{marginLeft: "20px", marginRight: "20px"}}/>}
              <div className="cartItem" key={index}>
                <img src={value.img} />
                <div className = "cartText">
                  <p>{value.name}</p>
                </div>
                <br/>
                <div className="buttonLol trashButton" onClick={() => removeContent(index)}><img src="trash.png" /></div>
              </div>
            </div>)}
            <br/>
          </div>
          <div className="checkoutInfo">
            <h1>Total Cost: {cumsum()}💧</h1>
            <p>You currently have: {User.droplets}💧</p>
            <div className="buttonLol" onClick={() => purchaseFunc()}><p>Purchase</p></div><br/>
            <div className="buttonLol" onClick={() => isCheckout(false)}><p>Return to Shop</p></div>
          </div>
        </div>
      }
    </div>
  )
}

export default Shop
