import { useState } from 'react'
import './App.css'
import { useGoogleLogin } from '@react-oauth/google';
import { User } from './User';

function Navbar() {
  const [forceRefresh, refresh] = useState(false);

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

      const response = await fetch("https://codeasite2026.onrender.com/auth", request);
      const result = await response.json();
      User.droplets = result.droplets;
      User.username = result.user;
      User.waterStack = result.waterStack;
      User.save()
      refresh(!forceRefresh);
  }});
  return (
    <div className="nav">
      <div className="fixedSignIn">
        {User.username == "" && <p onClick = {() => login()} style={{cursor: "pointer"}}>Sign In</p>}
        {User.username != "" && <p>Hello, {User.username}</p>}
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
        <a href="/https://game-web-host--kekepui.replit.app/">
          <div className="navBarComp">
            <h1>Bonus Game</h1>
          </div>
        </a>
      </div>
    {forceRefresh && <></>}
    </div>
  )
}

export default Navbar