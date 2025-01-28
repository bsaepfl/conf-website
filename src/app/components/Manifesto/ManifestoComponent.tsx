'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './ManifestoComponent.css';

const ManifestoComponent = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const containerRef = useRef(null);

  const texts = [
    "We believe in a future where blockchain technology serves as a cornerstone of innovation and progress.",
    "Our mission is to bridge the gap between academia and the blockchain industry, fostering collaboration and knowledge exchange.",
    "We are committed to nurturing the next generation of blockchain pioneers through education, mentorship, and hands-on experience.",
    "Together, we're building a community that drives meaningful advancement in blockchain technology and its applications."
  ];

  const [canScroll, setCanScroll] = useState(true);
const scrollAccumulator = useRef(0);
const SCROLL_THRESHOLD = 300; // Increase this value to require more scrolling

useEffect(() => {
  const handleWheel = (e) => {
    e.preventDefault();
    
    if (!canScroll) return;

    scrollAccumulator.current += Math.abs(e.deltaY);

    if (scrollAccumulator.current >= SCROLL_THRESHOLD) {
      setCanScroll(false);
      scrollAccumulator.current = 0;

      if (e.deltaY > 0) {
        // Scrolling down
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
      } else {
        // Scrolling up
        setCurrentTextIndex(prev => prev === 0 ? texts.length - 1 : prev - 1);
      }

      // Add a delay before allowing next scroll
      setTimeout(() => {
        setCanScroll(true);
      }, 1000); // 1 second delay between scrolls
    }
  };

  const container = containerRef.current;
  if (container) {
    container.addEventListener('wheel', handleWheel, { passive: false });
  }

  return () => {
    if (container) {
      container.removeEventListener('wheel', handleWheel);
    }
  };
}, [texts.length, canScroll]);


  const goToPrevious = () => {
    setCurrentTextIndex((prevIndex) => 
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentTextIndex((prevIndex) => 
      (prevIndex + 1) % texts.length
    );
  };

  return (
    <motion.div 
      ref={containerRef}
      className=" w-full flex items-center justify-center bg-transparent "
      style={{ zIndex: 50 }}
    >
      <div className="flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 vision-text text-glow"
        >
          Our Vision
        </motion.h2>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:scale-110 z-10"
            style={{ backdropFilter: 'blur(5px)' }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-slate-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          <TextSection key={currentTextIndex}>
            {texts[currentTextIndex]}
          </TextSection>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:scale-110 z-10"
            style={{ backdropFilter: 'blur(5px)' }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-slate-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>

        <div className="mt-8 text-slate-600 font-medium">
          {currentTextIndex + 1} / {texts.length}
        </div>
      </div>
    </motion.div>
  );
};

const TextSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-3xl mx-8"
    >
      <div className="gradient-border p-8 rounded-2xl bg-transparent ">
        <motion.p 
          className="text-xl md:text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800"
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            lineHeight: '1.8',
          }}
        >
          {children}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ManifestoComponent;
