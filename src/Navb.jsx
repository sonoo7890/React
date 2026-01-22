import React from 'react'
import "./Navb.css"
const Navb = () => {
  return (
    <div>
      <nav class="navbar">
      
      <div class="nav-left">

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsI9HwvdSE5wx0pEigeQsB0Ko3ILVF8uunw&s" alt="Logo" className="logo" />
      </div>

      
      <div class="nav-right">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
    </div>
  )
}

export default Navb
