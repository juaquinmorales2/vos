'use client';

import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Navigation from '@/widgets/Navigation';
import Services from '@/widgets/Services';
import Approach from '@/widgets/Approach';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Approach />
    </main>
  );
}
