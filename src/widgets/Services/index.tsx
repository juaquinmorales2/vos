import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';

import { CARDS } from '@/data/cards';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section className="relative bg-bg-1 to-75%">
      <SectionTitle title="УСЛУГИ." classes="text-right border-t border-gray-1 px-20 pt-10" />
      {CARDS.map(({ title, services, description, number, classes }, i) => (
        <div key={number} className="px-20 pb-32 last:pb-48">
          <h4 className="text-[3.7vw] font-light ">{title}</h4>
          <div className={`flex items-start  space-x-10 pt-9 first:border-none ${classes}`}>
            <div className="flex-1">
              <div className="flex flex-wrap space-y-6">
                {services.map((service, i) => {
                  return (
                    <ul key={i} className="flex items-center space-x-16 text-[1.7vw] font-semibold">
                      {service.map((s) => (
                        <li key={s} className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full bg-[#fff]/40"></div>
                          <p>{s}</p>
                        </li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </div>

            <div className="relative flex-1 text-[1.4]">
              <p className="relative z-[2000] line-clamp-4 text-[1.5vw] font-medium leading-[170%]">{description}</p>
              <div className="absolute right-20 top-6 z-[1] text-right text-[16vw] font-extrabold tracking-[5%] text-gray-1">
                {number}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Index;
