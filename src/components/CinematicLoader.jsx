import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoader } from '../context/LoaderContext';
import './CinematicLoader.css';

const CinematicLoader = () => {
  const { showLoader, setShowLoader } = useLoader();

  useEffect(() => {
    if (!showLoader) return;
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500); // 2.5 seconds duration before cinematic exit
    return () => clearTimeout(timer);
  }, [showLoader, setShowLoader]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="cinematic-loader-screen"
          className="cinematic-loader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.15,
            filter: 'blur(20px)',
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Ambient Background Blobs matching Ponnangai Blue & Orange */}
          <div className="loader-ambient-blob loader-blob-1" />
          <div className="loader-ambient-blob loader-blob-2" />

          <div className="loader-content">
            <div className="loader-glass-stage">
              {/* Falling Droplet that lands in the center of the stage */}
              <div className="loader-droplet" />

              {/* Our Official P Logo revealed via clip-path circle expanding from landing point */}
              <div className="loader-logo-reveal">
                <img src="/assets/logo.png" alt="Ponnangai P Logo" className="loader-stage-logo" />
                <div className="loader-logo-shine" />
              </div>
            </div>

            <div className="loader-wordmark">
              <h1>PONNANGAI ENTERPRISES</h1>
              <p className="font-mono">Brilliant Cleanliness</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicLoader;
