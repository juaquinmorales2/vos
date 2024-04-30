import { FC } from 'react';

import BookForm from '@/widgets/BookForm'

interface Props { };

const Index: FC<Props> = () => {
  return (
    <section className='bg-bg-1 w-full py-10 min-h-screen opacity-100 z-[5000]'>
      <BookForm />
    </section>
  )
};
export default Index