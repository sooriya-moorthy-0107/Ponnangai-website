import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselItems = [
  { src: '/assets/products/S_Clothwash.png', title: 'Premium Clothwash', desc: 'Tough on stains, gentle on clothes' },
  { src: '/assets/products/S_Comfort_blue.png', title: 'Premium Fabric Conditioner (Blue)', desc: 'Long-lasting morning freshness' },
  { src: '/assets/products/S_Comfort_pink.png', title: 'Premium Fabric Conditioner (Pink)', desc: 'Floral freshness for all fabrics' },
  { src: '/assets/products/S_Dishwash.png', title: 'Power Dishwash Liquid', desc: 'Cuts through tough grease instantly' },
  { src: '/assets/products/S_Floorwash_pink.png', title: 'Floral Floor Wash', desc: 'Kills 99.9% germs with a floral scent' },
  { src: '/assets/products/S_Floorwash_yellow.png', title: 'Citrus Floor Wash', desc: 'Refreshing lemon fragrance & shine' },
  { src: '/assets/products/S_Toiletcleaner.png', title: 'Advanced Toilet Cleaner', desc: '10x stain removal power' },
  { src: '/assets/products/S_Handwash_green.png', title: 'Green Apple Handwash', desc: 'Natural protection for hands' },
  { src: '/assets/products/S_Handwash_pink.png', title: 'Rose Handwash', desc: 'Moisturizing with a rosy scent' },
  { src: '/assets/products/S_Handwash_yellow.png', title: 'Lemon Handwash', desc: 'Zesty lemon for complete hygiene' },
  { src: '/assets/products/S_Glasscleaner.png', title: 'Premium Glass cleaner', desc: 'Streak-free shine for all glass surfaces' },
  { src: '/assets/products/S_Tilescleaner.png', title: 'Premium Tiles cleaner', desc: 'Removes tough stains and grime from tiles' },
  { src: '/assets/products/S_Phenyol.png', title: 'Premium Phenyol', desc: 'Floor sanitizer' }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: { x: 150, opacity: 0, scale: 0.8, zIndex: 0 },
    center: { x: 0, opacity: 1, scale: 1, zIndex: 1 },
    exit: { x: -150, opacity: 0, scale: 0.8, zIndex: 0 }
  };

  return (
    <motion.div 
      className="hero-carousel"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'relative', minHeight: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <div style={{ position: 'relative', width: '100%', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ position: 'absolute', display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <motion.img 
                src={carouselItems[currentIndex].src} 
                alt={carouselItems[currentIndex].title}
                style={{ height: '300px', objectFit: 'contain' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{
              marginTop: '1.5rem',
              background: 'var(--bg-white)', padding: '1.25rem', 
              borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)',
              zIndex: 10, width: '90%', maxWidth: '320px', textAlign: 'center'
            }}
          >
            <div style={{ color: 'var(--primary-orange)', fontWeight: 'bold', marginBottom: '0.25rem', fontSize: '0.9rem' }}>TOP SELLER</div>
            <div style={{ color: 'var(--deep-blue)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{carouselItems[currentIndex].title}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>{carouselItems[currentIndex].desc}</div>
          </motion.div>
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default HeroCarousel;
