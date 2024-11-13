import React from 'react';
import './../Css/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@ngo.org</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <p className="footer-copy">&copy; 2023 NGO Organization. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
