import { FC } from 'react';

interface Props {
  card: any
};

const Index: FC<Props> = ({ card }) => {
  return (
    <div className={`px-5 py-6 space-y-6 border-2 border-stroke  mx-3 my-3 rounded-2xl min-w-[18vw] ${card.classes}`}>
      <div className='flex space-x-4 items-center'>
        {<card.icon />}
        <h6 className='text-[1.6vw]'>{card.title}</h6>
      </div>
      <p className='text-[1vw] font-light leading-[150%] '>
        {card.description}
      </p>
    </div>
  )
};
export default Index