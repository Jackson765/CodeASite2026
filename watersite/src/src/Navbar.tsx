import { useState } from 'react'
import './App.css'

function Navbar() {
  return (
    <div className="nav">
      <div className="title">
        <h1>
          Water Bottles for Sale
        </h1>
      </div>
      <div className="navBar">
        <a href="/">
          <div className="navBarComp">
            <h1>About Us</h1>
          </div>
        </a>
        <a href="/shop">
          <div className="navBarComp">
            <h1>Shop</h1>
          </div>
        </a>
        <a href="/instructions">
          <div className="navBarComp">
            <h1>Instructions</h1>
          </div>
        </a>
        <a href="/bottle">
          <div className="navBarComp">
            <h1>Gamble</h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Navbar