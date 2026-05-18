export const imageFiles = {
  home: { desktop: '/images/Home.jpg', mobile: '/images/home.mobile.jpg' },
  atHome: { desktop: '/images/athome.jpg', mobile: '/images/athome.mobile.jpg' },
  family: { desktop: '/images/family.jpg', mobile: '/images/family.mobile.jpg' },
  corporate: { desktop: '/images/Corporate.jpg', mobile: '/images/Corporate.mobile.jpg' },
  beauty: { desktop: '/images/Beauty.jpg', mobile: '/images/beauty.mobile.jpg' }
};

export const site = {
  name: 'Medsestra.kz',
  phone: '+7 (707) 487-30-28',
  phoneHref: 'tel:+77074873028',
  whatsapp: '77074873028',
  email: 'help@medsestra.kz',
  emailHref: 'mailto:help@medsestra.kz',
  city: 'Алматы',
  coordinates: { latitude: 43.238949, longitude: 76.889709 }
};

export const trustItems = [
  { title: 'Проверенные специалисты', translit: 'Proverennye spetsialisty', text: 'Отбираем медсестёр по документам, опыту, аккуратности и качеству общения.' },
  { title: 'Чистый протокол визита', translit: 'Chistyy protokol vizita', text: 'Стерильные материалы, понятная подготовка и спокойный сервис без хаоса.' },
  { title: 'Один контакт', translit: 'Odin kontakt', text: 'Телефон, WhatsApp и почта для записи, уточнений и сопровождения заявки.' },
  { title: 'Для дома и бизнеса', translit: 'Dlya doma i biznesa', text: 'Разовые визиты, Family Care, корпоративные программы и wellness-направление.' }
];

export const pillars = [
  {
    key: 'at-home',
    title: 'Home nursing',
    translit: 'Medsestra na dom',
    eyebrow: 'Медсестра на дом',
    headline: 'Инъекции, перевязки и базовые процедуры дома',
    text: 'Уколы по назначению, перевязки, снятие швов, контроль состояния и регулярные визиты медсестры на дом.',
    bullets: ['Уколы по назначению врача', 'Перевязки и уход за ранами', 'Снятие швов', 'Плановый визит'],
    image: imageFiles.atHome,
    href: '/services/#soins-domicile'
  },
  {
    key: 'family',
    title: 'Family Care',
    translit: 'Zabota o roditelyakh',
    eyebrow: 'Забота о родителях',
    headline: 'Регулярное сопровождение пожилых родителей',
    text: 'Абонементы для семей: визиты на дом, базовый контроль, сопровождение и короткий отчёт семье после визита.',
    bullets: ['2–12 визитов в месяц', 'Отчёт семье в WhatsApp', 'Сопровождение в клинику', 'Приоритетная запись'],
    image: imageFiles.family,
    href: '/services/#family-care'
  },
  {
    key: 'corporate',
    title: 'Corporate Care',
    translit: 'Korporativnaya medsestra',
    eyebrow: 'Медсестра в офис',
    headline: 'Медицинский и wellness-сервис для офисов',
    text: 'Выезд медсестры в офис, wellness-дни, поддержка руководителей и корпоративные пакеты по расписанию.',
    bullets: ['Выезд в офис', 'Wellness day', 'Сервис для руководителей', 'Корпоративные пакеты'],
    image: imageFiles.corporate,
    href: '/services/#corporate-care'
  },
  {
    key: 'beauty',
    title: 'Beauty & Wellness IV',
    translit: 'Kapelnitsy krasoty i wellness',
    eyebrow: 'Капельницы красоты',
    headline: 'Витамины, энергия, recovery и beauty IV',
    text: 'Премиальные wellness-процедуры с медицинским подходом: витаминные капельницы, восстановление и beauty IV.',
    bullets: ['Vitamin IV', 'Energy & Recovery', 'Glow Beauty', 'After-party recovery'],
    image: imageFiles.beauty,
    href: '/services/#beauty-wellness'
  }
];

export const prices = [
  { category: 'Home nursing', service: 'Уколы на дому', translit: 'Ukoly na domu', price: 'от 8 000 ₸', note: 'По назначению врача' },
  { category: 'Home nursing', service: 'Перевязка на дому', translit: 'Perevyazka na domu', price: 'от 12 000 ₸', note: 'Стерильные материалы' },
  { category: 'Home nursing', service: 'Капельница на дому', translit: 'Kapelnitsa na domu', price: 'от 18 000 ₸', note: 'При медицинских показаниях' },
  { category: 'Beauty & Wellness IV', service: 'Капельницы красоты', translit: 'Kapelnitsy krasoty', price: 'от 30 000 ₸', note: 'После оценки специалиста' },
  { category: 'Family Care', service: 'Забота о родителях', translit: 'Zabota o roditelyakh', price: 'от 149 000 ₸ / месяц', note: 'Визиты и отчёт семье' },
  { category: 'Corporate Care', service: 'Корпоративная медсестра', translit: 'Korporativnaya medsestra', price: 'по запросу', note: 'Для офисов и руководителей' }
];

export const zones = [
  'Алматы', 'Алмалы', 'Медеу', 'Бостандык', 'Ауэзов', 'Турксиб', 'Жетысу', 'Алатау', 'Наурызбай',
  'Каскелен', 'Конаев', 'Талгар', 'Есик', 'Боралдай', 'Отеген Батыр', 'Шелек', 'Узынагаш', 'Жетыген'
];

export const steps = [
  { title: 'Выберите формат', text: 'Дом, семья, офис или wellness IV. Кнопка сразу открывает WhatsApp с готовым запросом.' },
  { title: 'Мы уточняем детали', text: 'Район, время, услугу, контакт и формат визита — без сложных медицинских анкет.' },
  { title: 'Подтверждаем визит', text: 'Назначаем специалиста, подтверждаем заявку и остаёмся на связи до завершения визита.' }
];
