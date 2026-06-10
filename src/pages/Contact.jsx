import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';
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
      toast.error('Please fill in your Name, Phone, and Message.');
      return;
    }
    const text = `Hi, I have an inquiry.%0A%0AMessage: ${formData.message}%0A%0AMy Name: ${formData.name}%0AEmail: ${formData.email || 'N/A'}%0APhone: ${formData.phone}`;
    window.open(`https://wa.me/917092148969?text=${text}`, '_blank');
  };
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
                <p>2/1 Muthuamman Kovil Street,<br/>Thandhai Periyar Nagar, Aynavaram,<br/>Chennai - 600023</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-text">
                <h4>Call Us</h4>
                <p>+91 7092148969<br />+91 9360249450</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon"><Mail size={24} /></div>
              <div className="contact-text">
                <h4>Email Us</h4>
                <p>ponnangaienterprises12@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon"><Clock size={24} /></div>
              <div className="contact-text">
                <h4>Business Hours</h4>
                <p>Monday - Saturday<br />10:00 AM - 7:00 PM</p>
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
            <form onSubmit={handleEnquire}>
              <div className="form-group floating-group">
                <input type="text" id="name" className="form-control" placeholder=" " value={formData.name} onChange={handleChange} required />
                <label htmlFor="name" className="floating-label">Full Name</label>
              </div>
              <div className="form-group floating-group">
                <input type="email" id="email" className="form-control" placeholder=" " value={formData.email} onChange={handleChange} required />
                <label htmlFor="email" className="floating-label">Email Address</label>
              </div>
              <div className="form-group floating-group">
                <input type="tel" id="phone" className="form-control" placeholder=" " value={formData.phone} onChange={handleChange} required />
                <label htmlFor="phone" className="floating-label">Phone Number</label>
              </div>
              <div className="form-group floating-group">
                <textarea id="message" className="form-control" placeholder=" " value={formData.message} onChange={handleChange} required></textarea>
                <label htmlFor="message" className="floating-label">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Enquire Now
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="maps-section">
        <div className="container">
          <div className="maps-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--deep-blue)', marginBottom: '1rem' }}>Our Locations</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Visit our factory or shops directly</p>
          </div>
          
          <div className="maps-grid">
            <motion.div 
              className="map-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Factory Location</h3>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5463000194704!2d80.22639199999999!3d13.0949757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526568484c588b%3A0x8b9af24eeba25f34!2sPonnangai%20Enterprises!5e1!3m2!1sen!2sin!4v1779780088532!5m2!1sen!2sin" width="100%" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="map-drawer">
                <p>2/1 Muthuamman Kovil Street, Thandhai Periyar Nagar, Aynavaram, Chennai - 600023</p>
              </div>
            </motion.div>

            <motion.div 
              className="map-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Aminjikarai</h3>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8823583775816!2d80.2249581!3d13.073878100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267003344574d%3A0x282f2b4387c73d04!2sPonnangai%20enterprises%20factory%20outlet!5e1!3m2!1sen!2sin!4v1781088926886!5m2!1sen!2sin" width="100%" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="map-drawer">
                <p>G2, 531/307, Poonamallee High Rd, Aminjikarai, Chennai, Tamil Nadu 600030</p>
              </div>
            </motion.div>

            <motion.div 
              className="map-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3>Kolathur</h3>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1594452789313!2d80.205719!3d13.119220999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52650073790e73%3A0x56f7228a1edfa458!2sPonnangai%20enterprises!5e1!3m2!1sen!2sin!4v1781088964840!5m2!1sen!2sin" width="100%" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="map-drawer">
                <p>Plot No-49, 2nd Main Rd, Baba Nagar, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu 600099</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
