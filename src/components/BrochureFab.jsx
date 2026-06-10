import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './ui/Modal';
import './BrochureFab.css';

const BrochureFab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button 
        className="brochure-fab"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        title="Download Brochure"
      >
        <BookOpen size={28} />
      </motion.button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Ponnangai Enterprises"
      >
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>Download Our Brochure</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Get detailed information about our premium cleaning solutions and product variants.
          </p>
          <a 
            href="/assets/ponnangai_brochure.pdf" 
            download="Ponnangai_Brochure.pdf"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Download Brochure
          </a>
        </div>
      </Modal>
    </>
  );
};

export default BrochureFab;
