import React, { useState } from 'react';
import close from '../../Assets/Images/close.png';
import logo from '../../Assets/Images/logo.png';
import open from '../../Assets/Images/menu.png';
import './navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/closed
  const toggleBtnImg = isOpen ? close : open; // Button text based on state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
    

  return (
    <div className='navbar'>
        
      <div className="nav-container">
        <div className="logo">
          <img src={logo} />
          <p>BUILD UI</p>
        </div>
        {/* Menu with conditional visibility and class */}
          <ul className={  isOpen ? "menu-open" : "menu-hidden"}>
            <a href='#home-page'><li className='item'>Home</li></a>
            <li className='item'>Projects</li>
            <a href='#about-page'><li className='item'>About</li></a>
            <li className='item'>Contact</li>
          </ul>
        <div className="login-cart">
        <button id='login' >Login</button>
        </div>
        {/* Button to toggle dropdown (visible only on small screens) */}
        <button className="dropdown-toggle" onClick={toggleDropdown}><img className='toggleBtnImg' src={toggleBtnImg} /></button>
      </div>
    </div>
  )
}

export default Navbar;
