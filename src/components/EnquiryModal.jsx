import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Download } from 'lucide-react';
import { toast } from 'sonner';
import Modal from './ui/Modal';

const EnquiryModal = ({ isOpen, onClose, initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        message: `Hi, I am interested in inquiring about ${initialProduct}. Please share bulk pricing and specifications.`
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        message: ''
      }));
    }
  }, [initialProduct, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEnquire = (e) => {
    e.preventDefault();
    const text = `Hello Ponnangai Enterprises,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0APhone/WhatsApp: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email || 'N/A')}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/917092148969?text=${text}`, '_blank');
    toast.success('Opening WhatsApp inquiry window...');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Send Us a Message">
      <div className="enquiry-modal-content text-center">
        <p className="form-subtext text-center" style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Fill in the details below to launch a direct WhatsApp query to our sales & support team.
        </p>

        <form onSubmit={handleEnquire} className="contact-form">
          <div className="form-group text-center" style={{ marginBottom: '0.85rem' }}>
            <label htmlFor="name" className="text-center" style={{ marginBottom: '0.3rem' }}>Full Name *</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
              className="text-center"
              required 
              style={{ padding: '0.65rem 1rem' }}
            />
          </div>

          <div className="form-grid-2" style={{ marginBottom: '0.85rem' }}>
            <div className="form-group text-center">
              <label htmlFor="phone" className="text-center" style={{ marginBottom: '0.3rem' }}>Phone / WhatsApp *</label>
              <input 
                type="tel" 
                id="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Enter phone number" 
                className="text-center"
                required 
                style={{ padding: '0.65rem 1rem' }}
              />
            </div>

            <div className="form-group text-center">
              <label htmlFor="email" className="text-center" style={{ marginBottom: '0.3rem' }}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter email address" 
                className="text-center"
                style={{ padding: '0.65rem 1rem' }}
              />
            </div>
          </div>

          <div className="form-group text-center" style={{ marginBottom: '0.85rem' }}>
            <label htmlFor="message" className="text-center" style={{ marginBottom: '0.3rem' }}>Your Inquiry Message *</label>
            <textarea 
              id="message" 
              rows="2" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Tell us what cleaning products or bulk quantities you need..." 
              className="text-center"
              required 
              style={{ padding: '0.65rem 1rem' }}
            />
          </div>

          {/* Interactive Dual Buttons Container */}
          <div className="form-actions-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.25rem' }}>
            <motion.button 
              type="submit" 
              className="btn-contact-submit shine-sweep"
              whileHover={{ scale: 1.05, boxShadow: "0 18px 40px rgba(255, 109, 0, 0.45)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="btn-icon-circle">
                <Send size={18} />
              </div>
              <span>Send Inquiry via WhatsApp</span>
            </motion.button>

            <motion.a 
              href="/assets/ponnangai_brochure.pdf" 
              download="Ponnangai_Brochure.pdf"
              className="btn-download-brochure shine-sweep font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download Brochure</span>
            </motion.a>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EnquiryModal;
