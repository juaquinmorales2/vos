'use client';
import { useRef } from 'react';
import Image from 'next/image';

import useFloatingImages from '@/composables/useFloatingImages';

import { useScroll, useTransform, motion } from 'framer-motion';

import { main_1, main_2, main_3 } from './images/index';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3);

  const heading1 = useRef(null);
  const heading2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heading1,
    offset: ['start 0.35', 'end 0.1'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const title = 'Bienvenido a ';
  const subtitle = 'Agencia de desarrollo web y aplicaciones móviles';

  return (
    <section id="main" className="relative bg-gradient-to-b">
      <div
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative left-0 top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden  md:h-[100vh]"
      >
        <motion.h1
          ref={heading1}
          className="relative z-20 mt-[-5vw] w-full text-center text-[4.5vw] md:text-[8vw] md:leading-[1.2] font-extrabold text-text-1 max-w-[95%]"
          style={{ opacity }}
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {title.split('').map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <motion.span className="text-[#00cfff]" variants={letter}>
            V
          </motion.span>
          <motion.span className="text-[#00cfff]" variants={letter}>
            O
          </motion.span>
          <motion.span className="text-[#00cfff]" variants={letter}>
            S
          </motion.span>
        </motion.h1>

        <motion.h2
          ref={heading2}
          className="z-20 text-[1.7vw] md:text-[3vw] font-medium text-text-1/75"
          style={{ opacity }}
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {subtitle.split('').map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <div ref={ref2} className={`absolute left-0 top-0 h-full w-full md:h-[60%]`}>
          <Image src={main_2} fill={true} alt="" objectFit="cover" />
        </div>

        <div ref={ref3} className={`absolute left-0 top-0 h-full w-full md:h-[70%]`}>
          <Image src={main_3} fill={true} alt="" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
