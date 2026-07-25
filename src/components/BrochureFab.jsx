import React, { useState } from 'react';
import { BookOpen, Download, FileText } from 'lucide-react';
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
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        title="Download Product Brochure"
      >
        <BookOpen size={24} />
        <span className="fab-tooltip">Product Brochure</span>
      </motion.button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Ponnangai Enterprises Brochure"
      >
        <div className="brochure-modal-body">
          <div className="brochure-icon-wrapper">
            <FileText size={48} className="brochure-modal-icon" />
          </div>
          <h3>Download Our Official Catalog</h3>
          <p>
            Get detailed specifications, bulk packaging options, chemical safety notes, and product variants in PDF format.
          </p>
          <motion.a 
            href="/assets/ponnangai_brochure.pdf" 
            download="Ponnangai_Brochure.pdf"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            <span>Download PDF Brochure</span>
          </motion.a>
        </div>
      </Modal>
    </>
  );
};

export default BrochureFab;
