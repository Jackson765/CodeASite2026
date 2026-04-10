import { useState } from 'react'
import './App.css'

function Navbar() {
  return (
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
    </div>
  )
}

export default Navbar
