'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Works.module.scss';

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'Short description of the project.',
    img: '/images/viana.jpg',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'Short description of the project.',
    img: '/images/toto.png',
    link: 'https://example.com/project2',
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'Short description of the project.',
    img: '/images/flor.png',
    link: 'https://example.com/project3',
  },
  {
    id: 4,
    title: 'Project Title 4',
    description: 'Another description.',
    img: '/images/flor.png',
    link: 'https://example.com/project4',
  },
  {
    id: 5,
    title: 'Project Title 5',
    description: 'Another description.',
    img: '/images/flor.png',
    link: 'https://example.com/project5',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Works() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const container = scrollRef.current;
      const cardWidth = container.firstChild?.firstChild?.offsetWidth || 0;
      const gap = 12;
      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstChild?.firstChild?.offsetWidth || 0;
      const gap = 12;
      
      let targetIndex = index;
      if (index >= projects.length) targetIndex = 0;
      if (index < 0) targetIndex = projects.length - 1;
      
      container.scrollTo({
        left: targetIndex * (cardWidth + gap),
        behavior: 'smooth',
      });
      setCurrentIndex(targetIndex);
    }
  };

  const scroll = (direction) => {
    setAutoScrollEnabled(false);
    setTimeout(() => setAutoScrollEnabled(true), 5000);
    scrollToIndex(currentIndex + (direction === 'left' ? -1 : 1));
  };

  useEffect(() => {
    const container = scrollRef.current;
    
    const handleDragStart = () => {
      setIsDragging(true);
      setAutoScrollEnabled(false);
    };
    
    const handleDragEnd = () => {
      setIsDragging(false);
      setTimeout(() => setAutoScrollEnabled(true), 3000);
      handleScroll();
    };

    container?.addEventListener('scroll', handleScroll);
    container?.addEventListener('mousedown', handleDragStart);
    container?.addEventListener('mouseup', handleDragEnd);
    container?.addEventListener('touchstart', handleDragStart);
    container?.addEventListener('touchend', handleDragEnd);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      container?.removeEventListener('mousedown', handleDragStart);
      container?.removeEventListener('mouseup', handleDragEnd);
      container?.removeEventListener('touchstart', handleDragStart);
      container?.removeEventListener('touchend', handleDragEnd);
    };
  }, [currentIndex, isDragging]);

  useEffect(() => {
    const container = scrollRef.current;
    let autoScrollInterval;
    
    if (autoScrollEnabled && !isDragging) {
      autoScrollInterval = setInterval(() => {
        if (container) {
          const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 50;
          isAtEnd ? scrollToIndex(0) : scrollToIndex(currentIndex + 1);
        }
      }, 3000);
    }
    
    return () => clearInterval(autoScrollInterval);
  }, [autoScrollEnabled, currentIndex, isDragging]);

  return (
    <section id="works" className="relative border-t border-gray-100 bg-[#141218] py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 px-4 md:px-12 lg:px-24">
        <SectionTitle
          title="Nuestros Trabajos"
          classes="text-center mb-10 md:mb-12 mx-auto max-w-[90vw]"
        />

        {/* Mobile buttons */}
        <div className="flex justify-between items-center mb-4 md:hidden px-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
            disabled={currentIndex === 0 && !autoScrollEnabled}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
            disabled={currentIndex === projects.length - 1 && !autoScrollEnabled}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className={`${styles.carouselContainer} flex overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth`}
          >
            <div className="flex flex-nowrap gap-3 md:gap-4 pl-[calc(50%-38vw)] md:pl-[calc(50%-33vw)]">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`${styles.carouselItem} snap-start flex-shrink-0 relative bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden shadow-lg`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={300}
                      height={150}
                      className={styles.carouselImage}
                    />
                  </div>
                  <div className="p-3 md:p-4 flex flex-col items-center justify-center text-center h-[140px] md:h-[160px]">
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[90%]">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 line-clamp-2 px-1">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm px-3 py-1 rounded-full transition"
                    >
                      Visitar
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            <motion.button
              onClick={() => scroll('left')}
              className={`${styles.navButton} hidden md:flex left-2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              disabled={currentIndex === 0 && !autoScrollEnabled}
            >
              <ChevronLeft size={28} />
            </motion.button>
            
            <motion.button
              onClick={() => scroll('right')}
              className={`${styles.navButton} hidden md:flex right-2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              disabled={currentIndex === projects.length - 1 && !autoScrollEnabled}
            >
              <ChevronRight size={28} />
            </motion.button>
          </AnimatePresence>
        </div>

        {/* Mobile indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}