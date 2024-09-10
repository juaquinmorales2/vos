import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="services" className="relative border-t border-gray-1 py-[6vw]">
        <SectionTitle title="УСЛУГИ." classes="text-right px-[6vw] pt-[3vw]" />
        {CARDS.map((card) => (
          <ServiceCard key={card.title} card={card} />
        ))}
    </section>
  );
};
export default Index;
