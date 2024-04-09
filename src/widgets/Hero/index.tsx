"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";

import Spotlight from "@/components/Spotlight";

import { main_1, main_2, main_3 } from "./images/index";

const Hero = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.1;
  const speed = 0.02;

  const manageMouseMove = (e: any) => {
    const { movementX, movementY } = e;
    xForce = movementX * speed;
    yForce = movementY * speed;

    console.log("manageMouseMove");

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  // make images auto movable "chat gpt?"
  const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.1}`,
      y: `+=${yForce * 0.1}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  const container = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const lg = useTransform(scrollYProgress, [0, 1], [0, -500])


  return (
    <main className="relative bg-gradient-to-b from-bg-1 to-bg-2">
      <div ref={container} onMouseMove={(e) => manageMouseMove(e)} className="relative left-0 top-0 h-screen w-full overflow-hidden">
        <h1 className="fixed left-[50%] top-[35%] z-20 w-full -translate-x-[50%] text-center text-[4.5vw] font-extrabold text-text-1">
          СОЗДАЕМ УНИКАЛЬНОСТЬ
        </h1>
        <h2 className="fixed left-[50%] top-[48%] z-20 -translate-x-[50%] text-[1.7vw] font-medium text-text-1/75">
          {/* Креативное агенство из Туркменистана */}
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.
        </h2>
        <div ref={plane1} className={`absolute left-0 top-0 z-10 h-full w-full`}>
          <Image src={main_1} fill={true} alt="" objectFit="cover" />
        </div>
        <Spotlight className="left-[35%] top-[0%]" fill="#CCC2DC" />

        <div ref={plane2} className={`absolute left-0 top-0 h-full w-full scale-[1.15]`}>
          <Image src={main_2} fill={true} alt="" objectFit="cover" />
        </div>

        <div ref={plane3} className={`absolute left-0 top-0 h-full w-full`}>
          <Image src={main_3} fill={true} alt="" objectFit="cover" />
        </div>
      </div>
    </main>
  );
};
export default Hero;
