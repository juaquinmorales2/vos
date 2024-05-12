import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const CARDS = [
  {
    title: 'Дизайн',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [
      ['Веб страницы', 'Мобильные'],
      ['Мобильные приложения', 'Брендинг'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Веб разработка',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [
      ['Веб страницы', 'FullМобильные'],
      ['Веб приложений', 'Разработка API'],
    ],
    number: '02.',
    classes: ' border-t border-gray-1/50',
  },
  {
    title: 'Мобильная разработка',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [
      ['Мобильные приложения', '12312'],
      ['Веб приложен2ия', 'Бре2ндинг'],
    ],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Консультация',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Second,
    title: 'Совместный обзор',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Third,
    title: 'Разработка',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Fourth,
    title: 'Тестирование',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: '',
  },
  {
    icon: Fifth,
    title: 'Готовая работа (?)',
    description:
      'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for hamburger or logout.',
    classes: 'col-span-2 bg-[#fff]/5 hover:bg-[#fff]/5',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'Какой тип услуг вас интересует?',
    classes: 'mr-8',
    radioArray: [
      { name: 'Дизайн / Брендинг', value: 'design/branding' },
      { name: 'Веб разработка', value: 'web dev' },
      { name: 'Мобильная разработка', value: 'mobile dev' },
      { name: 'Все вышеперечисленные', value: 'design/branding/web/mobile' },
      { name: 'Другое', value: 'other service' },
    ],
    formKey: '_service',
  },
  {
    title: 'Каков ваш бюджет?',
    classes: '',
    radioArray: [
      { name: '10000TMT - 20000TMT', value: '10-20' },
      { name: '20000TMT - 30000TMT', value: '20-30' },
      { name: '30000TMT - 50000TMT', value: '30-50' },
      { name: '50000TMT+', value: '50+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Примерно, сколько страниц будет иметь ваш проект?',
    classes: 'mr-8',
    radioArray: [
      { name: 'Меньше 5-ти', value: 'less than 5 page' },
      { name: '6-10', value: '6-10 pages' },
      { name: '11-20', value: '11-20 pages ' },
      { name: '20+', value: '20+ pages' },
    ],
    formKey: '_pages',
  },
  {
    title: 'Насколько быстро вам нужен проект?',
    classes: '',
    radioArray: [
      { name: 'Максимально быстро', value: 'maximum fast' },
      { name: 'Высокая приоритетность ', value: 'high prio ' },
      { name: 'Обычное время', value: 'regular' },
      { name: 'Не торопитесь ', value: 'take your time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Выше имя', name: 'first', classes: 'inline-block !w-[calc(50%-16px)] mr-8', required: true },
  { label: 'Ваш номер', name: 'phone', classes: 'inline-block !w-[calc(50%-16px)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Название компании', name: 'company', classes: '', required: true },
  { label: 'Ссылка на сайт', name: 'websiteUrl', classes: '' },
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