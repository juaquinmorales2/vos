"use client";
import { useRef } from "react";

import Hero from "@/widgets/Hero";
import Navigation from "@/widgets/Navigation";
import About from "@/components/About";
import ParallaxCard from "@/components/shared/ParallaxCard";
import { CARDS } from "@/data/cards";

export default function Home() {
  const container = useRef(null);

  return (
    <main>
      <Navigation />
      <div className="relative">
        <div ref={container} className=" bg-text-1">
          <ParallaxCard className="min-h-screen bg-gradient-to-b from-bg-1 to-bg-2">
            <Hero />
          </ParallaxCard>
          {/* <ParallaxCard className="bg-gradient-to-b from-bg-2 to-bg-1"> */}
            <About />
          {/* </ParallaxCard> */}

          <div className="relative">
            <h3 className=" text-[3vw] text-text-1 bg-bg-2 sticky top-0 z-[500]">УСЛУГИ.</h3>
            {CARDS.map(({ title, services, description, number, classes }, i) => (
              <ParallaxCard key={number} className={`h-[60vh] ${classes}`} i={i}>
                <div className="flex space-x-10 ">
                  <div >
                    <h4>{title}</h4>
                    <ul>
                      {services.map(service => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p>{description}</p>
                    <span>{number}</span>
                  </div>
                </div>
              </ParallaxCard>
            ))}
          </div>
        </div>
        <div className="h-[200vh] bg-bg-1 w-full z-[2000]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, mollitia totam perferendis assumenda minus omnis suscipit repudiandae aliquam quidem asperiores.</div>
      </div>
    </main>
  );
}
