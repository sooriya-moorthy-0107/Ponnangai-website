import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, Droplets, ArrowRight, Zap, 
  CheckCircle2, Factory, ExternalLink, X, MessageSquare 
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
                <span className="badge-orange hero-badge font-mono">
                  <Zap size={14} /> Industrial & Household Hygiene &middot; Chennai, India
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
                  <Link to="/products" className="btn btn-primary shine-sweep">
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

      {/* Trust Strip (§5 IA) */}
      <section className="trust-strip-section">
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
              <span className="trust-pill-text font-mono">13+ Specialized Formulations</span>
            </div>
            <div className="trust-pill-divider" />
            <div className="trust-pill-item">
              <span className="utility-label-orange">Supply Chain</span>
              <span className="trust-pill-text font-mono">Pan-India Direct Bulk Rates</span>
            </div>
            <div className="trust-pill-divider" />
            <div className="trust-pill-item">
              <span className="utility-label">Certifications</span>
              <span className="trust-pill-text font-mono">Verified ISO & FSSAI Standards</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Product Categories Grid (§5 IA: What We Make) */}
      <section className="section categories-section">
        <div className="watermark-p" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <span className="badge-blue mb-2"><Sparkles size={14} /> Comprehensive Catalog</span>
            <h2 className="section-title">What <span>We Make</span></h2>
            <p className="section-subtitle">
              Engineered across five core sanitation and sensory lines for domestic and commercial powerhouses.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 categories-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="category-card glass-panel shine-sweep">
              <div className="cat-icon-wrapper icon-orange"><Droplets size={28} /></div>
              <h3>Fabric Care</h3>
              <p>Tough stain removing clothwashes and lush floral & ocean morning fabric conditioners.</p>
              <Link to="/products" className="cat-link font-mono">View Range &rarr;</Link>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="category-card glass-panel shine-sweep">
              <div className="cat-icon-wrapper icon-blue"><Sparkles size={28} /></div>
              <h3>Kitchen Care</h3>
              <p>Concentrated lemon dishwash gels that cut stubborn grease instantly with zero residue.</p>
              <Link to="/products" className="cat-link font-mono">View Range &rarr;</Link>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="category-card glass-panel shine-sweep">
              <div className="cat-icon-wrapper icon-orange"><ShieldCheck size={28} /></div>
              <h3>Floor Care</h3>
              <p>Multi-surface floor disinfectant liquids and industrial sanitizing phenyol for 99.9% germ kill.</p>
              <Link to="/products" className="cat-link font-mono">View Range &rarr;</Link>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="category-card glass-panel shine-sweep">
              <div className="cat-icon-wrapper icon-blue"><CheckCircle2 size={28} /></div>
              <h3>Hygiene & Sanitation</h3>
              <p>Antibacterial moisturizing handwashes and 10x power thick gel toilet cleaners.</p>
              <Link to="/products" className="cat-link font-mono">View Range &rarr;</Link>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="category-card glass-panel shine-sweep">
              <div className="cat-icon-wrapper icon-orange"><Zap size={28} /></div>
              <h3>Surface Care</h3>
              <p>Crystal clear glass cleaners and heavy-duty tile grout restoration liquids.</p>
              <Link to="/products" className="cat-link font-mono">View Range &rarr;</Link>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="category-card glass-card-dark shine-sweep" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <span className="badge-orange mb-2 font-mono">Bulk Supply</span>
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>Need 5L Commercial Cans?</h3>
              <p style={{ color: '#CBD5E1', marginBottom: '16px' }}>Direct factory rates for hospitals, hotels, laundries, and institutions.</p>
              <Link to="/contact" className="btn btn-primary btn-sm shine-sweep w-full">Bulk Enquiry &rarr;</Link>
            </motion.div>
          </motion.div>
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
            <span className="badge-orange"><Sparkles size={14} /> Interactive Product Marquee</span>
            <h2 className="section-title">Explore Our <span>Running Product Slides</span></h2>
            <p className="section-subtitle">
              Hover over any slide to pause and inspect, or click any product card for instant details and bulk inquiry options.
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
              <div className="stat-number font-mono">13+</div>
              <div className="stat-label">Specialized Products</div>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-number font-mono">100%</div>
              <div className="stat-label">Quality Assured</div>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-number font-mono">5L / Retail</div>
              <div className="stat-label">Flexible Pack Sizes</div>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <div className="stat-number font-mono">Fast</div>
              <div className="stat-label">Bulk Order Delivery</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials & Certifications Strip (§5 IA) */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div 
            className="testimonial-card glass-panel--elevated text-center mx-auto"
            style={{ maxWidth: '820px', padding: '3.5rem 2.5rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="badge-orange mb-3 font-mono">Client Satisfaction & Trust</span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--deep-blue)', marginBottom: '1.25rem', lineHeight: 1.4 }}>
              &ldquo;Switching to Ponnangai's 5L bulk cans for our hospital facility reduced our housekeeping costs while noticeably improving surface shine and ambient freshness across all wards.&rdquo;
            </h3>
            <div className="testimonial-author">
              <h4 style={{ color: 'var(--orange-500)', margin: 0, fontWeight: 700 }}>Facility Operations Director</h4>
              <p className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Healthcare & Hospitality Partner, Chennai</p>
            </div>

            <div className="cert-strip-wrapper">
              <p className="utility-label mb-2" style={{ color: '#E2E8F0' }}>Verified Manufacturing Standards</p>
              <div className="cert-badges-row">
                <span className="glass-pill cert-pill font-mono"><ShieldCheck size={16} className="icon-orange" /> 100% Quality Formulated</span>
                <span className="glass-pill cert-pill font-mono"><Factory size={16} className="icon-blue" /> Direct Factory Batch Inspection</span>
                <span className="glass-pill cert-pill font-mono"><CheckCircle2 size={16} className="icon-orange" /> Eco-Conscious Non-Toxic Safety</span>
                <span className="glass-pill cert-pill font-mono"><Zap size={16} className="icon-blue" /> High-Grade Raw Materials</span>
              </div>
            </div>
          </motion.div>
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
