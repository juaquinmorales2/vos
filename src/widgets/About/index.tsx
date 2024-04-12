import { FC } from 'react';
import Image from 'next/image';

import SectionTitle from '@/components/ui/SectionTitle';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section className="bg-gradient-to-b from-bg-2 to-bg-1">
      <SectionTitle title="О НАС." classes="border-t border-gray-1 px-20 pt-10" />
      <div className="relative self-start px-20 pb-16 pt-10">
        <div className="flex space-x-16">
          <div className="relative h-[20vw] w-[30vw] grow-[3] basis-0">
            <Image src="/images/hands_img.jpg" fill={true} objectFit="cover" alt="images image" />
          </div>
          <p className="grow-[4] basis-0 text-[2.4vw] font-medium text-text-1">
            Мы молодая, сплоченная команда единомышленников, готовые помогать брендам из Туркменистана процветать в
            цифровом мире.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Index;
