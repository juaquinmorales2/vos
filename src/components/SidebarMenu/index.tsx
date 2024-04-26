import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import Link from './Link';

import { menuSlide } from '@/shared/utils/animations';

interface Props {
  close: () => void;
}

const navItems = [
  {
    title: 'Главная',
    href: '#main',
  },
  {
    title: 'О нас',
    href: '#about',
  },
  {
    title: 'Услуги',
    href: '#services',
  },
  {
    title: 'Подход',
    href: '#approach',
  },
  {
    title: 'Связаться',
    href: '#contact',
  },
];

const Index: FC<Props> = ({ close }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed left-0 top-0 z-[4000] h-screen w-[32vw] bg-gray-1 pt-[10vw] pr-[6vw] pb-[8vw] pl-[8vw] text-text-1"
      >
        <div className="flex flex-col justify-end space-y-2" onMouseLeave={() => setSelectedIndicator(null)}>
          {navItems.map((item, index) => (
            <Link
              key={item.title}
              data={{ ...item, index }}
              isActive={selectedIndicator === item.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
      </motion.div>
      <div aria-label="button" onClick={close} className="fixed bottom-0 left-0 right-0 top-0 z-[750] bg-bg-1/60 transition"></div>
    </>
  );
};
export default Index;
