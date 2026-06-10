import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/assets/logo.png" alt="Ponnangai Enterprises Logo" />
          <span>Ponnangai Enterprises</span>
        </Link>
        
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu - We'll add simple inline styles here or handle via CSS if preferred */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: '80px', left: 0, right: 0, bottom: 0,
          background: 'var(--bg-white)', zIndex: 40, padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
          borderTop: '2px solid var(--primary-orange)'
        }}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{marginTop: '1rem', width: 'fit-content'}}>Enquire Now</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
