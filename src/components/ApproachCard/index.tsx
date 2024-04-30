import { FC } from 'react';

interface Props {
  card: any;
}

const Index: FC<Props> = ({ card }) => {
  return (
    <div className={`mx-3 my-3 min-w-[18vw] space-y-6 rounded-2xl  border-2 border-stroke hover:bg-stroke/10 last:hover:bg- transition px-5 py-6 ${card.classes}`}>
      <div className="flex items-center space-x-4">
        {<card.icon />}
        <h6 className="text-[1.6vw]">{card.title}</h6>
      </div>
      <p className="text-[1vw] font-light leading-[150%]">{card.description}</p>
    </div>
  );
};
export default Index;
