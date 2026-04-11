import { useState } from 'react'
import './App.css'
import { useGoogleLogin } from '@react-oauth/google';
import { User } from './User';

function Navbar() {
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const request = {
        method: 'POST',
        body: JSON.stringify({
          id: tokenResponse.access_token,
          waterStack: User.waterStack,
          droplets: User.droplets
        }),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8'
        })
      }

      const resultString = JSON.parse(await (fetch("http://localhost:5000/auth", request).then(textData => { return textData.text(); })));

  }});
  return (
    <div className="nav">
      <div className="fixedSignIn">
        <p onClick = {() => login()}>Sign In</p>
      </div>
      <div className="title">
        <h1>
          Bottle Bridge
        </h1>
        <p>A bridge between obtaining and drinking water, all in an instant.</p>
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