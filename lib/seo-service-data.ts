import { imageFiles } from '@/lib/content';

export type SeoService = {
  slug: string;
  titleRu: string;
  translitRu: string;
  titleKz: string;
  translitKz: string;
  titleEn: string;
  shortRu: string;
  descriptionRu: string;
  descriptionKz: string;
  descriptionEn: string;
  image: { desktop: string; mobile: string };
  keywords: string[];
  bullets: string[];
};

export type SeoLocation = {
  slug: string;
  nameRu: string;
  translit?: string;
  nameKz?: string;
  translitKz?: string;
  type: 'city' | 'district' | 'region';
  parentSlug?: string;
  nearby: string[];
};

export const seoServices: SeoService[] = [
  {
    slug: 'medsestra-na-dom',
    titleRu: 'Медсестра на дом',
    translitRu: 'Medsestra na dom',
    titleKz: 'Үйге медбике шақыру',
    translitKz: 'Uyge medbike shaqyru',
    titleEn: 'Nurse at home',
    shortRu: 'Выезд медсестры на дом для спокойного и аккуратного ухода.',
    descriptionRu: 'Medsestra.kz организует выезд медсестры на дом для инъекций, перевязок, снятия швов, капельниц по показаниям, регулярного ухода и сопровождения семьи. Мы работаем как единая компания: отбираем специалистов, проверяем документы, контролируем качество визита и остаёмся на связи до завершения услуги.',
    descriptionKz: 'Medsestra.kz үй жағдайында медбике қызметін ұйымдастырады: инъекция, таңу, тігісті алу, көрсетілім бойынша тамшылату және тұрақты күтім. Мамандар алдын ала таңдалады, құжаттары тексеріледі және қызмет сапасы бақыланады.',
    descriptionEn: 'Medsestra.kz provides coordinated nurse-at-home care for injections, dressings, stitch removal, IV support when appropriate, regular family care and home visits. Nurses are selected, checked and supervised by the company.',
    image: imageFiles.atHome,
    keywords: ['медсестра на дом', 'вызвать медсестру на дом', 'домашняя медсестра', 'home nurse', 'үйге медбике'],
    bullets: ['Проверенные медсёстры', 'Согласование времени визита', 'Стерильный и аккуратный подход', 'Контроль качества после визита']
  },
  {
    slug: 'ukoly-na-dom',
    titleRu: 'Уколы на дому',
    translitRu: 'Ukoly na domu',
    titleKz: 'Үйде укол салу',
    translitKz: 'Uyde ukol salu',
    titleEn: 'Injections at home',
    shortRu: 'Инъекции на дому по назначению врача и понятной схеме.',
    descriptionRu: 'Уколы на дому помогают пациенту получить назначенную процедуру без лишней дороги и ожидания. Медсестра приезжает в согласованное время, уточняет назначение, подготавливает материалы и выполняет процедуру аккуратно. Услуга подходит взрослым, пожилым людям, занятым клиентам и пациентам после лечения.',
    descriptionKz: 'Үйде укол салу қызметі дәрігер тағайындаған емді үйден шықпай алуға көмектеседі. Медбике уақытын келісіп келеді, тағайындауды нақтылайды және процедураны мұқият орындайды.',
    descriptionEn: 'Home injections are provided according to a clear medical prescription. A selected nurse arrives at the agreed time, checks the instructions and performs the procedure carefully.',
    image: imageFiles.atHome,
    keywords: ['уколы на дому', 'сделать укол дома', 'инъекции на дому', 'үйде укол', 'home injections'],
    bullets: ['По назначению врача', 'Удобно для пожилых родителей', 'Без очередей и дороги', 'Спокойный домашний формат']
  },
  {
    slug: 'kapelnitsa-na-dom',
    titleRu: 'Капельница на дому',
    translitRu: 'Kapelnitsa na domu',
    titleKz: 'Үйде тамшылату',
    translitKz: 'Uyde tamshylatu',
    titleEn: 'IV drip at home',
    shortRu: 'Капельницы на дому при медицинских показаниях и после уточнения деталей.',
    descriptionRu: 'Капельница на дому организуется только после уточнения назначения, состояния пациента и условий проведения процедуры. Medsestra.kz делает акцент на безопасности, стерильности, контроле специалиста и понятной коммуникации с пациентом или семьёй.',
    descriptionKz: 'Үйде тамшылату қызметі пациенттің жағдайы, тағайындау және процедура шарттары нақтыланғаннан кейін ұйымдастырылады. Қауіпсіздік пен стерильдікке ерекше мән беріледі.',
    descriptionEn: 'Home IV drip visits are coordinated after checking the indication, patient situation and procedure conditions. Safety, sterility and clear communication are central.',
    image: imageFiles.atHome,
    keywords: ['капельница на дому', 'поставить капельницу дома', 'IV drip at home', 'үйде тамшылату'],
    bullets: ['После уточнения показаний', 'Стерильные материалы', 'Спокойный визит', 'Контроль самочувствия']
  },
  {
    slug: 'perevyazka-na-dom',
    titleRu: 'Перевязка на дому',
    translitRu: 'Perevyazka na domu',
    titleKz: 'Үйде таңу жасау',
    translitKz: 'Uyde tanu zhasau',
    titleEn: 'Wound dressing at home',
    shortRu: 'Аккуратные перевязки и уход за раной в домашнем формате.',
    descriptionRu: 'Перевязка на дому подходит пациентам после операций, травм, процедур и лечения ран. Медсестра приезжает с аккуратным подходом, соблюдает чистоту, использует стерильные материалы и помогает пациенту пройти процедуру спокойно.',
    descriptionKz: 'Үйде таңу жасау операциядан, жарақаттан немесе жара емінен кейін қажет болуы мүмкін. Медбике тазалық пен стерильдік талаптарын сақтап, процедураны сабырлы түрде орындайды.',
    descriptionEn: 'Home dressing visits support patients after surgery, procedures, injuries or wound care. The nurse follows a clean, careful and reassuring process.',
    image: imageFiles.atHome,
    keywords: ['перевязка на дому', 'уход за раной дома', 'wound dressing at home', 'үйде таңу'],
    bullets: ['После операций и процедур', 'Стерильный подход', 'Уход за раной', 'Бережная коммуникация']
  },
  {
    slug: 'snyatie-shvov-na-dom',
    titleRu: 'Снятие швов на дому',
    translitRu: 'Snyatie shvov na domu',
    titleKz: 'Үйде тігіс алу',
    translitKz: 'Uyde tigis alu',
    titleEn: 'Stitch removal at home',
    shortRu: 'Снятие швов на дому после операции или процедуры.',
    descriptionRu: 'Снятие швов на дому удобно, когда пациенту сложно ехать в клинику или хочется пройти процедуру спокойно. Перед визитом уточняются дата операции, рекомендации врача и состояние зоны швов. Медсестра работает аккуратно и объясняет каждый шаг.',
    descriptionKz: 'Үйде тігіс алу пациентке клиникаға бару қиын болғанда немесе процедураны тыныш жағдайда өткізгісі келгенде ыңғайлы. Медбике бәрін алдын ала нақтылап, мұқият орындайды.',
    descriptionEn: 'Home stitch removal is convenient after surgery or procedures when clinic travel is difficult. The nurse checks key details and performs the visit carefully.',
    image: imageFiles.atHome,
    keywords: ['снятие швов на дому', 'снять швы дома', 'stitch removal at home', 'үйде тігіс алу'],
    bullets: ['После операции', 'Уточнение рекомендаций', 'Аккуратное снятие', 'Домашний комфорт']
  },
  {
    slug: 'family-care',
    titleRu: 'Family Care',
    translitRu: 'Zabota o roditelyakh',
    titleKz: 'Ата-анаға күтім',
    translitKz: 'Ata-anaga kutim',
    titleEn: 'Family Care',
    shortRu: 'Регулярная забота о родителях и пожилых близких.',
    descriptionRu: 'Family Care — это регулярные визиты и сопровождение для родителей и пожилых близких. Семья получает спокойствие, понятный контакт и короткий отчёт после визита. Такой формат подходит, когда близкие живут отдельно, часто заняты или хотят организовать надёжный уход.',
    descriptionKz: 'Family Care — ата-анаға және жасы үлкен жақындарға тұрақты күтім ұйымдастыру. Отбасы визиттен кейін қысқа есеп алып, жақындарының жағдайын бақылауда ұстайды.',
    descriptionEn: 'Family Care provides regular visits and support for parents and elderly relatives. Families receive updates after visits and a reliable care structure.',
    image: imageFiles.family,
    keywords: ['уход за родителями', 'уход за пожилыми на дому', 'family care', 'elderly care Kazakhstan'],
    bullets: ['Регулярные визиты', 'Отчёт семье', 'Сопровождение', 'Приоритетная запись']
  },
  {
    slug: 'corporate-care',
    titleRu: 'Corporate Care',
    translitRu: 'Korporativnaya medsestra',
    titleKz: 'Кеңседегі медбике',
    translitKz: 'Kensedegi medbike',
    titleEn: 'Corporate Care',
    shortRu: 'Медсестра и wellness-сервис для компаний, офисов и руководителей.',
    descriptionRu: 'Corporate Care помогает компаниям организовать выезд медсестры в офис, wellness-дни, поддержку руководителей и сотрудников. Формат подходит для компаний, которые хотят заботиться о команде профессионально, спокойно и без хаоса.',
    descriptionKz: 'Corporate Care компанияларға кеңсеге медбике шақыру, wellness күндерін ұйымдастыру және қызметкерлерге қолдау көрсетуге көмектеседі.',
    descriptionEn: 'Corporate Care brings nurse and wellness support to offices, teams and executives. It is designed for companies that want organized, professional care.',
    image: imageFiles.corporate,
    keywords: ['медсестра в офис', 'корпоративная медсестра', 'corporate nurse', 'office wellness'],
    bullets: ['Выезд в офис', 'Wellness day', 'Для руководителей', 'Корпоративные пакеты']
  },
  {
    slug: 'beauty-wellness-iv',
    titleRu: 'Beauty & Wellness IV',
    translitRu: 'Kapelnitsy krasoty',
    titleKz: 'Сұлулық және wellness IV',
    translitKz: 'Sululyq zhane wellness IV',
    titleEn: 'Beauty & Wellness IV',
    shortRu: 'Премиальные wellness-процедуры с медицинской дисциплиной.',
    descriptionRu: 'Beauty & Wellness IV — направление для клиентов, которым важны энергия, восстановление, hydration, glow-эффект и комфортный сервис. Каждая процедура организуется аккуратно, с медицинской дисциплиной, понятной коммуникацией и контролем специалиста.',
    descriptionKz: 'Beauty & Wellness IV — энергия, қалпына келу, hydration және glow әсері маңызды клиенттерге арналған бағыт. Қызмет медициналық тәртіппен және мұқият ұйымдастырылады.',
    descriptionEn: 'Beauty & Wellness IV supports energy, hydration, glow and recovery in a premium, medically disciplined service format.',
    image: imageFiles.beauty,
    keywords: ['капельницы красоты', 'beauty IV', 'wellness IV', 'витаминные капельницы'],
    bullets: ['Vitamin IV', 'Hydration', 'Glow Beauty', 'Energy support']
  },
  {
    slug: 'recovery-iv',
    titleRu: 'Recovery IV',
    translitRu: 'Vosstanovlenie posle vecherinki',
    titleKz: 'Кештен кейін қалпына келу',
    translitKz: 'Keshten keyin qalpyna kelu',
    titleEn: 'Recovery IV',
    shortRu: 'Деликатное восстановление после вечеринки или интенсивного ритма.',
    descriptionRu: 'Recovery IV — деликатный wellness-формат для восстановления после вечеринки, перелёта, усталости или интенсивного графика. Мы говорим с пациентом спокойно, без осуждения, уточняем самочувствие и организуем визит в удобное время.',
    descriptionKz: 'Recovery IV — кештен, ұшудан, шаршаудан немесе қарқынды күн тәртібінен кейін қалпына келуге арналған деликатты wellness форматы.',
    descriptionEn: 'Recovery IV is a discreet wellness recovery format after a party, travel, fatigue or an intense schedule. The tone is calm, private and respectful.',
    image: imageFiles.beauty,
    keywords: ['капельница от похмелья', 'recovery IV', 'after party recovery', 'восстановление после вечеринки'],
    bullets: ['Деликатный сервис', 'Без осуждения', 'Удобное время', 'Wellness recovery']
  }
];

