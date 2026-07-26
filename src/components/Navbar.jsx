import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { useLoader } from '../context/LoaderContext';
import { useEnquiry } from '../context/EnquiryContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { triggerLoader } = useLoader();
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products Catalog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => triggerLoader()}>
          <motion.img 
            src="/assets/logo.png" 
            alt="Ponnangai Logo" 
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="logo-text-wrapper">
            <span className="logo-title">PONNANGAI</span>
            <span className="logo-sub">ENTERPRISES</span>
          </div>
        </Link>
        
        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (item.path === '/') triggerLoader();
                }}
              >
                <motion.span 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.div 
                    className="active-indicator" 
                    layoutId="activeIndicator" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => openEnquiry()} 
              className="btn btn-primary nav-cta shine-sweep"
            >
              <Sparkles size={16} />
              <span>Enquire Now</span>
            </button>
          </motion.div>
        </nav>

        <motion.button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Drawer with Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-drawer-content container">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link 
                    to={item.path} 
                    className={`mobile-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (item.path === '/') triggerLoader();
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiry();
                  }} 
                  className="btn btn-primary shine-sweep"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  <Send size={18} />
                  <span>Enquire Now</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
