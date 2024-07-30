import { FC } from 'react';

interface Props {
  card: any;
}

const Index: FC<Props> = ({ card }) => {
  return (
    <div
      className={`m-[0.5vw] my-[0.4vw] min-w-[18vw] space-y-[1.2vw] rounded-2xl border-2 border-stroke px-[1.4vw] py-[1.6vw] transition hover:bg-stroke/10 ${card.classes}`}
    >
      <div className="flex items-center space-x-[0.6vw]">
        {<card.icon />}
        <h6 className="text-[1.6vw]">{card.title}</h6>
      </div>
      <p className="text-[1vw] font-light leading-[150%]">{card.description}</p>
    </div>
  );
};
export default Index;
