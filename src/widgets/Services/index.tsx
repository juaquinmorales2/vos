import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import SectionOpacity from '@/components/ui/SectionOpacity';

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="services" className="relative border-t border-gray-1 bg-bg-1 to-75% py-20">
      <SectionOpacity offset={['end 2', 'start 1']}>
        <SectionTitle title="УСЛУГИ." classes="text-right  px-20 pt-10" />
        {CARDS.map((card) => (
          <ServiceCard key={card.title} card={card} />
        ))}
      </SectionOpacity>
    </section>
  );
};
export default Index;
