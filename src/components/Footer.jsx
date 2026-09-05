import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Modal from './ui/Modal';
import { useLoader } from '../context/LoaderContext';
import { useEnquiry } from '../context/EnquiryContext';
import './Footer.css';

const Footer = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const navigate = useNavigate();
  const { triggerLoader } = useLoader();
  const { openEnquiry } = useEnquiry();

  const handleIconClick = (e, type) => {
    e.preventDefault();
    if (type === 'mail') {
      setPopupInfo({ title: 'Email Us Directly', content: 'ponnangaienterprises12@gmail.com' });
    } else if (type === 'phone') {
      setPopupInfo({ title: 'Call Customer Support', content: '+91 7092148969 / 9360249450' });
    } else if (type === 'map') {
      setPopupInfo({ title: 'Manufacturing Location', content: '2, Muththamman Street, Muthuamman Nagar, Ayanavaram, Chennai - 600023, Tamil Nadu' });
    }
  };

  const handleContactUs = () => {
    setPopupInfo(null);
    openEnquiry();
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
          <Link to="/" className="footer-logo" onClick={() => triggerLoader()} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <img src="/assets/logo.png" alt="Ponnangai Logo" />
            <span style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1.2rem' }}>Ponnangai Enterprises</span>
          </Link>
          <p className="brand-tagline">
            <strong style={{ color: 'var(--orange-400)', display: 'block', marginBottom: '6px', fontSize: '1.08rem', letterSpacing: '0.02em' }}>&ldquo;Brilliant Cleanliness&rdquo;</strong>
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
            <li><Link to="/" onClick={() => triggerLoader()}>Home Page</Link></li>
            <li><Link to="/about">About Our Heritage</Link></li>
            <li><Link to="/products">Product Catalog</Link></li>
            <li><Link to="/contact">Get In Touch</Link></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Headquarters</h4>
          <ul className="footer-contact-list">
            <li onClick={(e) => handleIconClick(e, 'map')}>
              <MapPin size={20} style={{ color: '#FFFFFF' }} />
              <span>
                2/1 Muthuamman Kovil St, Aynavaram,<br />
                Chennai - 600023, Tamil Nadu
              </span>
            </li>
            <li onClick={(e) => handleIconClick(e, 'phone')}>
              <Phone size={20} style={{ color: '#FFFFFF' }} />
              <span>+91 7092148969 / 9360249450</span>
            </li>
            <li onClick={(e) => handleIconClick(e, 'mail')}>
              <Mail size={20} style={{ color: '#FFFFFF' }} />
              <span>ponnangaienterprises12@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p className="font-mono" style={{ fontSize: '0.8rem' }}>© 2026 Ponnangai Enterprises. All rights reserved.</p>
          <span className="footer-badge"><Sparkles size={14} /> Brilliant Cleanliness &mdash; Engineered</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
