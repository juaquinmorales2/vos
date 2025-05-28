import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <motion.section
      id="services"
      className="relative border-t border-gray-1 py-[6vw] md:py-[4vw]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Wrapper para prevenir overflow horizontal */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Nuestros Servicios"
            classes="text-right px-[6vw] md:px-[3vw] pt-[3vw]"
          />
        </motion.div>
      </div>

      {CARDS.map((card, index) => (
        <div key={card.title} className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard card={card} />
          </motion.div>
        </div>
      ))}
    </motion.section>
  );
};

export default Index;
