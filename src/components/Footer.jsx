import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Ponnangai Enterprises</h3>
          <p>
            High-performance, industrial-grade cleaning solutions engineered for absolute hygiene and radiant results.
          </p>
          <div className="footer-socials">
            <a href="mailto:ponnangaienterprises2003@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
            <a href="tel:8610126937" className="social-icon">
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Who We Are</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/contact">Get In Touch</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact Us</h4>
          <ul>
            <li style={{ display: 'flex', gap: '8px', color: 'rgba(255,255,255,0.7)' }}>
              <MapPin size={20} style={{ flexShrink: 0 }} />
              <span>
                2, Muththamman Street,<br/>
                Muthuamman Nagar, Ayanavaram,<br/>
                Chennai - 600023, Tamil Nadu
              </span>
            </li>
            <li style={{ display: 'flex', gap: '8px', color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>
              <Phone size={20} style={{ flexShrink: 0 }} />
              <span>8610126937</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Ponnangai Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
