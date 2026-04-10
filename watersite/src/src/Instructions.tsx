import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';

function Instructions() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <h1>Balls</h1>
      <a href="/shop">hi</a>
    </div>
  )
}

export default Instructions
