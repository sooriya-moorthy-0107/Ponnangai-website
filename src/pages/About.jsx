import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, ShieldCheck, Factory, Award, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | Ponnangai Enterprises</title>
        <meta name="description" content="Learn about Ponnangai Enterprises, a trusted manufacturer of high-performance housekeeping products and industrial hygiene solutions in Chennai." />
      </Helmet>

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="text-center"
          >
            <motion.span variants={fadeInUp} className="badge-orange mb-2">
              <Sparkles size={14} /> Our Heritage & Vision
            </motion.span>
            <motion.h1 variants={fadeInUp} className="section-title">
              Crafting Excellence in <span>Hygiene & Cleanliness</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="section-subtitle">
              Engineered with advanced formulations to provide households and commercial spaces with radiant shine, deep sanitation, and uplifting fragrances.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Grid */}
      <section className="about-story-section container">
        <div className="story-grid">
          <motion.div 
            className="story-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>Who We Are</motion.h2>
            <motion.p variants={fadeInUp}>
              Ponnangai Enterprises is a dedicated manufacturer of premium housekeeping products based in Chennai, Tamil Nadu. Founded on the promise of relentless quality, we develop industrial-strength cleaning liquids, fabric softeners, handwashes, and floor sanitizers.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Whether serving domestic homes, healthcare facilities, commercial office buildings, or hospitality chains, our products ensure 100% surface hygiene and zero residue.
            </motion.p>

            <motion.div variants={fadeInUp} className="story-features">
              <div className="story-feat-item">
                <CheckCircle className="story-feat-icon" size={20} />
                <span>Industrial Grade Raw Formulations</span>
              </div>
              <div className="story-feat-item">
                <CheckCircle className="story-feat-icon" size={20} />
                <span>Strict Batch Quality Inspection</span>
              </div>
              <div className="story-feat-item">
                <CheckCircle className="story-feat-icon" size={20} />
                <span>Direct Factory Bulk Ordering</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="story-image-card glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <img src="/assets/products/professional.png" alt="Ponnangai Cleaning Facility" />
            <div className="image-card-overlay">
              <Factory size={28} className="overlay-icon" />
              <div>
                <h4>State-of-the-Art Production</h4>
                <p>Manufacturing facility located in Aynavaram, Chennai</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Core Pillars
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Built on trust, innovation, and absolute commitment to clean living.
          </motion.p>

          <div className="grid grid-cols-3 values-grid">
            <motion.div 
              className="value-card glass-panel"
              whileHover={{ y: -8, boxShadow: "0 20px 40px var(--primary-orange-glow)" }}
            >
              <div className="value-icon icon-orange"><ShieldCheck size={32} /></div>
              <h3>Uncompromised Safety</h3>
              <p>Formulated without harmful toxins or abrasive acids. Safe for skin, fabrics, and diverse floor surfaces.</p>
            </motion.div>

            <motion.div 
              className="value-card glass-panel"
              whileHover={{ y: -8, boxShadow: "0 20px 40px var(--deep-blue-glow)" }}
            >
              <div className="value-icon icon-blue"><Award size={32} /></div>
              <h3>Guaranteed Efficacy</h3>
              <p>Every bottle undergoes strict quality control checks to deliver 10x stain removal and 99.9% germ eradication.</p>
            </motion.div>

            <motion.div 
              className="value-card glass-panel"
              whileHover={{ y: -8, boxShadow: "0 20px 40px var(--primary-orange-glow)" }}
            >
              <div className="value-icon icon-orange"><Sparkles size={32} /></div>
              <h3>Delightful Fragrances</h3>
              <p>Infused with fresh ocean, floral, and citrus scents that keep environments smelling fresh for hours.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
