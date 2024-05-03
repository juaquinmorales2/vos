import { FC } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
}
const Index: FC<Props> = ({ src }) => {
  return <Image src={src} fill={true} objectFit="cover" alt="image" className="rounded-sm" />;
};
export default Index;
