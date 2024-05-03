import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ImagePlaiceholder from '@/components/ui/ImagePlaiceholder';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b from-bg-2 to-bg-1 py-20">
      <SectionOpacity>
        <SectionTitle title="О НАС." classes=" px-20 pt-10" />
        <div className="relative self-start px-20 pb-16 pt-10">
          <div className="flex space-x-16">
            <p className="flex grow-[4] basis-0 flex-wrap text-[2.3vw]">
              Мы молодая, сплоченная команда, единомышленников, готовые помогать, брендам из Туркменистана процветать, в
              цифровом мире.
            </p>

            <div className="relative h-[20vw] w-[30vw] grow-[3] basis-0 bg-bg-2">
              <ImagePlaiceholder src="/images/hands_img.jpg" />
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
