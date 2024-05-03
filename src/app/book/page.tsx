import { FC } from 'react';

import BookForm from '@/widgets/BookForm';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section className="z-[5000] min-h-screen w-full bg-bg-1 py-10 opacity-100">
      <BookForm />
    </section>
  );
};
export default Index;
