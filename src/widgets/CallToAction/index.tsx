import { FC } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
} from 'react-icons/fa';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const socialLinks = [
  { href: 'https://www.instagram.com/vos.marketing.agency/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=100092260833071', icon: <FaFacebookF />, label: 'Facebook' },
  { href: 'https://www.tiktok.com/@vos_agencia_marketing', icon: <FaTiktok />, label: 'TikTok' },
  { href: 'https://youtube.com/@vosagencia?si=FdPYLMGArzhFbn2y', icon: <FaYoutube />, label: 'YouTube' },
  { href: 'mailto:vos.sa.inbox@gmail.com', icon: <FaEnvelope />, label: 'Email' },
  { href: 'https://wa.me/+59895685830', icon: <FaWhatsapp />, label: 'WhatsApp' },
  { href: 'https://t.me/agencia_VOS', icon: <FaTelegramPlane />, label: 'Telegram' },
  { href: 'https://linkedin.com/in/vos-s-a-447820356', icon: <FaLinkedinIn />, label: 'LinkedIn' },
];

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">
      <div id='contact' className="mx-auto flex w-full max-w-[60vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center mt-10 mb-20 pt-52 pb-52 md:pt-0 md:pb-0">
        <h3 className="text-[4vw] md:text-[8vw] font-medium mb-5 mt-52 md:mt-0 md:mb-0">Escríbenos</h3>
        <p className="mt-[0.6vw] text-[1.7vw] md:text-[3.2vw] font-normal md:leading-[1.3] text-blue-400 mb-5">
          Muestranos tu idea y nosotros la haremos realidad. No dudes en contactarnos para discutir tu proyecto. Tu éxito es nuestra prioridad, y estamos listos para acompañarte en cada paso del camino.
        </p>
        <Button
          onClick={handleFormToggle}
          title="INICIAR SOLICITUD"
          classes="px-[1.8vw] py-[vw] w-[35vw] md:w-[45vw] min-h-[6vw] md:min-h-[8vw] text-[1.25vw] md:text-[2.25vw] bg-bg-1 hover:bg-bg-1/80"
          btnClasses="mt-[1.2vw]"
        />
      </div>

      <footer className="w-full flex flex-col items-center border-t border-gray-800 px-6 py-6 md:py-8 text-center">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-5 mb-5">
          {socialLinks.map(({ href, icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-blue-400 text-[1vw] sm:text-[2.5vw] md:text-[4vw]"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-[2vw] sm:text-[3vw] md:text-[1.8vw] text-gray-300 md:mb-[-170px] md:bottom-1">
          <span className="text-blue-400 text-[2vh]">@2025. </span><span className='text-[2vh]'>Desarrollado por </span><span className="text-blue-400 text-[2vh]">Juaquin Morales.</span>
        </div>
      </footer>
    </SectionOpacity>
  );
};

export default Index;
