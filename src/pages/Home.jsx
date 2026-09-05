import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ShieldCheck, Droplets, Zap, CheckCircle2, Factory } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { bottleProducts, otherProducts } from '../data/products';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>Ponnangai Enterprises | Premium Housekeeping & Cleaning Products</title>
        <meta name="description" content="Manufacturer of high-quality housekeeping products, industrial cleaning liquids, and bulk supplies in Chennai." />
      </Helmet>

      {/* Redesigned Hero Section */}
      <section className="hero-redesign-section">
        <div className="container">
          <motion.div 
            className="hero-redesign-row"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-text-block" variants={fadeInUp}>
              <span className="badge-blue mb-4"><Zap size={14} /> Industrial & Household Hygiene</span>
              <h1 className="hero-title">
                Engineered For <br /><span>Brilliant Cleanliness.</span>
              </h1>
              <p className="hero-description">
                High-performance cleaning solutions, fabric softeners, dishwash gels, and floor sanitizers manufactured for unmatched shine, germ protection, and long-lasting freshness.
              </p>
            </motion.div>
            
            <motion.div className="hero-actions-block" variants={fadeInUp}>
              <Link to="/products" className="btn btn-primary btn-large shine-sweep">
                Explore Full Catalog
              </Link>
              <Link to="/contact" className="btn btn-outline btn-large">
                Request Bulk Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apple-Style Bottles Lineup */}
      <section className="bottles-lineup-section">
        <div className="container">
          <motion.div 
            className="section-header-centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">The Premium <span>Lineup.</span></h2>
            <p className="section-subtitle">Click any product to experience its immersive 3D view.</p>
          </motion.div>

          <motion.div 
            className="bottles-grid-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {bottleProducts.map((product) => (
              <motion.div 
                key={product.id} 
                className="bottle-showcase-card"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleCardClick(product)}
              >
                <div className="bottle-showcase-bg" style={{ background: `radial-gradient(circle at center, ${product.theme.accent}20 0%, transparent 70%)` }}></div>
                <img src={product.image} alt={product.name} className="bottle-showcase-img" loading="lazy" />
                <div className="bottle-showcase-info">
                  <span className="bottle-category">{product.category}</span>
                  <h3 className="bottle-name">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="section features-section">
        <div className="container">
          <motion.div 
            className="grid grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="feature-card glass-panel" variants={fadeInUp}>
              <div className="feature-icon icon-orange"><Sparkles size={32} /></div>
              <h3>Unmatched Surface Shine</h3>
              <p>Specialized formulations cut through tough grease, grime, and hard water stains instantly leaving streak-free brightness.</p>
            </motion.div>
            <motion.div className="feature-card glass-panel" variants={fadeInUp}>
              <div className="feature-icon icon-blue"><ShieldCheck size={32} /></div>
              <h3>99.9% Germ Protection</h3>
              <p>Designed for commercial powerhouses and home hygiene. Eliminates harmful bacteria without harsh residual fumes.</p>
            </motion.div>
            <motion.div className="feature-card glass-panel" variants={fadeInUp}>
              <div className="feature-icon icon-orange"><Droplets size={32} /></div>
              <h3>Fresh Long-Lasting Scent</h3>
              <p>Infused with refreshing ocean, rose, apple, and citrus notes that transform any room into a delightfully clean sanctuary.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTINUOUS RUNNING ANIMATION SLIDES (Bulk & Accessories) */}
      <section className="section running-slides-section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div 
            className="running-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <span className="badge-orange mb-2"><Factory size={14} /> Commercial & Basics</span>
            <h2 className="section-title">Bulk & <span>Essentials</span></h2>
            <p className="section-subtitle">
              Browse our commercial 5L supply cans and essential everyday cleaning accessories.
            </p>
          </motion.div>
        </div>

        {/* Track 1: 5L Bulk Cans (Moving Left) */}
        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track-left">
              {[...bottleProducts, ...bottleProducts].filter(p => p.variants.length > 1).map((item, idx) => (
                <motion.div 
                  key={`track1-${idx}`}
                  className="running-slide-card bulk-card"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleCardClick(item)}
                >
                  <div className="running-slide-img-box">
                    <img src={item.variants[1]?.src || item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="running-slide-info">
                    <span className="slide-category badge-orange">5L Bulk</span>
                    <h4 className="slide-title">{item.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Track 2: Other Products (Moving Right) */}
        <div className="marquee-wrapper" style={{ marginTop: '2rem' }}>
          <div className="marquee-container">
            <div className="marquee-track-right" style={{ animationDuration: '60s' }}>
              {[...otherProducts, ...otherProducts].map((item, idx) => (
                <motion.div 
                  key={`track2-${idx}`}
                  className="running-slide-card accessories-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="running-slide-img-box">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="running-slide-info">
                    <span className="slide-category">{item.category}</span>
                    <h4 className="slide-title">{item.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <motion.div 
            className="trust-strip glass-pill"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="trust-pill-item">
              <span className="utility-label-orange">Experience</span>
              <span className="trust-pill-text font-mono">10+ Years in Hygiene</span>
            </div>
            <div className="trust-pill-divider" />
            <div className="trust-pill-item">
              <span className="utility-label">Catalog</span>
              <span className="trust-pill-text font-mono">13+ Formulations</span>
            </div>
            <div className="trust-pill-divider" />
            <div className="trust-pill-item">
              <span className="utility-label-orange">Supply</span>
              <span className="trust-pill-text font-mono">Direct Bulk Rates</span>
            </div>
            <div className="trust-pill-divider" />
            <div className="trust-pill-item">
              <span className="utility-label">Certified</span>
              <span className="trust-pill-text font-mono">ISO & FSSAI Standards</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
