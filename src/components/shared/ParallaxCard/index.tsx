"use client";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

const Index: FC<Props> = ({ className, children }) => {
  return (
    <div className={`sticky top-0 flex items-center justify-center ${className}`}>
      <div className="relative flex h-[screen] w-full origin-top flex-col">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export default Index;
