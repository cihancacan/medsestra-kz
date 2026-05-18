export const imageFiles = {
  home: { desktop: '/images/Home.jpg', mobile: '/images/home.mobile.jpg' },
  atHome: { desktop: '/images/athome.jpg', mobile: '/images/athome.mobile.jpg' },
  family: { desktop: '/images/family.jpg', mobile: '/images/family.mobile.jpg' },
  corporate: { desktop: '/images/Corporate.jpg', mobile: '/images/Corporate.mobile.jpg' },
  beauty: { desktop: '/images/Beauty.jpg', mobile: '/images/beauty.mobile.jpg' }
};

export const site = {
  name: 'Medsestra.kz',
  phone: '+7 700 000 00 00',
  whatsapp: '77000000000',
  city: 'Алматы',
  coordinates: { latitude: 43.238949, longitude: 76.889709 }
};

export const trustItems = [
  { title: 'Дипломированные специалисты', translit: 'Diplomirovannye spetsialisty', text: 'Проверяем документы, опыт и качество работы перед сотрудничеством.' },
  { title: 'Стерильные материалы', translit: 'Sterilnye materialy', text: 'Аккуратный подход, одноразовые расходники и понятные процедуры.' },
  { title: 'WhatsApp и Kaspi', translit: 'WhatsApp i Kaspi', text: 'Быстрая запись, подтверждение заявки и удобная оплата.' },
  { title: 'RU | KZ | EN', translit: 'Tri yazyka obsluzhivaniya', text: 'Русский по умолчанию, казахский для доверия, английский для expat и corporate.' }
];

export const pillars = [
  {
    key: 'at-home',
    title: 'Уход на дому',
    translit: 'Ukhod na domu',
    eyebrow: 'Медсестра на дом',
    headline: 'Инъекции, перевязки и базовые процедуры дома',
    text: 'Медсестра приезжает домой для простых медицинских процедур: уколы по назначению, перевязки, снятие швов, контроль состояния и регулярные визиты.',
    bullets: ['Уколы по назначению врача', 'Перевязки и уход за ранами', 'Снятие швов', 'Плановый визит медсестры'],
    image: imageFiles.atHome,
    href: '/services/#soins-domicile'
  },
  {
    key: 'family',
    title: 'Family Care',
    translit: 'Zabota o roditelyakh',
    eyebrow: 'Забота о родителях',
    headline: 'Регулярное сопровождение пожилых родителей',
    text: 'Абонементы для семей: визиты на дом, базовый контроль состояния, сопровождение в клинику или лабораторию и короткий отчёт семье после визита.',
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
    text: 'Выезд медсестры в офис, wellness-дни, поддержка руководителей, программы для сотрудников и корпоративные пакеты по расписанию.',
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
    text: 'Премиальные wellness-процедуры с медицинским подходом: витаминные капельницы, восстановление, energy, glow и after-party recovery после предварительной оценки.',
    bullets: ['Vitamin IV', 'Energy & Recovery', 'Glow Beauty', 'After-party recovery'],
    image: imageFiles.beauty,
    href: '/services/#beauty-wellness'
  }
];

export const prices = [
  { category: 'Уход на дому', service: 'Уколы на дому', translit: 'Ukoly na domu', price: 'от 8 000 ₸', note: 'По назначению врача' },
  { category: 'Уход на дому', service: 'Перевязка на дому', translit: 'Perevyazka na domu', price: 'от 12 000 ₸', note: 'Стерильные материалы' },
  { category: 'Уход на дому', service: 'Капельница на дому', translit: 'Kapelnitsa na domu', price: 'от 18 000 ₸', note: 'При медицинских показаниях' },
  { category: 'Beauty & Wellness IV', service: 'Капельницы красоты', translit: 'Kapelnitsy krasoty', price: 'от 30 000 ₸', note: 'После оценки специалиста' },
  { category: 'Family Care', service: 'Забота о родителях', translit: 'Zabota o roditelyakh', price: 'от 149 000 ₸ / месяц', note: 'Визиты и отчёт семье' },
  { category: 'Corporate Care', service: 'Корпоративная медсестра', translit: 'Korporativnaya medsestra', price: 'по запросу', note: 'Для офисов и руководителей' }
];

export const zones = [
  'Алматы', 'Алмалы', 'Медеу', 'Бостандык', 'Ауэзов', 'Турксиб', 'Жетысу', 'Алатау', 'Наурызбай',
  'Каскелен', 'Конаев', 'Талгар', 'Есик', 'Боралдай', 'Отеген Батыр', 'Шелек', 'Узынагаш', 'Жетыген'
];

export const steps = [
  { title: 'Выберите услугу', text: 'Укажите, что нужно: уход на дому, Family Care, Corporate Care или Beauty IV.' },
  { title: 'Подтвердите адрес', text: 'Мы уточняем район, время, контакт и формат визита.' },
  { title: 'Получите специалиста', text: 'Назначаем проверенного специалиста и подтверждаем заявку в WhatsApp.' }
];
