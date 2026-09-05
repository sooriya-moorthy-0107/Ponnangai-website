import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { bottleProducts } from '../data/products';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = bottleProducts.find(p => p.id === parseInt(id));
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for scroll animations
  const bottleScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1.2, 1.2, 0.8]);
  const bottleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['0vh', '15vh', '15vh', '-20vh']);
  const bottleOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  // Section 1: Hero Text Fades Out
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: Environment / Description Fades In
  const envOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.6, 0.75], [0, 1, 1, 0]);
  const envY = useTransform(scrollYProgress, [0.15, 0.3], [100, 0]);

  // Section 3: Variants / 5L Cans Fades In
  const variantsOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const variantsY = useTransform(scrollYProgress, [0.7, 0.85], [100, 0]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found.</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const addToCart = () => {
    toast.success(`${product.name} added to your inquiry list.`);
  };

  return (
    <div className="immersive-product-page" style={{ '--accent': product.theme.accent }}>
      <Helmet>
        <title>{product.name} | Ponnangai</title>
      </Helmet>

      {/* Floating Back Button */}
      <Link to="/products" className="back-btn-floating">
        <ArrowLeft size={24} />
      </Link>

      <div ref={containerRef} className="scroll-container">
        
        {/* Sticky Bottle Container */}
        <div className="sticky-bottle-container">
          <motion.div 
            className="bottle-wrapper"
            style={{ 
              scale: bottleScale, 
              y: bottleY,
              opacity: bottleOpacity,
            }}
          >
            {/* Environmental Effects (Bubbles/Glow) based on scroll */}
            <motion.div className="ambient-glow" style={{ opacity: envOpacity, background: `radial-gradient(circle, ${product.theme.accent}40 0%, transparent 70%)` }} />
            
            <img src={product.image} alt={product.name} className="hero-bottle-img" />
          </motion.div>
        </div>

        {/* Scroll Content Sections */}
        <div className="scroll-sections">
          
          {/* Section 1: Hero Intro */}
          <section className="scroll-section hero-intro">
            <motion.div 
              className="hero-text-content"
              style={{ opacity: heroTextOpacity, y: heroTextY }}
            >
              <span className="category-label">{product.category}</span>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-subtitle">Scroll to explore the power of cleanliness.</p>
            </motion.div>
          </section>

          {/* Section 2: Immersive Features & Environment */}
          <section className="scroll-section feature-environment">
            <motion.div 
              className="feature-content"
              style={{ opacity: envOpacity, y: envY }}
            >
              <div className="feature-text-block text-left">
                <h2>Advanced Formulation.</h2>
                <p>{product.description}</p>
              </div>
              
              {/* Decorative bubbles/elements representing the 'environment' */}
              <div className="environment-decorations">
                <div className="bubble b1"></div>
                <div className="bubble b2"></div>
                <div className="bubble b3"></div>
                <div className="sunshine-ray"></div>
              </div>
            </motion.div>
          </section>

          {/* Section 3: Bulk Variants & Action */}
          <section className="scroll-section variants-section">
            <motion.div 
              className="variants-content"
              style={{ opacity: variantsOpacity, y: variantsY }}
            >
              <h2>Available Pack Sizes.</h2>
              <p>From household retail to industrial 5L bulk cans.</p>
              
              <div className="variants-grid">
                {product.variants.map((v, i) => (
                  <div key={i} className="variant-item-card">
                    <img src={v.src} alt={v.label} />
                    <span>{v.label}</span>
                  </div>
                ))}
              </div>

              <div className="action-row">
                <button className="btn btn-primary btn-large" onClick={addToCart}>
                  <ShoppingCart size={20} /> Add to Inquiry
                </button>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
