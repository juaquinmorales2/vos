import { FC } from 'react';

import { useInView } from 'react-intersection-observer';

import SectionTitle from '@/components/ui/SectionTitle';
import PhraseAnimations from '@/components/ui/PhraseAnimations'
import ImagePlaiceholder from '@/components/ui/ImagePlaiceholder'

interface Props {}

const Index: FC<Props> = () => {
  const phrases = ['Мы молодая, сплоченная команда', 'единомышленников, готовые помогать', ' брендам из Туркменистана процветать', 'в цифровом мире.']

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section id="about" className="bg-gradient-to-b from-bg-2 to-bg-1 py-20 border-t border-gray-1">
      <SectionTitle title="О НАС." classes=" px-20 pt-10" />
      <div className="relative self-start px-20 pb-16 pt-10">
        <div ref={ref} className="flex space-x-16">

          <PhraseAnimations phrases={phrases} inView={inView} classes="grow-[4] basis-0 text-[2.3vw] font-medium text-text-1" />
          <div className="relative bg-bg-2 h-[20vw] w-[30vw] grow-[3] basis-0">
            <ImagePlaiceholder src="/images/hands_img.jpg" inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;