export const seoLocations: SeoLocation[] = [
  { slug: 'almaty', nameRu: 'Алматы', nameKz: 'Алматы', type: 'city', nearby: ['Медеуский район', 'Бостандыкский район', 'Алмалинский район', 'Ауэзовский район'] },
  { slug: 'medeuskiy', nameRu: 'Медеуский район', translit: 'Medeuskiy rayon', nameKz: 'Медеу ауданы', translitKz: 'Medeu audany', type: 'district', parentSlug: 'almaty', nearby: ['Самал', 'Достык', 'Горный Гигант', 'Кок-Тобе'] },
  { slug: 'bostandyk', nameRu: 'Бостандыкский район', translit: 'Bostandykskiy rayon', nameKz: 'Бостандық ауданы', translitKz: 'Bostandyq audany', type: 'district', parentSlug: 'almaty', nearby: ['Орбита', 'Атакент', 'КазГУ', 'Навои'] },
  { slug: 'almaly', nameRu: 'Алмалинский район', translit: 'Almalinskiy rayon', nameKz: 'Алмалы ауданы', translitKz: 'Almaly audany', type: 'district', parentSlug: 'almaty', nearby: ['центр Алматы', 'Абая', 'Толе би', 'Жибек Жолы'] },
  { slug: 'auezov', nameRu: 'Ауэзовский район', translit: 'Auezovskiy rayon', nameKz: 'Әуезов ауданы', translitKz: 'Auezov audany', type: 'district', parentSlug: 'almaty', nearby: ['Мамыр', 'Аксай', 'Сайран', 'Саина'] },
  { slug: 'nauryzbay', nameRu: 'Наурызбайский район', translit: 'Nauryzbayskiy rayon', nameKz: 'Наурызбай ауданы', translitKz: 'Nauryzbay audany', type: 'district', parentSlug: 'almaty', nearby: ['Калкаман', 'Шугыла', 'Акжар', 'Таусамалы'] },
  { slug: 'turksib', nameRu: 'Турксибский район', translit: 'Turksibskiy rayon', nameKz: 'Түрксіб ауданы', translitKz: 'Turksib audany', type: 'district', parentSlug: 'almaty', nearby: ['аэропорт', 'Жас Канат', 'Суюнбая', 'Сейфуллина'] },
  { slug: 'zhetysu', nameRu: 'Жетысуский район', translit: 'Zhetysuskiy rayon', nameKz: 'Жетісу ауданы', translitKz: 'Zhetisu audany', type: 'district', parentSlug: 'almaty', nearby: ['Рыскулова', 'Сейфуллина', 'Первомайка', 'Айнабулак'] },
  { slug: 'alatau', nameRu: 'Алатауский район', translit: 'Alatauskiy rayon', nameKz: 'Алатау ауданы', translitKz: 'Alatau audany', type: 'district', parentSlug: 'almaty', nearby: ['Нуркент', 'Алгабас', 'Саялы', 'Коккайнар'] },
  { slug: 'kaskelen', nameRu: 'Каскелен', nameKz: 'Қаскелең', translitKz: 'Qaskelen', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Карасайский район', 'Шамалган'] },
  { slug: 'konaev', nameRu: 'Конаев', nameKz: 'Қонаев', translitKz: 'Qonaev', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Капшагай', 'Илийский район'] },
  { slug: 'talgar', nameRu: 'Талгар', nameKz: 'Талғар', translitKz: 'Talgar', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Талгарский район', 'Бесагаш'] },
  { slug: 'esik', nameRu: 'Есик', nameKz: 'Есік', translitKz: 'Esik', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Енбекшиказахский район', 'Иссык'] },
  { slug: 'boralday', nameRu: 'Боралдай', nameKz: 'Боралдай', translitKz: 'Boralday', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Илийский район'] },
  { slug: 'otegen-batyr', nameRu: 'Отеген Батыр', nameKz: 'Өтеген батыр', translitKz: 'Otegen batyr', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Илийский район'] },
  { slug: 'shelek', nameRu: 'Шелек', nameKz: 'Шелек', translitKz: 'Shelek', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Енбекшиказахский район'] },
  { slug: 'uzynagash', nameRu: 'Узынагаш', nameKz: 'Ұзынағаш', translitKz: 'Uzynagash', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Жамбылский район'] },
  { slug: 'zhetygen', nameRu: 'Жетыген', nameKz: 'Жетіген', translitKz: 'Zhetigen', type: 'region', parentSlug: 'almaty', nearby: ['Алматинская область', 'Илийский район'] }
];

export function getSeoService(slug: string) {
  return seoServices.find((service) => service.slug === slug);
}

export function getSeoLocation(slug?: string) {
  if (!slug) return undefined;
  return seoLocations.find((location) => location.slug === slug);
}

export function locationLabel(location?: SeoLocation) {
  if (!location) return 'в Казахстане';
  if (location.type === 'city') return `в городе ${location.nameRu}`;
  if (location.type === 'district') return `в ${location.nameRu}, Алматы`;
  return `в ${location.nameRu}, Алматинская область`;
}
