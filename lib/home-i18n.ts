export type Lang = 'RU' | 'KZ' | 'EN';

export const homeText = {
  RU: {
    badge: 'Медсестра на дом в Алматы', h1: 'Медсестра на дом в Алматы', sub: 'Проверенные медсёстры, аккуратный визит, понятная запись',
    text: 'Medsestra.kz организует выезд медсестры на дом: уколы, капельницы по показаниям, перевязки, снятие швов, уход за родителями, корпоративный уход и wellness-направление.',
    wa: 'Записаться в WhatsApp', about: 'О Medsestra.kz', aboutH: 'Организованный сервис медсестёр, а не случайное объявление.',
    aboutT: 'Мы отбираем медсестёр, проверяем документы, опыт, аккуратность и качество общения. Пациент получает понятный контакт, подтверждённый визит и спокойное сопровождение.',
    services: 'Услуги', servicesH: 'Выберите нужный уход', all: 'Все услуги', how: 'Запись', howH: 'Как проходит визит',
    howT: 'Мы уточняем только необходимые данные: услуга, район, удобное время и контакт. После этого подтверждаем визит и подбираем медсестру.',
    popular: 'Популярные направления', popularH: 'Найдите услугу в своём районе', prices: 'Цены', pricesH: 'Стартовые тарифы', priceBtn: 'Открыть цены',
    zones: 'Алматы и область', zonesH: 'Город, районы и ближайшие зоны', faq: 'FAQ', faqH: 'Частые вопросы', contact: 'Контакты', contactH: 'Нужен визит медсестры?',
    contactT: 'Напишите в WhatsApp, позвоните или отправьте email. Один номер работает для обычного звонка и WhatsApp.'
  },
  KZ: {
    badge: 'Алматыда үйге медбике шақыру', h1: 'Алматыда үйге медбике шақыру', sub: 'Тексерілген медбикелер, мұқият визит, түсінікті жазылу',
    text: 'Medsestra.kz үйге медбике визитін ұйымдастырады: укол, көрсетілім бойынша тамшылату, таңу, тігіс алу, ата-анаға күтім, корпоративтік күтім және wellness қызметтері.',
    wa: 'WhatsApp арқылы жазылу', about: 'Medsestra.kz туралы', aboutH: 'Бұл кездейсоқ хабарландыру емес, ұйымдасқан медбикелер сервисі.',
    aboutT: 'Біз медбикелерді таңдаймыз, құжаттарын, тәжірибесін, ұқыптылығын және қарым-қатынас сапасын тексереміз. Пациентке түсінікті байланыс, расталған визит және қолдау беріледі.',
    services: 'Қызметтер', servicesH: 'Қажетті күтімді таңдаңыз', all: 'Барлық қызметтер', how: 'Жазылу', howH: 'Визит қалай өтеді',
    howT: 'Біз тек қажетті ақпаратты нақтылаймыз: қызмет, аудан, ыңғайлы уақыт және байланыс. Содан кейін визитті растап, медбикені таңдаймыз.',
    popular: 'Танымал бағыттар', popularH: 'Өз ауданыңыздағы қызметті табыңыз', prices: 'Бағалар', pricesH: 'Бастапқы тарифтер', priceBtn: 'Бағаларды көру',
    zones: 'Алматы және облыс', zonesH: 'Қала, аудандар және жақын аймақтар', faq: 'FAQ', faqH: 'Жиі қойылатын сұрақтар', contact: 'Байланыс', contactH: 'Медбике визиті керек пе?',
    contactT: 'WhatsApp арқылы жазыңыз, қоңырау шалыңыз немесе email жіберіңіз. Бір нөмір қоңырау және WhatsApp үшін жұмыс істейді.'
  },
  EN: {
    badge: 'Nurse at home in Almaty', h1: 'Nurse at home in Almaty', sub: 'Selected nurses, careful visits, simple booking',
    text: 'Medsestra.kz organizes nurse visits at home: injections, IV drips when appropriate, dressings, stitch removal, care for parents, corporate care and wellness services.',
    wa: 'Book on WhatsApp', about: 'About Medsestra.kz', aboutH: 'An organized nurse service, not a random listing.',
    aboutT: 'We select nurses, check documents, experience, accuracy and communication quality. The patient gets a clear contact, a confirmed visit and calm support.',
    services: 'Services', servicesH: 'Choose the care you need', all: 'All services', how: 'Booking', howH: 'How the visit works',
    howT: 'We confirm only what is needed: the service, district, preferred time and contact. Then we confirm the visit and assign a nurse.',
    popular: 'Popular services', popularH: 'Find a service in your area', prices: 'Prices', pricesH: 'Starting prices', priceBtn: 'View prices',
    zones: 'Almaty and region', zonesH: 'City, districts and nearby areas', faq: 'FAQ', faqH: 'Frequently asked questions', contact: 'Contact', contactH: 'Need a nurse visit?',
    contactT: 'Message us on WhatsApp, call or send an email. The same number works for calls and WhatsApp.'
  }
};

