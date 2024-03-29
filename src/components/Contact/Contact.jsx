// ContactForm.js

import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import mailIcon from './mail.png'; // Adjust path as needed
import contactIcon from './contact.jpg'; // Adjust path as needed
import locationIcon from './location.png'; // Adjust path as needed
import logoImage from './logo.png'; // Adjust path as needed
import videoSource from './Untitled video - Made with Clipchamp.mp4'; // Adjust path as needed

const ContactForm = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const services = document.getElementById('services').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Services:', services);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('services').value = '';

    alert('Form submitted successfully!');
  };

  return (
    <div className="main">
      <div className="contact-form">
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            src={videoSource}
            className="background-video"
            style={{ display: isVideoPlaying ? 'block' : 'none' }}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          />
        </div>
        <h1 style={{ color: 'azure' }}>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" style={{ color: 'azure' }}>Name:</label>
            <input type="text" id="name" placeholder="Enter your Name" required />
          </div>
          <div>
            <label htmlFor="email" style={{ color: 'azure' }}>Email:</label>
            <input type="email" id="email" placeholder="Enter your Email ID" required />
          </div>
          <div>
            <label htmlFor="services" style={{ color: 'azure' }}>Services we offer:</label>
            <select id="services" className="services-offer" required>
              <option value="">Select service</option>
              <option value="Event">Event</option>
              <option value="Manpower">Man power</option>
              <option value="Outdoor cantervan">Outdoor cantervan</option>
              <option value="Installation">Installation</option>
              <option value="Shop openings">Shop openings</option>
              <option value="Promotion & Inshop branding">Promotion & Inshop branding</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" style={{ color: 'azure' }}>Message:</label>
            <textarea id="message" placeholder="Type your message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="icon-links">
          <a href="mailto:globaltrader19@gmail.com">
            <img src={mailIcon} alt="Email" />
          </a>
          <a href="tel:8939169177">
            <img src={contactIcon} alt="Phone" />
          </a>
          <a href="https://www.google.com/maps/place/...">
            <img src={locationIcon} alt="Location" />
          </a>
        </div>
        <div className="contact-about text-white">
          <p>Have questions or need assistance? Reach out to our dedicated team for expert event planning guidance and support. Contact us today to turn your event dreams into reality!</p>
        </div>
      </div>
      {/* <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>
      <h1 style={{ marginTop: '-180px', color: 'rgb(0, 0, 255)', float: 'right', marginRight: '170px' }}>GLOBAL TRADER</h1> */}
    </div>
  );
};

export default ContactForm;
