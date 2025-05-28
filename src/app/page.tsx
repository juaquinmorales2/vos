'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import Approach from '@/widgets/Approach';
import CallToAction from '@/widgets/CallToAction';
import ShadowCursor from '@/components/ui/ShadowCursor'
import Works from '@/widgets/Works'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Approach />
      <CallToAction />

      <ShadowCursor />
    </>
  );
}
