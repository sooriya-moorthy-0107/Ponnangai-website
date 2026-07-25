import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Modal from './ui/Modal';
import './Footer.css';

const Footer = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (e, type) => {
    e.preventDefault();
    if (type === 'mail') {
      setPopupInfo({ title: 'Email Us Directly', content: 'ponnangaienterprises12@gmail.com' });
    } else if (type === 'phone') {
      setPopupInfo({ title: 'Call Our Sales Office', content: '+91 7092148969 / +91 9360249450' });
    } else if (type === 'map') {
      setPopupInfo({ title: 'Manufacturing Location', content: '2, Muththamman Street, Muthuamman Nagar, Ayanavaram, Chennai - 600023, Tamil Nadu' });
    }
  };

  const handleContactUs = () => {
    setPopupInfo(null);
    navigate('/contact');
  };

  return (
    <footer className="footer">
      {/* Quick Modal Popup */}
      {popupInfo && (
        <Modal 
          isOpen={!!popupInfo} 
          onClose={() => setPopupInfo(null)}
          title={popupInfo.title}
        >
          <div className="footer-popup-content">
            <p>{popupInfo.content}</p>
            <button className="btn btn-primary w-full" onClick={handleContactUs}>
              Contact Us Now
            </button>
          </div>
        </Modal>
      )}

      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/assets/logo.png" alt="Ponnangai Logo" />
            <span>Ponnangai Enterprises</span>
          </div>
          <p className="brand-tagline">
            High-performance, industrial-grade cleaning solutions engineered for absolute hygiene, radiant shine, and lasting freshness.
          </p>
          <div className="footer-socials">
            <motion.a 
              href="#" 
              className="social-icon" 
              onClick={(e) => handleIconClick(e, 'mail')}
              whileHover={{ scale: 1.15, backgroundColor: "var(--primary-orange)" }}
              whileTap={{ scale: 0.9 }}
              title="Email Us"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon" 
              onClick={(e) => handleIconClick(e, 'phone')}
              whileHover={{ scale: 1.15, backgroundColor: "var(--primary-orange)" }}
              whileTap={{ scale: 0.9 }}
              title="Call Us"
            >
              <Phone size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon" 
              onClick={(e) => handleIconClick(e, 'map')}
              whileHover={{ scale: 1.15, backgroundColor: "var(--primary-orange)" }}
              whileTap={{ scale: 0.9 }}
              title="Location"
            >
              <MapPin size={18} />
            </motion.a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/about">About Our Heritage</Link></li>
            <li><Link to="/products">Product Catalog</Link></li>
            <li><Link to="/contact">Get In Touch</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Headquarters</h4>
          <ul className="footer-contact-list">
            <li onClick={(e) => handleIconClick(e, 'map')}>
              <MapPin size={20} className="icon-orange" />
              <span>
                2/1 Muthuamman Kovil St, Aynavaram,<br />
                Chennai - 600023, Tamil Nadu
              </span>
            </li>
            <li onClick={(e) => handleIconClick(e, 'phone')}>
              <Phone size={20} className="icon-orange" />
              <span>+91 7092148969 / 9360249450</span>
            </li>
            <li onClick={(e) => handleIconClick(e, 'mail')}>
              <Mail size={20} className="icon-orange" />
              <span>ponnangaienterprises12@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>© 2026 Ponnangai Enterprises. All rights reserved.</p>
          <span className="footer-badge"><Sparkles size={12} /> Crafted for Superior Cleanliness</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
