import { FC } from 'react';


import SectionTitle from '@/components/ui/SectionTitle';
import ApproachCard from '@/components/ApproachCard';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {

  return (
    <section className="bg-bg-1">
      <SectionTitle title="ПОДХОД." classes="border-t border-gray-1 px-20 pt-10 top-0 bg-bg-1 z-20" />
      <div className='px-20 pt-10'>
        <div className='grid grid-cols-3 mx-[-12px]'>
          {APPROACH_CARDS.map(card => (
            <ApproachCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Index;
