import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '@/shared/utils/animations';

import { FC } from 'react';

interface Props {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
}

const Index: FC<Props> = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        className="absolute -left-4 inline-block h-2.5 w-2.5 space-y-3 rounded-full bg-white"
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>
      <Link className="text-[2.5vw] font-semibold transition hover:translate-x-[20px]" href={href}>
        {title}
      </Link>
    </motion.div>
  );
};
export default Index;
