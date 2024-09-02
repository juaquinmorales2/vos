'use client'

import { FC, useEffect } from 'react';

import useShadowCursor from '@/shared/utils/useShadowCursor'

interface Props { }

const Index: FC<Props> = () => {

  useEffect(() => {
    useShadowCursor();

  }, [])
  return (
    <section className='flex flex-col justify-center items-center w-full h-full m-0 p-0'>

      <div className='h-screen w-full fixed top-0 left-0 z-40 '>
        <canvas id="fluid" className='w-full h-full' />
      </div>

      <div className='h-screen bg-slate-50 z-[100]'>123</div>
      <div className='h-screen'>123</div>

    </section>
  );
};
export default Index;
