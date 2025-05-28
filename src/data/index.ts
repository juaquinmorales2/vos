import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Inicio',
    href: 'main',
  },
  {
    title: 'Nosotros',
    href: 'about',
  },
  {
    title: 'Servicios',
    href: 'services',
  },
  {
    title: 'Enfoque',
    href: 'approach',
  },
  {
    title: 'Contactanos',
    href: 'contact',
  },
];
export const CARDS = [
  {
    title: 'Diseño',
    description:
      'Creamos soluciones visuales atractivas y funcionales que reflejan la identidad de tu marca, desde sitios web hasta logotipos y material gráfico.',
    services: [
      ['Páginas web', 'Branding'],
      ['Aplicaciones móviles', 'Logo'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Desarrollo Fullstack',
    description:
      'Desarrollamos plataformas completas, integrando frontend y backend para ofrecer soluciones eficientes, seguras y escalables a medida.',
    services: [
      ['Tienda en línea', 'Aplicaciones web'],
      ['CMS', 'Desarrollo de API'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Desarrollo móvil',
    description:
      'Construimos aplicaciones móviles nativas e híbridas optimizadas para Android y iOS, con enfoque en rendimiento, usabilidad y diseño intuitivo.',
    services: [['Android', 'IOS']],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Consulta',
    description:
      'Escuchamos cuidadosamente los deseos y conceptos del cliente sobre el proyecto. Luego compartimos nuestra visión y, con base en ese intercambio, llegamos a un acuerdo común.',
  },
  {
    icon: Second,
    title: 'Revisión conjunta',
    description:
      'Después comenzamos con el diseño. Una vez terminado, realizamos una revisión conjunta donde el cliente puede, si lo desea, hacer cambios.',
  },
  {
    icon: Third,
    title: 'Desarrollo',
    description: 'Después de aprobar el diseño, comenzamos directamente con el desarrollo del producto.',
  },
  {
    icon: Fourth,
    title: 'Pruebas',
    description:
      'Una vez finalizado el desarrollo, probamos cuidadosamente cada componente del producto. Luego invitamos al cliente a hacer pruebas de usuario.',
  },
  {
    icon: Fifth,
    title: 'Resultado final',
    description:
      'Entregamos la solución definitiva, completamente optimizada y documentada, lista para su implementación. Acompañamos al cliente con capacitación y soporte continuo, asegurando una transición fluida y el éxito sostenible del proyecto.',
  },
];


export const RADIO_FIELDS = [
  {
    title: '¿Qué tipo de servicios le interesan?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Diseño / Branding', value: 'design/branding' },
      { name: 'Desarrollo web', value: 'web-dev' },
      { name: 'Desarrollo móvil', value: 'mobile-dev' },
      { name: 'Todos los anteriores', value: 'all-types' },
      { name: 'Otro', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: '¿Cuál es su presupuesto? (USD)',
    classes: '',
    radioArray: [
      { name: '100 - 200', value: '8-15' },
      { name: '200 - 500', value: '15-25' },
      { name: '500 - 2000', value: '25-50' },
      { name: '2000+', value: '50+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Aproximadamente, ¿cuántas páginas tendrá su proyecto?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Menos de 5', value: '<5' },
      { name: '6-10', value: '6-10' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: '¿Qué tan pronto necesita el proyecto?',
    classes: '',
    radioArray: [
      { name: 'Lo más rápido posible', value: 'max-fast' },
      { name: 'Alta prioridad', value: 'high-prio ' },
      { name: 'Tiempo normal', value: 'regular' },
      { name: 'Sin apuros', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Su nombre', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Su número', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Nombre de la empresa', name: 'company', classes: '', required: true },
  { label: 'Enlace al sitio web', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};