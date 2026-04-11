import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import { User, type WaterBottle } from './User';

function Shop() {
  const [viewdex, setViewdex] = useState(-1);
  const [addex, setAddex] = useState(-1);
  const [isCart, setIsCart] = useState(false);
  const [cart, setCart] = useState<WaterBottle[]>([]);
  const [checkout, isCheckout] = useState(false);
  User.generate();

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
      <Navbar/>
      {
        (viewdex == -1 && !checkout) && <div onClick={() => {if (isCart) setIsCart(false)}}>
          <br/>
          <div className="marginCart">
            <div style={{display: "flex"}}>
            <div className = "buttonLol cartButton" onClick={() => setIsCart(true)}><img src="womenBeShopping.png"/></div>
            <h1 style={{margin: "0px", fontSize: "35px"}}>{User.droplets}💧</h1>
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
          <div onClick={() => {if (isCart) setIsCart(false)}}>{waterbottles.map((value, index) =>
          <div className = "waterBottle" style={{"--marginLol": value.margin} as React.CSSProperties} key={index}>
            <img src={value.img}/>
            <p>{value.name}: {value.cost}💧</p>
            <br/>
            <div style={{"display": "flex"}}>
              <div className = "buttonLol" onClick={() => setViewdex(index)}><p>View</p></div>
              <div className = "buttonLol" onClick={() => addToCart(value)}><p>Add to Cart</p></div>
            </div>
          </div>
        )}</div></div>
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
          <div style={{height: "50vh", overflow: "auto"}}>
            {cart.map((value, index) => <div style={{position: "relative", width: "50vw"}}>
              <br/>
              {index != 0 && <hr style={{marginLeft: "20px", marginRight: "20px"}}/>}
              <div className="cartItem" key={index}>
                <img src={value.img} />
                <div className = "cartText" style={{width: "50vw"}}>
                  <p>{value.name}</p>
                </div>
                <br/>
                <div className="buttonLol trashButton" onClick={() => removeContent(index)}><img src="trash.png" /></div>
              </div>
            </div>)}
          </div>
          <div>
            <h1>Total Cost: {cumsum()}</h1>
            <div className="buttonLol" onClick={() => purchaseFunc()}><p>Purchase</p></div>
          </div>
        </div>
      }
    </div>
  )
}

export default Shop
