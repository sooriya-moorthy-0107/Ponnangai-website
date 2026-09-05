import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ShoppingBag, Truck, MapPin, X, Send, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import './Contact.css';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('General');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOpenForm = (type) => {
    setInquiryType(type);
    setIsFormOpen(true);
  };

  const handleEnquire = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in your Name, Phone Number, and Message.');
      return;
    }
    const text = `Hi Ponnangai Team,%0A%0AInquiry Type: ${inquiryType}%0AMessage: ${encodeURIComponent(formData.message)}%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email || 'N/A')}%0APhone: ${encodeURIComponent(formData.phone)}`;
    window.open(`https://wa.me/917092148969?text=${text}`, '_blank');
    setIsFormOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="contact-page-light">
      <Helmet>
        <title>Support | Ponnangai</title>
        <meta name="description" content="Get support, place bulk orders, or find Ponnangai outlet locations." />
      </Helmet>

      {/* Hero Header */}
      <section className="support-hero">
        <div className="container text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1>Welcome to Ponnangai Support.</h1>
            <p>How can we help you today?</p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="support-categories">
        <div className="container">
          <motion.div 
            className="categories-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div className="support-card" variants={fadeInUp} onClick={() => handleOpenForm('Retail & Household')}>
              <div className="card-icon blue-icon"><ShoppingBag size={32} /></div>
              <h3>Retail Inquiries</h3>
              <p>Questions about household products, usage, or single orders.</p>
              <div className="card-action">Send a Message <ChevronRight size={16} /></div>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="support-card" variants={fadeInUp} onClick={() => handleOpenForm('Bulk & 5L Orders')}>
              <div className="card-icon orange-icon"><Truck size={32} /></div>
              <h3>Bulk & Commercial</h3>
              <p>Get factory pricing for 5L cans for hotels, hospitals, and institutions.</p>
              <div className="card-action">Request Quote <ChevronRight size={16} /></div>
            </motion.div>

            {/* Card 3 */}
            <motion.div className="support-card" variants={fadeInUp} onClick={() => handleOpenForm('Distributorship')}>
              <div className="card-icon blue-icon"><MapPin size={32} /></div>
              <h3>Distributorship</h3>
              <p>Partner with us and distribute Ponnangai products in your region.</p>
              <div className="card-action">Partner With Us <ChevronRight size={16} /></div>
            </motion.div>

            {/* Card 4 */}
            <motion.a 
              href="https://wa.me/917092148969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="support-card" 
              variants={fadeInUp}
            >
              <div className="card-icon orange-icon"><MessageSquare size={32} /></div>
              <h3>Instant WhatsApp</h3>
              <p>Chat with our support team directly on WhatsApp for quick answers.</p>
              <div className="card-action">Start Chat <ChevronRight size={16} /></div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <div className="container">
          <motion.div 
            className="locations-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Find Us.</h2>
            <p>Visit our factory or retail outlets across Chennai.</p>
          </motion.div>

          <motion.div 
            className="locations-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Headquarters / Factory */}
            <motion.div className="location-card" variants={fadeInUp}>
              <div className="location-info">
                <h3>Headquarters & Factory</h3>
                <p>2/1 Muthuamman Kovil Street, Aynavaram, Chennai - 600023, TN</p>
              </div>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5463000194704!2d80.22639199999999!3d13.0949757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526568484c588b%3A0x8b9af24eeba25f34!2sPonnangai%20Enterprises!5e1!3m2!1sen!2sin!4v1788639653490!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aynavaram Factory"
                ></iframe>
              </div>
            </motion.div>

            {/* Amjikarai Outlet */}
            <motion.div className="location-card" variants={fadeInUp}>
              <div className="location-info">
                <h3>Amjikarai Outlet</h3>
                <p>Ponnangai Enterprises Factory Outlet, Amjikarai, Chennai</p>
              </div>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31412.370714431247!2d80.20836727511404!3d13.09497323569103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267003344574d%3A0x282f2b4387c73d04!2sPonnangai%20enterprises%20factory%20outlet!5e1!3m2!1sen!2sin!4v1788639699181!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amjikarai Outlet"
                ></iframe>
              </div>
            </motion.div>

            {/* Kolathur Outlet */}
            <motion.div className="location-card" variants={fadeInUp}>
              <div className="location-info">
                <h3>Kolathur Outlet</h3>
                <p>Ponnangai Enterprises, Kolathur, Chennai</p>
              </div>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31409.274569839556!2d80.16760110855101!3d13.119228767445682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52650073790e73%3A0x56f7228a1edfa458!2sPonnangai%20enterprises!5e1!3m2!1sen!2sin!4v1788639731705!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kolathur Outlet"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Modal Form */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div 
              className="support-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
            />
            <motion.div 
              className="support-modal"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
            >
              <button className="close-modal-btn" onClick={() => setIsFormOpen(false)}>
                <X size={24} />
              </button>
              
              <div className="modal-header">
                <h2>{inquiryType}</h2>
                <p>Provide your details and we'll reach out shortly.</p>
              </div>

              <form onSubmit={handleEnquire} className="support-form">
                <div className="input-row">
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required />
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required />
                </div>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email Address (Optional)" />
                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="How can we help? *" required />
                
                <button type="submit" className="btn-apple-submit">
                  <span>Send Request</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;
