import React from 'react';
import logo from "../../assets/new-logo.jpg";
import { FaWhatsapp } from 'react-icons/fa';
import { SiLinkedin, SiYoutube, SiFacebook } from "react-icons/si";
import "./Footer.css"; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-wrapper bg-primary row row-cols-1 row-cols-sm-2 row-cols-md-2'>
        <div className='col'>
            <div>
                <Link to="/global-trader">
                    <img src={logo} alt="EnviGo Logo" height="150" width="250"/>
                </Link>
            </div>
            <div className='footer-icons'>
            <a href="https://wa.me/918939169177" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
                <FaWhatsapp />
                </a>
                <a href="https://wa.me/918939169177" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
                <SiYoutube />
                </a>
                <a href="https://wa.me/918939169177" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
                <SiFacebook />
                </a>
            </div>
        </div>
        <div className='col'>
            <div>
                <span>Contact</span>
            </div>
            <div>
                <span>91+8939169177</span>
                <br />
                <span>envigocustomer@gmail.com</span>
                <br />
                <span>envigoofficial@gmail.com</span>  
            </div>
            <div>
                <span>Terms & Conditions</span>
                <span>Privacy</span>
            </div>
        </div>
    </div>
  );
}

export default Footer;