import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (e, type) => {
    e.preventDefault();
    if (type === 'mail') {
      setPopupInfo({ title: 'Email Us', content: 'ponnangaienterprises12@gmail.com' });
    } else if (type === 'phone') {
      setPopupInfo({ title: 'Call Us', content: '7092148969, 9360249450' });
    } else if (type === 'map') {
      setPopupInfo({ title: 'Visit Us', content: '2, Muththamman Street, Muthuamman Nagar, Ayanavaram, Chennai - 600023, Tamil Nadu' });
    }
  };

  const handleContactUs = () => {
    setPopupInfo(null);
    navigate('/contact');
  };

  return (
    <footer className="footer" style={{ position: 'relative' }}>
      {/* Popup Modal */}
      {popupInfo && (
        <div className="footer-modal-overlay" onClick={() => setPopupInfo(null)}>
          <div className="footer-modal" onClick={e => e.stopPropagation()}>
            <button className="footer-modal-close" onClick={() => setPopupInfo(null)}>
              <X size={20} />
            </button>
            <h4 style={{ color: 'var(--deep-blue)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{popupInfo.title}</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.5' }}>{popupInfo.content}</p>
            <button className="btn btn-primary" onClick={handleContactUs} style={{ width: '100%' }}>
              Contact Us
            </button>
          </div>
        </div>
      )}

      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Ponnangai Enterprises</h3>
          <p>
            High-performance, industrial-grade cleaning solutions engineered for absolute hygiene and radiant results.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon" onClick={(e) => handleIconClick(e, 'mail')}>
              <Mail size={20} />
            </a>
            <a href="#" className="social-icon" onClick={(e) => handleIconClick(e, 'phone')}>
              <Phone size={20} />
            </a>
            <a href="#" className="social-icon" onClick={(e) => handleIconClick(e, 'map')}>
              <MapPin size={20} />
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
            <li 
              style={{ display: 'flex', gap: '8px', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
              onClick={(e) => handleIconClick(e, 'map')}
            >
              <MapPin size={20} style={{ flexShrink: 0 }} />
              <span>
                2, Muththamman Street,<br/>
                Muthuamman Nagar, Ayanavaram,<br/>
                Chennai - 600023, Tamil Nadu
              </span>
            </li>
            <li 
              style={{ display: 'flex', gap: '8px', color: 'rgba(255,255,255,0.7)', marginTop: '8px', cursor: 'pointer' }}
              onClick={(e) => handleIconClick(e, 'phone')}
            >
              <Phone size={20} style={{ flexShrink: 0 }} />
              <span>7092148969<br/>9360249450</span>
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
