"use client";
import { useRef } from "react";

import Hero from "@/widgets/Hero";
import Navigation from "@/widgets/Navigation";
import About from "@/components/About";
import ParallaxCard from "@/components/shared/ParallaxCard";

export default function Home() {
  const container = useRef(null);

  return (
    <main>
      <Navigation />
      <div className="relative">
        <div ref={container} className="z bg-text-1">
          <ParallaxCard className="min-h-screen bg-gradient-to-b from-bg-1 to-bg-2">
            <Hero />
          </ParallaxCard>
          <ParallaxCard className="bg-gradient-to-b from-bg-2 to-bg-1 ">
            <About />
          </ParallaxCard>
        </div>
      </div>
    </main>
  );
}
