'use client';
import { useRef } from 'react';
import Image from 'next/image';

import AuroraBg from '@/components/ui/AuroraBg';

import useFloatingImages from '@/composables/useFloatingImages';

import { useScroll, useTransform, motion } from 'framer-motion';

import { main_1, main_2, main_3 } from './images/index';

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

  return (
    <section id="main" className="relative bg-gradient-to-b from-bg-1 to-bg-2 ">
      <div
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative left-0 top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      >
        <motion.h1
          ref={heading1}
          className="relative z-20 mt-[-60px] w-full text-center text-[4.5vw] font-extrabold text-text-1"
          style={{ opacity }}
        >
          СОЗДАЕМ УНИКАЛЬНОСТЬ
        </motion.h1>
        <motion.h2 ref={heading2} className="z-20 text-[1.7vw] font-medium text-text-1/75" style={{ opacity }}>
          {/* Креативное агенство из Туркменистана */}
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </motion.h2>
        <div ref={ref1} className={`absolute left-0 top-0 z-10 h-full w-full`}>
          <Image src={main_1} fill={true} alt="" objectFit="cover" />
        </div>
        {/* <Spotlight className="left-[15%]" fill="#fff" /> */}

        <div ref={ref2} className={`absolute left-0 top-0 h-full w-full scale-[1.15]`}>
          <Image src={main_2} fill={true} alt="" objectFit="cover" />
        </div>

        <div ref={ref3} className={`absolute left-0 top-0 h-full w-full`}>
          <Image src={main_3} fill={true} alt="" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
