import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '3rem', color: 'var(--deep-blue)', marginBottom: '1rem' }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </motion.p>
        </div>
      </section>

      <section className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Contact Information</h2>
            
            <div className="contact-detail">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div className="contact-text">
                <h4>Our Headquarters</h4>
                <p>123 Ponnangai Industrial Estate,<br />Chennai, Tamil Nadu 600001</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-text">
                <h4>Call Us</h4>
                <p>+91 98765 43210<br />+91 44 2345 6789</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon"><Mail size={24} /></div>
              <div className="contact-text">
                <h4>Email Us</h4>
                <p>info@ponnangai.com<br />sales@ponnangai.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon"><Clock size={24} /></div>
              <div className="contact-text">
                <h4>Business Hours</h4>
                <p>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '1.8rem', color: 'var(--deep-blue)', marginBottom: '2rem' }}>Send us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" className="form-control" placeholder="+91" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" className="form-control" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div style={{ textAlign: 'center' }}>
          <MapPin size={48} style={{ color: 'var(--primary-orange)', marginBottom: '1rem' }} />
          <p>Interactive Map Component</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
