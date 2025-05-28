'use client';
import { FC, useEffect, useState } from 'react';

import SidebarMenu from '@/components/SidebarMenu';
import { AnimatePresence } from 'framer-motion';

interface Props {}

const Index: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const closeSidebar = () => setIsActive(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsActive(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-[4001] flex items-center justify-between p-[2vw]">
      <>

        {/* Menu Toggle Button */}
        <div className="fixed right-0 z-[4001] p-[2vw]">
          <button
            type="button"
            onClick={() => setIsActive(!isActive)}
            className="flex h-[4.5vw] w-[4.5vw] md:leading-relaxed md:h-10 md:w-10 cursor-pointer bg-white items-center justify-center rounded-full md:mr-4 md:mt-4"
          >
            <div className={`burger ${isActive && 'burgerActive'}`}></div>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isActive && <SidebarMenu close={closeSidebar} />}
        </AnimatePresence>
      </>
    </nav>
  );
};

export default Index;
