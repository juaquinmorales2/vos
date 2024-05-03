import { FC, lazy } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <section className="relative h-screen  w-full border-t border-gray-1 bg-bg-1">
      <SectionOpacity classes="flex flex-col justify-center h-screen">
        <div className=" mx-auto flex w-full max-w-[60vw] flex-1 flex-col items-center justify-center text-center">
          <h3 className="text-[4vw] font-medium">НАПИШИТЕ НАМ</h3>
          <p className="mt-2.5 text-[1.7vw] font-normal text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur ullam veniam omnis dolores
            cum.
          </p>
          <Button
            onClick={handleFormToggle}
            title="ОСТАВИТЬ ЗАЯВКУ"
            classes="px-6 py-8 w-[30vw] min-h-[6vw] text-[1.25vw] bg-bg-1 hover:bg-bg-1/80"
            btnClasses="mt-4"
          />
        </div>

        <footer className="flex justify-between border-t border-t-gray-800 px-16 py-6">
          <div>© 2023. Все права защищены</div>
          <ul className="flex space-x-10 text-base">
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </footer>
      </SectionOpacity>
    </section>
  );
};
export default Index;
