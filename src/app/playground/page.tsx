'use client'

import { FC, useEffect } from 'react';

import useShadowCursor from './useShadowCursor'

interface Props { }

const Index: FC<Props> = () => {

  useEffect(() => {
    useShadowCursor()
  }, [])
  return (
    <section className='flex h-screen flex-col justify-center items-center w-full h-full m-0 p-0'>
      <h1 className='absolute text-transparent bg-[conic-gradient(#ed0101,#3e2)] pointer-events-none mix-blend-difference bg-clip-text '>Move the mouse</h1>
      <h2 className='absolute pointer-events-none tracking-[1.125px] text-[-webkit-xxx-large] font-black mix-blend-color-dodge mt-[25vh]'>See the magic</h2>
      <canvas className='w-full h-full'></canvas>
    </section>
  );
};
export default Index;
