import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, Droplets, ArrowRight, Zap, 
  CheckCircle2, Factory, ExternalLink, X, MessageSquare, Move 
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import HeroCarousel from '../components/HeroCarousel';
import Modal from '../components/ui/Modal';
import './Home.css';

const allProducts = [
  { id: 1, name: 'Cloth Wash', img: '/assets/products/S_Clothwash.png', category: 'Fabric Care', desc: 'Tough stain remover & color protection' },
  { id: 2, name: 'Comfort Blue', img: '/assets/products/S_Comfort_blue.png', category: 'Fabric Softener', desc: 'Long-lasting morning ocean freshness' },
  { id: 3, name: 'Comfort Pink', img: '/assets/products/S_Comfort_pink.png', category: 'Fabric Softener', desc: 'Lush floral bloom fragrance' },
  { id: 4, name: 'Dishwash Gel', img: '/assets/products/S_Dishwash.png', category: 'Kitchen Care', desc: 'Instant grease removal & shine' },
  { id: 5, name: 'Floor Wash (Pink)', img: '/assets/products/S_Floorwash_pink.png', category: 'Floor Care', desc: 'Kills 99.9% germs with floral scent' },
  { id: 6, name: 'Floor Wash (Yellow)', img: '/assets/products/S_Floorwash_yellow.png', category: 'Floor Care', desc: 'Citrus lemon fresh shine' },
  { id: 7, name: 'Toilet Cleaner', img: '/assets/products/S_Toiletcleaner.png', category: 'Sanitation', desc: '10x heavy stain removal power' },
  { id: 8, name: 'Handwash (Green)', img: '/assets/products/S_Handwash_green.png', category: 'Personal Hygiene', desc: 'Green apple antibacterial moisture' },
  { id: 9, name: 'Handwash (Pink)', img: '/assets/products/S_Handwash_pink.png', category: 'Personal Hygiene', desc: 'Rose floral soft hand protection' },
  { id: 10, name: 'Handwash (Yellow)', img: '/assets/products/S_Handwash_yellow.png', category: 'Personal Hygiene', desc: 'Lemon zesty clean antibacterial' },
  { id: 11, name: 'Glass Cleaner', img: '/assets/products/S_Glasscleaner.png', category: 'Surface Care', desc: 'Streak-free crystal clear shine' },
  { id: 12, name: 'Tiles Cleaner', img: '/assets/products/S_Tilescleaner.png', category: 'Surface Care', desc: 'Deep stain tile & grout restorer' },
  { id: 13, name: 'Phenyol Cleaner', img: '/assets/products/S_Phenyol.png', category: 'Disinfectant', desc: 'Industrial floor sanitizer & freshener' }
];

