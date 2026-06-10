import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Droplets } from 'lucide-react';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <motion.div 
            className="shape shape-1"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              y: [0, 30, 0],
              x: [0, -20, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container hero-content">
          <div className="hero-grid">
            <motion.div 
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp}>
                Bring <span>Brilliant Cleanliness</span> to Your Space
              </motion.h1>
              <motion.p variants={fadeInUp}>
                High-performance, industrial-grade cleaning solutions engineered for absolute hygiene and radiant results. Experience the loveable freshness.
              </motion.p>
              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn btn-primary">
                  Explore Our Range
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-carousel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'relative' }}>
                <motion.img 
                  src="/assets/products/S_Toiletcleaner.png" 
                  alt="Premium Toilet Cleaner"
                  style={{ height: '300px', objectFit: 'contain' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div style={{
                  position: 'absolute', bottom: '-20px', right: '-20px', 
                  background: 'var(--bg-white)', padding: '1rem', 
                  borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)'
                }}>
                  <div style={{ color: 'var(--primary-orange)', fontWeight: 'bold' }}>Top Seller</div>
                  <div style={{ color: 'var(--deep-blue)' }}>Premium Surface Cleaner</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Features */}
      <section className="section features-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            The Ponnangai Standard
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            We don't just manufacture cleaning liquids; we engineer solutions for absolute hygiene.
          </motion.p>

          <motion.div 
            className="grid grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon"><Sparkles size={32} /></div>
              <h3>Unmatched Shine</h3>
              <p>Formulated with high-grade ingredients to cut through grime efficiently, leaving nothing but a brilliant shine.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon" style={{color: 'var(--deep-blue)', background: 'rgba(10,25,47,0.1)'}}><ShieldCheck size={32} /></div>
              <h3>Quality Assured</h3>
              <p>Built for both domestic perfectionists and commercial powerhouses. No compromises. No residue.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon" style={{color: 'var(--accent-green)', background: 'rgba(46,125,50,0.1)'}}><Droplets size={32} /></div>
              <h3>Fresh Fragrance</h3>
              <p>Infused with loveable, trustworthy scents that transform your environment into a refreshing sanctuary.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
