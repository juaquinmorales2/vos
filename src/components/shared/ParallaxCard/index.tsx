"use client";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  i?: number
  className?: string;
}

const Index: FC<Props> = ({ className, i, children }) => {
  return (
    <div className={`sticky top-0 flex items-center justify-center ${className}`} style={{ top: `calc(-5vh + ${(i || 0) * 110}px)`, }} >
      <div className="relative flex h-[screen] w-full origin-top flex-col">
        {children}
      </div>
    </div>
  );
};
export default Index;
