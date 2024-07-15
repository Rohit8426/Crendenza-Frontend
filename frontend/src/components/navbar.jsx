import React from 'react'
import "./navbar.css"
import logo from "../assets/Logo/logo.png"

function Navbar() {
  return (
    <>
    
    
    <nav class="navbar">
    <div class="logo-container">
       <img src={logo} alt="" className='logo'/>
      
    </div>
    <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Learning Science </a>
        <a href="#">Learning Vedic Maths</a>
        <a href="#">Learning Bespoke</a>
    </div>
    <div class="contact-button">
        <a href="#" class="btn">Contact Us</a>
    </div>
</nav>
<hr />
</>
  )
}

export default Navbar