export const homeTrust = {
  RU: [['Проверенные медсёстры','Документы, опыт и качество общения проверяются до визита.'],['Чистый протокол','Стерильные материалы, спокойная подготовка и аккуратный процесс.'],['Один контакт','WhatsApp, телефон и email для записи и уточнений.'],['Дом, семья, офис','Разовые визиты, Family Care, корпоративные программы и wellness.']],
  KZ: [['Тексерілген медбикелер','Құжаттар, тәжірибе және қарым-қатынас сапасы алдын ала тексеріледі.'],['Таза протокол','Стерильді материалдар, тыныш дайындық және мұқият процесс.'],['Бір байланыс','Жазылу және нақтылау үшін WhatsApp, телефон және email.'],['Үй, отбасы, кеңсе','Бір реттік визиттер, Family Care, корпоративтік бағдарламалар және wellness.']],
  EN: [['Selected nurses','Documents, experience and communication quality are checked before the visit.'],['Clean protocol','Sterile materials, calm preparation and a careful process.'],['One contact','WhatsApp, phone and email for booking and questions.'],['Home, family, office','One-time visits, Family Care, corporate programs and wellness.']]
};

export const homeServices = {
  RU: [['Медсестра на дом','Уколы, перевязки, снятие швов, контроль состояния и регулярные визиты.'],['Забота о родителях','Регулярные визиты, базовый контроль и короткая обратная связь семье.'],['Медсестра в офис','Выезд медсестры, wellness-дни и поддержка сотрудников или руководителей.'],['Капельницы красоты','Beauty & Wellness IV, восстановление, энергия и hydration.']],
  KZ: [['Үйге медбике','Укол, таңу, тігіс алу, жағдайды бақылау және тұрақты визиттер.'],['Ата-анаға күтім','Тұрақты визиттер, негізгі бақылау және отбасыға қысқа кері байланыс.'],['Кеңсеге медбике','Кеңсеге медбике шығуы, wellness күндері және қызметкерлерге қолдау.'],['Сұлулық тамшылары','Beauty & Wellness IV, қалпына келу, энергия және hydration.']],
  EN: [['Nurse at home','Injections, dressings, stitch removal, condition checks and regular visits.'],['Family Care','Regular visits, basic monitoring and short feedback to the family.'],['Corporate Care','Office nurse visits, wellness days and support for teams or executives.'],['Beauty IV','Beauty & Wellness IV, recovery, energy and hydration.']]
};

export const homeSteps = { RU: [['01','Выберите услугу','Дом, семья, офис или wellness.'],['02','Напишите в WhatsApp','Укажите район, время, услугу и контакт.'],['03','Подтвердите визит','Мы назначаем медсестру и остаёмся на связи.']], KZ: [['01','Қызметті таңдаңыз','Үй, отбасы, кеңсе немесе wellness.'],['02','WhatsApp арқылы жазыңыз','Аудан, уақыт, қызмет және байланыс көрсетіңіз.'],['03','Визитті растаңыз','Біз медбикені тағайындап, байланыста боламыз.']], EN: [['01','Choose a service','Home, family, office or wellness.'],['02','Message on WhatsApp','Share district, time, service and contact.'],['03','Confirm the visit','We assign a nurse and stay in touch.']] };
export const homePrices = { RU: [['Уколы на дому','от 8 000 ₸','По назначению врача'],['Перевязка на дому','от 12 000 ₸','Стерильные материалы'],['Капельница на дому','от 18 000 ₸','При медицинских показаниях']], KZ: [['Үйде укол салу','8 000 ₸ бастап','Дәрігер тағайындауы бойынша'],['Үйде таңу жасау','12 000 ₸ бастап','Стерильді материалдар'],['Үйде тамшылату','18 000 ₸ бастап','Медициналық көрсетілім бойынша']], EN: [['Home injections','from 8,000 ₸','With medical prescription'],['Home dressing','from 12,000 ₸','Sterile materials'],['IV drip at home','from 18,000 ₸','When medically appropriate']] };
export const homeFaq = { RU: [['Как вызвать медсестру на дом?','Напишите в WhatsApp или позвоните. Укажите услугу, район, удобное время и имя для связи.'],['Кто приезжает к пациенту?','На визит приезжает выбранная медсестра. Мы проверяем документы, опыт и качество общения.']], KZ: [['Үйге медбике қалай шақырылады?','WhatsApp арқылы жазыңыз немесе қоңырау шалыңыз. Қызметті, ауданды және ыңғайлы уақытты көрсетіңіз.'],['Пациентке кім келеді?','Визитке таңдалған медбике келеді. Біз құжаттарын, тәжірибесін және қарым-қатынас сапасын тексереміз.']], EN: [['How do I call a nurse at home?','Message us on WhatsApp or call. Share the service, district and preferred time.'],['Who comes to the patient?','A selected nurse comes to the visit. We check documents, experience and communication quality.']] };
