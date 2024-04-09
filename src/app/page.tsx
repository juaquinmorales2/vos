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
          <About />

          <div className="relative bg-gradient-to-b from-bg-1 to-bg-2 to-75%">
            <h3 className="text-[7.5vw] font-extrabold text-right text-text-1 bg-bg-1 sticky top-0 px-20  border-b border-gray-1 z-50">УСЛУГИ.</h3>
            {CARDS.map(({ title, services, description, number, classes }, i) => (
              <div key={number} className={`flex space-x-10 items-center h-[400px] first:border-none px-20 ${classes}`}>
                <div className="flex-1">
                  <h4 className="text-[3vw] font-light mb-[36px]">{title}</h4>
                  <div className="flex flex-wrap space-y-6">
                    {services.map((service, i) => {
                      return (
                        <ul key={i} className="flex items-center text-[1.7vw] space-x-16 font-semibold">
                          {service.map(s => (
                            <li key={s} className="flex items-center space-x-2">
                              <div className="w-4 h-4 rounded-full bg-[#fff]/40"></div>
                              <p>{s}</p>
                            </li>
                          ))}
                        </ul>
                      )
                    })
                    }
                  </div>
                </div>
                <div className="flex-1 text-[1.4] relative">
                  <p className="leading-[170%]  font-medium">{description}</p>
                  <div className="absolute top-0 right-20 text-right text-[196px] text-[#fff]/5 font-extrabold tracking-[5%]">{number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[125vh] bg-[#2f2] w-full z-[9000]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, mollitia totam perferendis assumenda minus omnis suscipit repudiandae aliquam quidem asperiores.</div>
    </main>
  );
}
