import { FC } from 'react';

import { motion } from "framer-motion";

interface Props {
  phrases: string[]
  inView: boolean;
  classes?: string
};

const Index: FC<Props> = ({ phrases, inView, classes }) => {

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 1 * (i * 0.1) },
    }),
  };

  return (
    <div className={classes}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={'overflow-hidden'}>
            <motion.p
              className='m-0'
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export default Index