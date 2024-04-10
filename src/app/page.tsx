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
          {/* <ParallaxCard className="min-h-screen bg-gradient-to-b from-bg-1 to-bg-2"> */}
          <Hero />
          {/* </ParallaxCard> */}
          <About />

          <div className="relative bg-bg-1 to-75%">
            <h3 className="sticky top-0 z-50 border-t border-gray-1 bg-bg-1 px-20 text-right  text-[7.5vw] font-extrabold text-text-1">
              УСЛУГИ.
            </h3>
            {CARDS.map(({ title, services, description, number, classes }, i) => (
              <div key={number} className={`flex h-[400px] items-center space-x-10 px-20 first:border-none ${classes}`}>
                <div className="flex-1">
                  <h4 className="mb-[36px] text-[3vw] font-light">{title}</h4>
                  <div className="flex flex-wrap space-y-6">
                    {services.map((service, i) => {
                      return (
                        <ul key={i} className="flex items-center space-x-16 text-[1.7vw] font-semibold">
                          {service.map((s) => (
                            <li key={s} className="flex items-center space-x-2">
                              <div className="h-4 w-4 rounded-full bg-[#fff]/40"></div>
                              <p>{s}</p>
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </div>
                </div>
                <div className="relative flex-1 text-[1.4]">
                  <p className="font-medium  leading-[170%]">{description}</p>
                  <div className="absolute right-20 top-0 text-right text-[196px] font-extrabold tracking-[5%] text-[#fff]/5">
                    {number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[125vh] w-full bg-[#f229]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, mollitia totam perferendis assumenda minus
        omnis suscipit repudiandae aliquam quidem asperiores.
      </div>
    </main>
  );
}
