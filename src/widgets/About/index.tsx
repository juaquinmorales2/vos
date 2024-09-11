import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b py-[6vw] md:py-[4vw] z-0">
      <SectionOpacity classes='z-2'>
        <SectionTitle title="О НАС." classes="px-[6vw] md:px-[3vw] pt-[3vw] z-10" />
        <div className="relative self-start px-[6vw] md:px-[3vw] pb-[5vw] pt-[3vw]">
          <div className="flex space-x-[5vw]">
            <p className="flex grow-[4] basis-0 flex-wrap text-[2.3vw]">
              Мы молодая, сплоченная команда, единомышленников, готовые помогать, брендам из Туркменистана процветать в
              цифровом мире.
            </p>

            <div className="relative h-[20vw] w-[30vw] grow-[3] basis-0 bg-bg-2">
              <img src="/images/hands_v2.jpg" alt="image" className="rounded-[0.125vw] hover:brightness-110 transition absolute inset-0 w-full h-full" />;
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
