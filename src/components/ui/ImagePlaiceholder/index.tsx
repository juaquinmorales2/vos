import { FC } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  inView: boolean
}
const Index: FC<Props> = ({ src, inView }) => {
  return (
    <Image
      src={src}
      fill={true}
      objectFit="cover"
      alt="image"
      className={`blur-sm transition delay-700 ${inView && 'blur-none'}`}
    />
  );
};
export default Index;
