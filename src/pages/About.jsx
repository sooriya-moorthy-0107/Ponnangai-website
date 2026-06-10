import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            Who We Are
          </motion.h1>
          <motion.p 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            A legacy of brilliant cleanliness, engineered for excellence.
          </motion.p>
        </div>
      </section>

      <section className="about-content container">
        <div className="story-grid">
          <motion.div 
            className="story-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2>Our Story</h2>
            <p>
              Founded with a vision to revolutionize the housekeeping and hygiene industry, Ponnangai Enterprises has consistently delivered high-performance, industrial-grade cleaning solutions.
            </p>
            <p>
              We believe in the power of a pristine environment. Whether it’s a bustling commercial space or a cozy home, our products ensure a brilliant shine and a loveable freshness.
            </p>
          </motion.div>
          <motion.div 
            className="story-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/products/professional.png" alt="Our Facility" />
          </motion.div>
        </div>
      </section>

      <section className="heritage-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Heritage
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Decades of trust, vibrant fragrances, and unmatched quality.
          </motion.p>
          
          <motion.img 
            src="/assets/logo.png" 
            alt="Ponnangai Traditional Logo" 
            className="heritage-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
