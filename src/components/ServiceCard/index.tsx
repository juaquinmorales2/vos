import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import PhraseAnimations from '@/components/ui/PhraseAnimations'

interface Props {
  card: any
};

const Index: FC<Props> = ({ card: { title, services, description, number, classes } }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <div ref={ref} key={number} className="px-20 pb-32 last:pb-48">
      <h4 className="text-[3.7vw] font-light ">{title}</h4>
      <div className={`flex items-start  space-x-10 pt-9 first:border-none ${classes}`}>
        <div className="flex-1">
          <div className="flex flex-wrap space-y-6">
            {services.map((service: string[], i: number) => {
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
          <PhraseAnimations phrases={description} inView={inView} classes='relative z-[2000] line-clamp-4 text-[1.5vw] font-medium leading-[170%]' />
          {/* <p className="relative z-[2000] line-clamp-4 text-[1.5vw] font-medium leading-[170%]">{description}</p> */}
          <div className="absolute right-20 top-6 z-[1] text-right text-[16vw] font-extrabold tracking-[5%] text-gray-1">
            {number}
          </div>
        </div>
      </div>
    </div>
  )
};
export default Index