const bulkItems = [
  { id: 101, name: '5L Clothwash Can', img: '/assets/products/5L_Clothwash.png', category: 'Bulk Can', desc: 'Industrial capacity for commercial laundries' },
  { id: 102, name: '5L Comfort Blue', img: '/assets/products/5L_Comfort_blue.png', category: 'Bulk Can', desc: '5 Litres long lasting fabric conditioner' },
  { id: 103, name: '5L Comfort Pink', img: '/assets/products/5L_Comfort_pink.png', category: 'Bulk Can', desc: '5 Litres floral fabric conditioner' },
  { id: 104, name: '5L Dishwash Can', img: '/assets/products/5L_Dishwash.png', category: 'Bulk Can', desc: 'Commercial restaurant grade dishwash gel' },
  { id: 105, name: '5L Floorwash (Pink)', img: '/assets/products/5L_Floowcelaner_pink.png', category: 'Bulk Can', desc: 'Heavy duty floor disinfectant liquid' },
  { id: 106, name: '5L Floorwash (Yellow)', img: '/assets/products/5L_Floorcleaner_yellow.png', category: 'Bulk Can', desc: 'Lemon fresh floor cleaning liquid 5L' },
  { id: 107, name: '5L Toilet Cleaner', img: '/assets/products/5L_Toiletcleaner.png', category: 'Bulk Can', desc: 'Bulk toilet sanitizer for institutions' }
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>Ponnangai Enterprises | Premium Housekeeping & Cleaning Products</title>
        <meta name="description" content="Manufacturer of high-quality housekeeping products, industrial cleaning liquids, and bulk supplies in Chennai." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-elements">
          <motion.div 
            className="hero-blob blob-orange"
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="hero-blob blob-blue"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.45, 0.25],
              y: [0, -40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              <motion.div variants={fadeInUp}>
                <span className="badge-orange hero-badge">
                  <Zap size={14} /> Industrial & Household Hygiene
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="hero-title">
                Engineered For <span>Brilliant Cleanliness</span> & Radiant Hygiene
              </motion.h1>

              <motion.p variants={fadeInUp} className="hero-description">
                High-performance cleaning solutions, fabric softeners, dishwash gels, and floor sanitizers manufactured for unmatched shine, germ protection, and long-lasting freshness.
              </motion.p>

              <motion.div variants={fadeInUp} className="hero-actions">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/products" className="btn btn-primary">
                    <span>Explore Products</span>
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn btn-outline">
                    <span>Bulk Enquiry</span>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="hero-trust-row">
                <div className="trust-item">
                  <CheckCircle2 size={18} className="trust-icon" />
                  <span>100% Quality Formulated</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={18} className="trust-icon" />
                  <span>Direct Factory Rates</span>
                </div>
              </motion.div>
            </motion.div>

            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* CONTINUOUS RUNNING ANIMATION SLIDES - DEEP SAPPHIRE & ORANGE GLOW STYLING */}
      <section className="section running-slides-section">
        <div className="running-ambient-spotlight-1" />
        <div className="running-ambient-spotlight-2" />

        <div className="container">
          <motion.div 
            className="running-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <span className="badge-orange"><Move size={14} /> Interactive Motion Marquee</span>
            <h2 className="section-title">Explore Our <span>Running Product Slides</span></h2>
            <p className="section-subtitle">
              Hover to pause auto-running slides, click any item for instant details, or touch & drag horizontally!
            </p>
          </motion.div>
        </div>

        {/* Track 1: Retail Products (Moving Left) */}
        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track-left">
              {[...allProducts, ...allProducts].map((item, idx) => (
                <motion.div 
                  key={`track1-${idx}`}
                  className="running-slide-card"
                  whileHover={{ scale: 1.08, y: -8, boxShadow: "0 20px 40px rgba(255, 109, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onClick={() => handleCardClick(item)}
                >
                  <div className="running-slide-img-box">
                    <motion.img 
                      src={item.img} 
                      alt={item.name} 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="running-slide-info">
                    <span className="slide-category">{item.category}</span>
                    <h4 className="slide-title">{item.name}</h4>
                    <span className="slide-click-hint">Click to inspect →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Track 2: Bulk 5L Cans (Moving Right) */}
        <div className="marquee-wrapper" style={{ marginTop: '1.75rem' }}>
          <div className="marquee-container">
            <div className="marquee-track-right">
              {[...bulkItems, ...bulkItems].map((item, idx) => (
                <motion.div 
                  key={`track2-${idx}`}
                  className="running-slide-card bulk-card"
                  whileHover={{ scale: 1.08, y: -8, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onClick={() => handleCardClick(item)}
                >
                  <div className="running-slide-img-box">
                    <motion.img 
                      src={item.img} 
                      alt={item.name} 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="running-slide-info">
                    <span className="slide-category badge-orange">{item.category}</span>
                    <h4 className="slide-title">{item.name}</h4>
                    <span className="slide-click-hint">Click for bulk details →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="section features-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            The Ponnangai Standard in <span>Hygiene Excellence</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Formulated using high-grade ingredients to deliver spotless results, pleasant aromas, and maximum safety for all surfaces.
          </motion.p>

          <motion.div 
            className="grid grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="feature-card glass-panel" 
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px var(--primary-orange-glow)" }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.1}
            >
              <div className="feature-icon icon-orange"><Sparkles size={32} /></div>
              <h3>Unmatched Surface Shine</h3>
              <p>Specialized formulations cut through tough grease, grime, and hard water stains instantly leaving streak-free brightness.</p>
            </motion.div>

            <motion.div 
              className="feature-card glass-panel" 
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px var(--deep-blue-glow)" }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.1}
            >
              <div className="feature-icon icon-blue"><ShieldCheck size={32} /></div>
              <h3>99.9% Germ Protection</h3>
              <p>Designed for commercial powerhouses and home hygiene. Eliminates harmful bacteria without harsh residual fumes.</p>
            </motion.div>

            <motion.div 
              className="feature-card glass-panel" 
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px var(--primary-orange-glow)" }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.1}
            >
              <div className="feature-icon icon-orange"><Droplets size={32} /></div>
              <h3>Fresh Long-Lasting Scent</h3>
              <p>Infused with refreshing ocean, rose, apple, and citrus notes that transform any room into a delightfully clean sanctuary.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Stats Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid grid-cols-4">
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-number">13+</div>
              <div className="stat-label">Specialized Products</div>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-number">100%</div>
              <div className="stat-label">Quality Assured</div>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-number">5L / Retail</div>
              <div className="stat-label">Flexible Pack Sizes</div>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-number">Fast</div>
              <div className="stat-label">Bulk Order Delivery</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Interactive Modal for Clicked Running Slide */}
      {selectedProduct && (
        <Modal 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
        >
          <div className="product-modal-content">
            <div className="modal-img-container">
              <motion.img 
                src={selectedProduct.img} 
                alt={selectedProduct.name} 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="modal-details">
              <span className="badge-orange">{selectedProduct.category}</span>
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.desc}</p>
              <div className="modal-actions">
                <a 
                  href={`https://wa.me/917092148969?text=Hi, I want to enquire about ${encodeURIComponent(selectedProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageSquare size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    setSelectedProduct(null);
                    navigate('/products');
                  }}
                >
                  <ExternalLink size={18} />
                  <span>View All Variants</span>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
