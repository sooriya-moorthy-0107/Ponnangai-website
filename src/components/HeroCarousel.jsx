import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Pause, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const carouselItems = [
  { id: 1, src: '/assets/products/S_Clothwash.png', title: 'Premium Clothwash', tag: 'High-Performance', desc: 'Tough on stains, ultra gentle on premium fabrics' },
  { id: 2, src: '/assets/products/S_Comfort_blue.png', title: 'Fabric Softener (Blue)', tag: 'Fresh Scent', desc: 'Long-lasting morning fragrance for soft garments' },
  { id: 3, src: '/assets/products/S_Comfort_pink.png', title: 'Fabric Softener (Pink)', tag: 'Floral Bloom', desc: 'Lush floral freshness engineered for all garments' },
  { id: 4, src: '/assets/products/S_Dishwash.png', title: 'Power Dishwash Gel', tag: 'Instant Grease-Cut', desc: 'Removes stubborn oil & residue in seconds' },
  { id: 5, src: '/assets/products/S_Floorwash_pink.png', title: 'Floral Floor Cleaner', tag: '99.9% Protection', desc: 'Germ-free cleanliness with a rich fragrance' },
  { id: 6, src: '/assets/products/S_Floorwash_yellow.png', title: 'Citrus Floor Cleaner', tag: 'Radiant Shine', desc: 'Refreshing zesty lemon aroma & streak-free shine' },
  { id: 7, src: '/assets/products/S_Toiletcleaner.png', title: 'Advanced Toilet Cleaner', tag: '10x Power', desc: 'Maximum stain removal with protective barrier' },
  { id: 8, src: '/assets/products/S_Handwash_green.png', title: 'Green Apple Handwash', tag: 'Skin Safe', desc: 'Anti-bacterial formula with moisturizing vitamins' },
  { id: 9, src: '/assets/products/S_Handwash_pink.png', title: 'Rose Velvet Handwash', tag: 'Soft Touch', desc: 'Delicate rose aroma with deep hydration' },
  { id: 10, src: '/assets/products/S_Handwash_yellow.png', title: 'Zesty Lemon Handwash', tag: 'Deep Clean', desc: 'Protects hands while washing away everyday bacteria' },
  { id: 11, src: '/assets/products/S_Glasscleaner.png', title: 'Crystal Glass Cleaner', tag: 'Streak-Free', desc: 'Mirror finish clarity for glass & windows' },
  { id: 12, src: '/assets/products/S_Tilescleaner.png', title: 'Heavy-Duty Tile Cleaner', tag: 'Deep Clean', desc: 'Restores tile grout & eliminates hard stains' },
  { id: 13, src: '/assets/products/S_Phenyol.png', title: 'Sanitizing Phenyol', tag: 'Industrial Grade', desc: 'Comprehensive floor disinfectant & deodorizer' }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800); 
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  const currentItem = carouselItems[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.82,
      rotateY: dir > 0 ? 20 : -20
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -140 : 140,
      opacity: 0,
      scale: 0.82,
      rotateY: dir > 0 ? -20 : 20,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <motion.div 
      className="hero-carousel-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-card glass-panel shine-sweep">
        {/* Glow ambient halo */}
        <div className="carousel-glow-bg" />

        {/* Top Bar */}
        <div className="carousel-top-bar">
          <span className="badge-orange font-mono">
            <Sparkles size={14} />
            {currentItem.tag}
          </span>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button 
              className="pause-toggle-btn"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>
        </div>

        {/* Floating Product Image with Drag & Auto-play */}
        <div className="carousel-stage">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="carousel-slide-item"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={handleDragEnd}
              whileGrab={{ cursor: 'grabbing', scale: 1.03 }}
            >
              {/* Continuous floating animation */}
              <motion.img 
                src={currentItem.src} 
                alt={currentItem.title}
                className="carousel-product-img"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                animate={{ 
                  y: [0, -16, 0],
                  rotate: [0, 1.5, -1.5, 0]
                }}
                transition={{ 
                  duration: 3.8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Info & Navigation Controls */}
        <div className="carousel-info">
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="carousel-product-title">{currentItem.title}</h3>
              <p className="carousel-product-desc">{currentItem.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-controls">
            <motion.button 
              className="carousel-arrow"
              onClick={handlePrev}
              whileHover={{ scale: 1.15, backgroundColor: "var(--primary-orange)", color: "#FFF" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous product"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="carousel-dots">
              {carouselItems.slice(0, 6).map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === (currentIndex % 6) ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(idx > (currentIndex % 6) ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button 
              className="carousel-arrow"
              onClick={handleNext}
              whileHover={{ scale: 1.15, backgroundColor: "var(--primary-orange)", color: "#FFF" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next product"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          <motion.button
            className="carousel-view-btn shine-sweep font-mono"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/products')}
          >
            <span>Explore Full Catalog</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCarousel;
