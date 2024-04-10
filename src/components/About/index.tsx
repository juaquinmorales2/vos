import Image from "next/image";
import { FC } from "react";

interface Props {}

const Index: FC<Props> = () => {
  return (
    <div className="relative self-start bg-gradient-to-b from-bg-2 to-bg-1 px-20 py-16">
      <h3 className="mb-[2%] border-t border-gray-1 text-[7.5vw] font-extrabold leading-[100%]">О НАС.</h3>

      <div className="flex space-x-16">
        <div className="relative h-[20vw] w-[30vw] grow-[3] basis-0">
          <Image src="/images/hands_img.jpg" fill={true} objectFit="cover" alt="images image" />
        </div>
        <p className="grow-[4] basis-0 text-[2.4vw] font-medium text-text-1">
          Мы молодая, сплоченная команда единомышленников, готовые помогать брендам из Туркменистана процветать в
          цифровом мире.
        </p>
      </div>
    </div>
  );
};
export default Index;
