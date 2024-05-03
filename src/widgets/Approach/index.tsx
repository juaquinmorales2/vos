import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ApproachCard from '@/components/ApproachCard';
import SectionOpacity from '@/components/ui/SectionOpacity';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="approach" className="border-t border-gray-1 bg-bg-1 py-20 pb-40">
      <SectionOpacity>
        <SectionTitle title="ПОДХОД." classes="px-20 pt-10 top-0 bg-bg-1 z-20" />
        <div className="px-20 pt-10">
          <div className="mx-[-12px] grid grid-cols-3">
            {APPROACH_CARDS.map((card) => (
              <ApproachCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
