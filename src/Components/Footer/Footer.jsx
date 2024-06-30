import React from 'react';
import instagram from '../../Assets/Images/instagram_icon.png';
import footer_logo from '../../Assets/Images/logo.png';
import whatsapp from '../../Assets/Images/whatsapp_icon.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-logo">
                <img src={footer_logo} />
                <p>BUILD UI</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-media">
                <img src={instagram} />
                <img src={whatsapp} />
            </div>
            <p className='footer-copyright'>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer