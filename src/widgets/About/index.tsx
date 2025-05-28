import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaEnvelope, FaWhatsapp, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const socialLinks = [
  { href: 'https://instagram.com/https://www.instagram.com/vos.marketing.agency/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=100092260833071', icon: <FaFacebookF />, label: 'Facebook' },
  { href: 'https://www.tiktok.com/@vos_agencia_marketing', icon: <FaTiktok />, label: 'TikTok' },
  { href: 'https://youtube.com/@vosagencia?si=FdPYLMGArzhFbn2y', icon: <FaYoutube />, label: 'YouTube' },
  { href: 'mailto:vos.sa.inbox@gmail.com', icon: <FaEnvelope />, label: 'Email' },
  { href: 'https://wa.me/+59895685830', icon: <FaWhatsapp />, label: 'WhatsApp' },
  { href: 'https://t.me/agencia_VOS', icon: <FaTelegramPlane />, label: 'Telegram' },
  { href: 'https://linkedin.com/in/vos-s-a-447820356', icon: <FaLinkedinIn />, label: 'LinkedIn' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b py-[6vw] md:py-[4vw] z-0">
      <SectionOpacity classes="z-2">
        <SectionTitle title="Quienes Somos?" classes="px-[6vw] md:px-[3vw] pt-[3vw] z-10" />

        <div className="relative self-start px-[6vw] md:px-[3vw] pb-[5vw] pt-[3vw]">
          <div className="flex space-x-[5vw] md:space-x-0 md:flex-col md:space-y-[3vw] md:items-center">
            <p className="flex grow-[4] basis-0 flex-wrap text-blue-400 text-[2.3vw] mt-10 md:mt-4 mb-6 md:text-[3.8vw] md:leading-[1.3] md:text-balance md:text-center">
              Somos la agencia dedicada a la creación de experiencias digitales únicas y memorables. Estamos comprometidos con la excelencia y la innovación en cada proyecto que emprendemos.
            </p>
            
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UssifiwOd7A?si=lszU8Z-q0tBq_som" className='mt-10 md:w-full' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
          </div>

          {/* Social Icons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="my-[4vw] flex flex-wrap justify-center gap-[3vw] md:gap-[2vw] mt-20"
          >
            {socialLinks.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={itemVariants}
                className="text-[2vw] md:text-[5vw] hover:scale-110 hover:text-blue-400 transition-transform "
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Index;
