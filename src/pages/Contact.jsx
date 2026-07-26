import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, MessageSquare, Download } from 'lucide-react';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEnquire = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in your Name, Phone Number, and Message.');
      return;
    }
    const text = `Hi Ponnangai Enterprises,%0A%0AMessage: ${encodeURIComponent(formData.message)}%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email || 'N/A')}%0APhone: ${encodeURIComponent(formData.phone)}`;
    window.open(`https://wa.me/917092148969?text=${text}`, '_blank');
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | Ponnangai Enterprises</title>
        <meta name="description" content="Get in touch with Ponnangai Enterprises for inquiries about bulk housekeeping products, cleaning liquids, and enterprise supply." />
      </Helmet>

      {/* Header Banner */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge-orange mb-2"><Sparkles size={14} /> We'd Love to Hear From You</span>
            <h1 className="section-title text-center">Get In <span>Touch With Us</span></h1>
            <p className="section-subtitle text-center">
              Have questions about our products, bulk pricing, or custom orders? Reach out to our sales & support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="container contact-content-section">
        <div className="contact-grid">
          {/* Info Card with Drag Gesture */}
          <motion.div 
            className="contact-info-card glass-card-dark shine-sweep text-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.15}
            whileGrab={{ cursor: 'grabbing', scale: 1.02 }}
          >
            <div className="info-header text-center">
              <span className="badge-orange mx-auto">Direct Contact</span>
              <h2 className="text-center">Ponnangai Enterprises</h2>
              <p className="text-center">Reach out directly for corporate partnerships and bulk supplies.</p>
            </div>

            <div className="contact-details-list">
              <div className="contact-detail-item centered-item">
                <div className="detail-icon"><MapPin size={22} /></div>
                <div className="text-center font-mono" style={{ fontSize: '0.88rem' }}>
                  <h4>Manufacturing Unit</h4>
                  <p>2/1 Muthuamman Kovil Street,<br />Thandhai Periyar Nagar, Aynavaram,<br />Chennai - 600023, Tamil Nadu</p>
                </div>
              </div>

              <div className="contact-detail-item centered-item">
                <div className="detail-icon"><Phone size={22} /></div>
                <div className="text-center font-mono" style={{ fontSize: '0.9rem' }}>
                  <h4>Call Us</h4>
                  <p>+91 7092148969<br />+91 9360249450</p>
                </div>
              </div>

              <div className="contact-detail-item centered-item">
                <div className="detail-icon"><Mail size={22} /></div>
                <div className="text-center font-mono" style={{ fontSize: '0.88rem' }}>
                  <h4>Email Us</h4>
                  <p>ponnangaienterprises12@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item centered-item">
                <div className="detail-icon"><Clock size={22} /></div>
                <div className="text-center font-mono" style={{ fontSize: '0.85rem' }}>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="quick-whatsapp-box centered-box">
              <MessageSquare size={24} className="wa-icon" />
              <div className="text-center">
                <h5>Instant WhatsApp Support</h5>
                <p>Chat directly with our representative</p>
              </div>
              <a 
                href="https://wa.me/917092148969" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                Chat Now
              </a>
            </div>
          </motion.div>

          {/* Form Card with Drag Gesture & Redesigned Centered Button */}
          <motion.div 
            className="contact-form-card glass-panel shine-sweep text-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.15}
            whileGrab={{ cursor: 'grabbing', scale: 1.02 }}
          >
            <h3 className="text-center">Send Us a Message</h3>
            <p className="form-subtext text-center">Fill in the details below to launch a direct WhatsApp query to our team.</p>

            <form onSubmit={handleEnquire} className="contact-form">
              <div className="form-group text-center">
                <label htmlFor="name" className="text-center">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Enter your name" 
                  className="text-center"
                  required 
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group text-center">
                  <label htmlFor="phone" className="text-center">Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Enter phone number" 
                    className="text-center"
                    required 
                  />
                </div>

                <div className="form-group text-center">
                  <label htmlFor="email" className="text-center">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter email address" 
                    className="text-center"
                  />
                </div>
              </div>

              <div className="form-group text-center">
                <label htmlFor="message" className="text-center">Your Inquiry Message *</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us what cleaning products or bulk quantities you need..." 
                  className="text-center"
                  required 
                />
              </div>

              {/* Redesigned Glowing Centered Contact Buttons */}
              <div className="form-actions-row">
                <motion.button 
                  type="submit" 
                  className="btn-contact-submit shine-sweep"
                  whileHover={{ scale: 1.06, boxShadow: "0 18px 40px rgba(255, 109, 0, 0.45)" }}
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
          </motion.div>
        </div>
      </section>

      {/* Wholesale & Institutional Inquiry Banner (§5 IA) */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, var(--blue-800) 100%)', color: '#fff', textAlign: 'center', padding: '4.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <span className="badge-orange mb-3 font-mono">Wholesale & Institutional Supply</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#fff', fontWeight: 800 }}>Need Custom 5L <span style={{ color: 'var(--orange-400)' }}>Bulk Formulations?</span></h2>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', marginBottom: '2.25rem', lineHeight: 1.6 }}>
            We supply hotels, hospital facilities, industrial laundries, and commercial offices across Tamil Nadu and South India with tailored packaging and discounted contract pricing.
          </p>
          <a href="https://wa.me/917092148969?text=Hi, I want to enquire about institutional wholesale contract pricing" target="_blank" rel="noopener noreferrer" className="btn btn-primary shine-sweep">
            <span>Connect With Wholesale Sales &rarr;</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
