import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard'

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {

  return (
    <section id="services" className="relative bg-bg-1 to-75% py-20 border-t border-gray-1">
      <SectionTitle title="УСЛУГИ." classes="text-right  px-20 pt-10" />
      {CARDS.map((card) => (
        <ServiceCard key={card.title} card={card} />
      ))}
    </section>
  );
};
export default Index;
