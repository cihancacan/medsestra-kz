import { ambulanceLocations as officialLocations } from '@/lib/ambulance-locations.generated';

export type AmbulanceLang = 'ru' | 'kk' | 'en';
export type Localized<T> = Record<AmbulanceLang, T>;

export type AmbulanceLocation = {
  id: string;
  type: 'city' | 'district' | 'neighborhood';
  parentId?: string;
  names: Localized<string>;
  slugs: Localized<string>;
  region: Localized<string>;
};

export type AmbulanceService = {
  id: string;
  icon: string;
  slugs: Localized<string>;
  titles: Localized<string>;
  descriptions: Localized<string>;
  keywords: Localized<string[]>;
  bullets: Localized<string[]>;
};

export const ambulanceLanguages: AmbulanceLang[] = ['ru', 'kk', 'en'];

export const ambulanceRouteSegments = {
  ru: { root: 'skoraya-pomoshch', services: 'uslugi' },
  kk: { root: 'zhedel-zhardem', services: 'qyzmetter' },
  en: { root: 'ambulance', services: 'services' }
} satisfies Record<AmbulanceLang, { root: string; services: string }>;

export const ambulanceLocale = {
  ru: 'ru_KZ',
  kk: 'kk_KZ',
  en: 'en_KZ'
} satisfies Localized<string>;

export const ambulanceHreflang = {
  ru: 'ru-KZ',
  kk: 'kk-KZ',
  en: 'en-KZ'
} satisfies Localized<string>;

export const ambulanceServices: AmbulanceService[] = [
  {
    id: 'private-ambulance',
    icon: '✚',
    slugs: {
      ru: 'chastnaya-skoraya-pomoshch',
      kk: 'zheke-zhedel-zhardem',
      en: 'private-ambulance'
    },
    titles: {
      ru: 'Частная и платная скорая помощь',
      kk: 'Жеке және ақылы жедел жәрдем',
      en: 'Private ambulance service'
    },
    descriptions: {
      ru: 'Заказ частной выездной бригады и платной скорой помощи. Диспетчер уточняет состояние пациента, адрес и необходимый состав бригады до подтверждения выезда.',
      kk: 'Жеке көшпелі бригаданы және ақылы жедел жәрдемді шақыру. Диспетчер шығуды растауға дейін пациенттің жағдайын, мекенжайын және қажетті бригада құрамын нақтылайды.',
      en: 'Request a private ambulance team for a medically assessed call-out. Dispatch confirms the patient condition, address, vehicle and crew before departure.'
    },
    keywords: {
      ru: [
        'частная скорая помощь', 'платная скорая помощь', 'вызвать частную скорую помощь',
        'вызов платной скорой помощи', 'скорая медицинская помощь круглосуточно',
        'выездная скорая помощь', 'бригада скорой помощи', 'частная скорая помощь цена',
        'номер частной скорой помощи', 'ближайшая частная скорая помощь'
      ],
      kk: [
        'жеке жедел жәрдем', 'ақылы жедел жәрдем', 'жедел жәрдем шақыру',
        'жеке жедел жәрдем шақыру', 'тәулік бойы жедел жәрдем',
        'көшпелі жедел жәрдем бригадасы', 'жедел жәрдем бағасы', 'жедел жәрдем телефоны'
      ],
      en: [
        'private ambulance', 'paid ambulance service', 'call a private ambulance',
        '24/7 private ambulance', 'private emergency ambulance', 'ambulance service near me',
        'private ambulance cost', 'private ambulance phone number'
      ]
    },
    bullets: {
      ru: ['Оценка заявки диспетчером', 'Подбор типа бригады', 'Согласование стоимости', 'Подтверждение доступности'],
      kk: ['Өтінімді диспетчер бағалайды', 'Бригада түрін таңдау', 'Бағаны келісу', 'Қолжетімділікті растау'],
      en: ['Dispatcher assessment', 'Suitable crew selection', 'Price confirmation', 'Availability confirmation']
    }
  },
  {
    id: 'urgent-medical-help',
    icon: '⚕',
    slugs: {
      ru: 'chastnaya-neotlozhnaya-pomoshch',
      kk: 'shugyl-meditsinalyq-komek',
      en: 'urgent-medical-help'
    },
    titles: {
      ru: 'Частная неотложная медицинская помощь',
      kk: 'Жеке шұғыл медициналық көмек',
      en: 'Private urgent medical help'
    },
    descriptions: {
      ru: 'Организация выезда медицинской бригады при состоянии, которое требует срочной оценки, но формат выезда и приоритет всегда определяет медицинский диспетчер.',
      kk: 'Шұғыл бағалауды қажет ететін жағдайда медициналық бригаданың шығуын ұйымдастыру. Шығу форматы мен басымдығын медициналық диспетчер анықтайды.',
      en: 'Urgent medical team coordination for conditions requiring prompt assessment. A medical dispatcher determines priority and the appropriate response.'
    },
    keywords: {
      ru: ['частная неотложная помощь', 'срочная медицинская помощь', 'неотложная помощь на дому', 'врач скорой помощи на дом', 'срочный выезд медицинской бригады'],
      kk: ['шұғыл медициналық көмек', 'үйдегі шұғыл көмек', 'үйге жедел дәрігер шақыру', 'медициналық бригаданың шұғыл шығуы'],
      en: ['private urgent medical help', 'urgent medical team at home', 'urgent doctor home visit', 'rapid medical response']
    },
    bullets: {
      ru: ['Медицинская сортировка', 'Связь с диспетчером', 'Подходящая бригада', 'Маршрут по показаниям'],
      kk: ['Медициналық сұрыптау', 'Диспетчермен байланыс', 'Тиісті бригада', 'Көрсетілім бойынша бағыт'],
      en: ['Medical triage', 'Dispatcher contact', 'Appropriate response team', 'Clinically appropriate destination']
    }
  },
  {
    id: 'medical-transport',
    icon: '↔',
    slugs: {
      ru: 'meditsinskaya-transportirovka',
      kk: 'meditsinalyq-tasymaldau',
      en: 'medical-transportation'
    },
    titles: {
      ru: 'Медицинская транспортировка пациентов',
      kk: 'Пациенттерді медициналық тасымалдау',
      en: 'Medical patient transportation'
    },
    descriptions: {
      ru: 'Плановая перевозка пациента на специализированном медицинском транспорте с необходимым способом размещения и сопровождением.',
      kk: 'Пациентті қажетті орналастыру тәсілімен және сүйемелдеумен мамандандырылған медициналық көлікте жоспарлы тасымалдау.',
      en: 'Scheduled patient transport in an appropriate medical vehicle with the required positioning and level of escort.'
    },
    keywords: {
      ru: ['медицинская транспортировка', 'перевозка больных', 'перевозка пациентов', 'транспортировка пациента', 'санитарная перевозка', 'медицинское сопровождение пациента', 'перевозка больного с врачом', 'медицинское такси'],
      kk: ['медициналық тасымалдау', 'науқастарды тасымалдау', 'пациенттерді тасымалдау', 'медициналық сүйемелдеу', 'дәрігердің сүйемелдеуімен тасымалдау', 'медициналық такси'],
      en: ['medical transportation', 'patient transportation', 'scheduled medical transport', 'non-emergency medical transportation', 'medical escort transport', 'medical taxi']
    },
    bullets: {
      ru: ['Дата и время по записи', 'Подходящий транспорт', 'Медицинское сопровождение', 'Маршрут от двери до двери'],
      kk: ['Күні мен уақыты алдын ала', 'Сәйкес медициналық көлік', 'Медициналық сүйемелдеу', 'Есіктен есікке дейін'],
      en: ['Scheduled date and time', 'Appropriate vehicle', 'Medical escort', 'Door-to-door route']
    }
  },
  {
    id: 'bedridden-transport',
    icon: '▰',
    slugs: {
      ru: 'perevozka-lezhachih-bolnyh',
      kk: 'tosek-tartyp-zhatqan-nauqasty-tasymaldau',
      en: 'bedridden-patient-transport'
    },
    titles: {
      ru: 'Перевозка лежачих и маломобильных пациентов',
      kk: 'Төсек тартып жатқан және қозғалысы шектеулі пациенттерді тасымалдау',
      en: 'Bedridden and mobility-limited patient transport'
    },
    descriptions: {
      ru: 'Транспортировка лежачих, пожилых, маломобильных и тяжёлых пациентов с учётом этажа, лифта, носилок, кресла и медицинского состояния.',
      kk: 'Төсек тартып жатқан, қарт, қозғалысы шектеулі және ауыр пациенттерді қабат, лифт, зембіл, арба және медициналық жағдайын ескере отырып тасымалдау.',
      en: 'Transport for bedridden, elderly, disabled and mobility-limited patients, planned around stairs, lift access, stretcher, wheelchair and clinical needs.'
    },
    keywords: {
      ru: ['перевозка лежачих больных', 'перевозка тяжелобольных', 'перевозка инвалидов', 'перевозка пожилых людей', 'перевозка на носилках', 'перевозка онкологических больных'],
      kk: ['төсек тартып жатқан науқастарды тасымалдау', 'ауыр науқастарды тасымалдау', 'мүгедектігі бар адамдарды тасымалдау', 'қарт адамдарды тасымалдау', 'зембілмен тасымалдау'],
      en: ['bedridden patient transport', 'stretcher transportation', 'wheelchair medical transport', 'disabled patient transport', 'elderly patient transportation', 'critically ill patient transport']
    },
    bullets: {
      ru: ['Носилки или кресло', 'Оценка лестницы и лифта', 'Помощь при перемещении', 'Сопровождение по состоянию'],
      kk: ['Зембіл немесе арба', 'Баспалдақ пен лифтті бағалау', 'Қозғалуға көмек', 'Жағдайына сай сүйемелдеу'],
      en: ['Stretcher or wheelchair', 'Stair and lift assessment', 'Transfer assistance', 'Condition-appropriate escort']
    }
  },
  {
    id: 'post-hospital-transport',
    icon: '⌂',
    slugs: {
      ru: 'transportirovka-posle-operatsii',
      kk: 'emnen-keyingi-tasymaldau',
      en: 'post-hospital-transport'
    },
    titles: {
      ru: 'Транспортировка после операции, инсульта или травмы',
      kk: 'Операциядан, инсульттен немесе жарақаттан кейін тасымалдау',
      en: 'Post-surgery, stroke and injury transport'
    },
    descriptions: {
      ru: 'Организованный транспорт после выписки, операции, инсульта, инфаркта или травмы — из больницы домой, на госпитализацию или следующий этап лечения.',
      kk: 'Шығарылғаннан, операциядан, инсульттен, инфаркттен немесе жарақаттан кейін ауруханадан үйге, госпитализацияға немесе келесі ем кезеңіне тасымалдау.',
      en: 'Coordinated transport after discharge, surgery, stroke, heart attack or injury, including hospital-to-home and admission journeys.'
    },
    keywords: {
      ru: ['транспортировка после операции', 'перевозка после инсульта', 'перевозка после инфаркта', 'транспортировка после травмы', 'перевозка из больницы домой', 'транспортировка после выписки', 'транспортировка на госпитализацию'],
      kk: ['операциядан кейін тасымалдау', 'инсульттен кейін тасымалдау', 'инфаркттен кейін тасымалдау', 'жарақаттан кейін тасымалдау', 'ауруханадан үйге тасымалдау', 'ауруханаға жатқызуға тасымалдау'],
      en: ['post-surgery transport', 'stroke patient transport', 'post-heart-attack transport', 'injury patient transport', 'hospital-to-home transportation', 'discharge transportation', 'transport for hospital admission']
    },
    bullets: {
      ru: ['Связь с отделением', 'Помощь при выписке', 'Доставка до места', 'Передача семье или клинике'],
      kk: ['Бөлімшемен байланыс', 'Шығарылуға көмек', 'Мекенжайға жеткізу', 'Отбасыға немесе клиникаға тапсыру'],
      en: ['Ward coordination', 'Discharge assistance', 'Destination transfer', 'Handover to family or facility']
    }
  },
  {
    id: 'diagnostics-dialysis',
    icon: '◉',
    slugs: {
      ru: 'transportirovka-na-dializ-kt-mrt',
      kk: 'dializ-kt-mrt-tasymaldau',
      en: 'dialysis-ct-mri-transport'
    },
    titles: {
      ru: 'Транспортировка на диализ, КТ и МРТ',
      kk: 'Диализге, КТ және МРТ-ға тасымалдау',
      en: 'Dialysis, CT and MRI transportation'
    },
    descriptions: {
      ru: 'Плановые поездки пациента на диализ, КТ, МРТ, обследование, процедуру или контрольный приём с возможностью ожидания и обратного трансфера.',
      kk: 'Пациентті диализге, КТ, МРТ, тексеруге, процедураға немесе бақылау қабылдауына жоспарлы жеткізу, күту және кері трансфер мүмкіндігімен.',
      en: 'Scheduled patient journeys for dialysis, CT, MRI, examinations and follow-up appointments, with optional waiting and return transport.'
    },
    keywords: {
      ru: ['перевозка на диализ', 'транспортировка на КТ', 'транспортировка на МРТ', 'перевозка на обследование', 'медицинский транспорт с ожиданием', 'обратный медицинский трансфер'],
      kk: ['диализге тасымалдау', 'КТ-ға тасымалдау', 'МРТ-ға тасымалдау', 'тексеруге тасымалдау', 'күтуі бар медициналық көлік', 'кері медициналық трансфер'],
      en: ['dialysis transportation', 'CT scan patient transport', 'MRI patient transport', 'medical appointment transportation', 'medical transport with waiting', 'round-trip medical transport']
    },
    bullets: {
      ru: ['Регулярное расписание', 'Ожидание по запросу', 'Обратная поездка', 'Учёт мобильности пациента'],
      kk: ['Тұрақты кесте', 'Сұраныс бойынша күту', 'Кері сапар', 'Пациент қозғалысын ескеру'],
      en: ['Recurring schedule', 'Optional waiting', 'Return journey', 'Mobility planning']
    }
  },
  {
    id: 'hospital-transfer',
    icon: 'H',
    slugs: {
      ru: 'mezhbolnichnyy-transfer',
      kk: 'aurukhanalar-arasyndagy-transfer',
      en: 'inter-hospital-transfer'
    },
    titles: {
      ru: 'Межбольничный и межклинический трансфер',
      kk: 'Ауруханалар мен клиникалар арасындағы трансфер',
      en: 'Inter-hospital and inter-clinic transfer'
    },
    descriptions: {
      ru: 'Перевозка пациента между больницами, клиниками и диагностическими центрами с согласованием времени, медицинских документов и принимающего отделения.',
      kk: 'Пациентті ауруханалар, клиникалар және диагностикалық орталықтар арасында уақытын, медициналық құжаттарын және қабылдайтын бөлімшені келісіп тасымалдау.',
      en: 'Patient transfer between hospitals, clinics and diagnostic centres with coordination of timing, medical documents and the receiving department.'
    },
    keywords: {
      ru: ['перевозка между больницами', 'межбольничная транспортировка', 'трансфер пациента между клиниками', 'межклиническая транспортировка', 'перевод пациента в другую больницу', 'доставка пациента в клинику'],
      kk: ['ауруханалар арасында тасымалдау', 'емханалар арасындағы трансфер', 'пациентті басқа ауруханаға ауыстыру', 'пациентті клиникаға жеткізу'],
      en: ['inter-hospital patient transfer', 'inter-clinic medical transport', 'hospital transfer ambulance', 'patient transfer to another hospital', 'clinic-to-clinic patient transfer']
    },
    bullets: {
      ru: ['Согласование двух учреждений', 'Передача документов', 'Подходящая бригада', 'Контролируемая передача пациента'],
      kk: ['Екі мекемені келісу', 'Құжаттарды тапсыру', 'Сәйкес бригада', 'Пациентті бақылаумен тапсыру'],
      en: ['Facility-to-facility coordination', 'Document handover', 'Appropriate clinical team', 'Controlled patient handover']
    }
  },
  {
    id: 'critical-care',
    icon: 'ECG',
    slugs: {
      ru: 'reanimobil',
      kk: 'reanimobil',
      en: 'critical-care-ambulance'
    },
    titles: {
      ru: 'Реанимобиль и транспортировка тяжёлых пациентов',
      kk: 'Реанимобиль және ауыр пациенттерді тасымалдау',
      en: 'Critical care ambulance and reanimobile'
    },
    descriptions: {
      ru: 'Запрос реанимобиля, реанимационной бригады и транспорта для тяжёлого пациента. Необходимое оборудование определяет медицинский диспетчер.',
      kk: 'Реанимобильді, реанимациялық бригаданы және ауыр пациентке арналған көлікті сұрату. Қажетті жабдықты медициналық диспетчер анықтайды.',
      en: 'Request a critical care ambulance, intensive care team or reanimobile. Required equipment and staffing are confirmed by medical dispatch.'
    },
    keywords: {
      ru: ['реанимобиль', 'заказать реанимобиль', 'реанимационная бригада', 'перевозка пациента в реанимобиле', 'транспортировка тяжелого пациента', 'транспортировка пациента на ИВЛ', 'транспортировка с кислородом'],
      kk: ['реанимобиль', 'реанимациялық бригада', 'ауыр халдегі пациентті тасымалдау', 'өкпені жасанды желдетумен тасымалдау', 'оттегімен тасымалдау'],
      en: ['ICU ambulance', 'critical care transport', 'reanimobile', 'intensive care ambulance', 'ventilated patient transport', 'ambulance with oxygen', 'critical patient transportation']
    },
    bullets: {
      ru: ['Клиническая оценка', 'Оборудование по состоянию', 'Специализированная бригада', 'Согласование принимающей стороны'],
      kk: ['Клиникалық бағалау', 'Жағдайға сай жабдық', 'Мамандандырылған бригада', 'Қабылдайтын тараппен келісу'],
      en: ['Clinical assessment', 'Condition-specific equipment', 'Specialist crew', 'Receiving facility coordination']
    }
  },
  {
    id: 'long-distance',
    icon: '↗',
    slugs: {
      ru: 'mezhdugorodnyaya-perevozka-bolnyh',
      kk: 'qalaaralyq-meditsinalyq-tasymaldau',
      en: 'long-distance-medical-transport'
    },
    titles: {
      ru: 'Междугородняя перевозка больных по Казахстану',
      kk: 'Қазақстан бойынша қалааралық медициналық тасымалдау',
      en: 'Long-distance medical transport in Kazakhstan'
    },
    descriptions: {
      ru: 'Планирование дальней медицинской перевозки между городами Казахстана с расчётом маршрута, времени, экипажа, остановок и клинических потребностей.',
      kk: 'Қазақстан қалалары арасында алыс медициналық тасымалдауды маршрут, уақыт, экипаж, аялдамалар және клиникалық қажеттіліктерді есептей отырып жоспарлау.',
      en: 'Long-distance patient transport between cities in Kazakhstan, planned around route, timing, crew, stops and clinical requirements.'
    },
    keywords: {
      ru: ['междугородняя перевозка больных', 'перевозка больных по Казахстану', 'дальняя медицинская транспортировка', 'междугородняя скорая помощь', 'перевозка пациента в другой город'],
      kk: ['қалааралық медициналық тасымалдау', 'Қазақстан бойынша науқас тасымалдау', 'пациентті басқа қалаға тасымалдау', 'алыс медициналық тасымалдау'],
      en: ['long-distance patient transport', 'intercity medical transport Kazakhstan', 'patient transport between cities', 'long-distance ambulance Kazakhstan']
    },
    bullets: {
      ru: ['Расчёт маршрута', 'План смен экипажа', 'Оборудование и запас кислорода', 'Передача в пункте назначения'],
      kk: ['Маршрутты есептеу', 'Экипаж ауысымын жоспарлау', 'Жабдық пен оттегі қоры', 'Межелі жерде тапсыру'],
      en: ['Route planning', 'Crew shift planning', 'Equipment and oxygen planning', 'Destination handover']
    }
  },
  {
    id: 'international-evacuation',
    icon: '✈',
    slugs: {
      ru: 'mezhdunarodnaya-meditsinskaya-evakuatsiya',
      kk: 'halyqaralyq-meditsinalyq-evakuatsiya',
      en: 'international-medical-evacuation'
    },
    titles: {
      ru: 'Международная медицинская эвакуация и репатриация',
      kk: 'Халықаралық медициналық эвакуация және репатриация',
      en: 'International medical evacuation and repatriation'
    },
    descriptions: {
      ru: 'Координация наземной или авиационной медицинской эвакуации, репатриации и маршрута bed-to-bed после анализа медицинских документов.',
      kk: 'Медициналық құжаттарды талдағаннан кейін жерүсті немесе әуе медициналық эвакуациясын, репатриацияны және bed-to-bed бағытын үйлестіру.',
      en: 'Coordination of ground or air medical evacuation, repatriation and bed-to-bed transport after medical documentation review.'
    },
    keywords: {
      ru: ['международная перевозка пациентов', 'медицинская эвакуация', 'санитарная авиация', 'медицинская репатриация', 'перевозка больных в страны СНГ', 'авиационная медицинская эвакуация', 'bed-to-bed транспортировка'],
      kk: ['халықаралық медициналық тасымалдау', 'медициналық эвакуация', 'санитариялық авиация', 'медициналық репатриация', 'әуе медициналық эвакуациясы'],
      en: ['international medical evacuation', 'medical repatriation Kazakhstan', 'air ambulance Kazakhstan', 'bed-to-bed medical transport', 'international patient transfer', 'medical flight coordination']
    },
    bullets: {
      ru: ['Анализ документов', 'Наземный и авиационный сегмент', 'Координация учреждений', 'Bed-to-bed маршрут'],
      kk: ['Құжаттарды талдау', 'Жерүсті және әуе сегменті', 'Мекемелерді үйлестіру', 'Bed-to-bed бағыты'],
      en: ['Document review', 'Ground and air segments', 'Facility coordination', 'Bed-to-bed route']
    }
  },
  {
    id: 'airport-transfer',
    icon: 'A',
    slugs: {
      ru: 'meditsinskiy-transfer-aeroport',
      kk: 'auezhay-meditsinalyq-transferi',
      en: 'airport-medical-transfer'
    },
    titles: {
      ru: 'Медицинский трансфер в аэропорт и из аэропорта',
      kk: 'Әуежайға және әуежайдан медициналық трансфер',
      en: 'Airport medical transfer'
    },
    descriptions: {
      ru: 'Медицинский трансфер пациента между домом, больницей, клиникой и аэропортом с учётом времени рейса, багажа, носилок и сопровождения.',
      kk: 'Рейс уақытын, багажды, зембілді және сүйемелдеуді ескере отырып пациентті үй, аурухана, клиника және әуежай арасында тасымалдау.',
      en: 'Medical transfer between home, hospital, clinic and airport, coordinated around flight time, luggage, stretcher and escort needs.'
    },
    keywords: {
      ru: ['перевозка пациента в аэропорт', 'медицинский трансфер из аэропорта', 'скорая помощь в аэропорт', 'медицинское сопровождение до самолета', 'трансфер лежачего пациента в аэропорт'],
      kk: ['әуежайға медициналық тасымалдау', 'әуежайдан медициналық трансфер', 'пациентті ұшаққа дейін сүйемелдеу', 'төсек тартып жатқан пациентті әуежайға тасымалдау'],
      en: ['airport medical transfer', 'ambulance to airport', 'airport-to-hospital medical transport', 'stretcher patient airport transfer', 'medical escort to aircraft']
    },
    bullets: {
      ru: ['Привязка ко времени рейса', 'Координация аэропорта', 'Багаж и сопровождающие', 'Наземная передача'],
      kk: ['Рейс уақытына сәйкестендіру', 'Әуежаймен үйлестіру', 'Багаж және еріп жүрушілер', 'Жерүсті тапсыру'],
      en: ['Flight-time coordination', 'Airport liaison', 'Luggage and companions', 'Ground handover']
    }
  },
  {
    id: 'event-medical-cover',
    icon: '★',
    slugs: {
      ru: 'skoraya-pomoshch-na-meropriyatie',
      kk: 'is-sharaga-zhedel-zhardem',
      en: 'event-medical-cover'
    },
    titles: {
      ru: 'Скорая помощь и медицинское обеспечение мероприятий',
      kk: 'Іс-шараға жедел жәрдем және медициналық қамтамасыз ету',
      en: 'Event ambulance and medical cover'
    },
    descriptions: {
      ru: 'Дежурство бригады и машины скорой помощи на спортивных, культурных, корпоративных и массовых мероприятиях, концертах и съёмках.',
      kk: 'Спорттық, мәдени, корпоративтік және бұқаралық іс-шараларда, концерттерде және түсірілімдерде жедел жәрдем бригадасы мен көлігінің кезекшілігі.',
      en: 'Ambulance standby and medical coverage for sporting, cultural, corporate and public events, concerts and production sets.'
    },
    keywords: {
      ru: ['скорая помощь на мероприятие', 'аренда скорой помощи на мероприятие', 'дежурство бригады скорой помощи', 'медицинское обеспечение мероприятий', 'скорая помощь на спортивное мероприятие', 'медицинское сопровождение концерта', 'скорая помощь на съемочную площадку', 'медицинское обеспечение массовых мероприятий'],
      kk: ['іс-шараға жедел жәрдем', 'іс-шараға жедел жәрдем көлігін жалға алу', 'жедел жәрдем бригадасының кезекшілігі', 'іс-шараларды медициналық қамтамасыз ету', 'спорттық іс-шараға жедел жәрдем', 'концертті медициналық сүйемелдеу'],
      en: ['ambulance for events', 'event ambulance hire', 'ambulance standby for events', 'event medical coverage', 'sports event ambulance', 'concert medical support', 'film set ambulance', 'mass gathering medical cover']
    },
    bullets: {
      ru: ['Оценка риска мероприятия', 'Бригада на площадке', 'План эвакуации', 'Отчёт для организатора'],
      kk: ['Іс-шара тәуекелін бағалау', 'Алаңдағы бригада', 'Эвакуация жоспары', 'Ұйымдастырушыға есеп'],
      en: ['Event risk assessment', 'On-site medical team', 'Evacuation plan', 'Organizer reporting']
    }
  },
  {
    id: 'corporate-industrial',
    icon: '▦',
    slugs: {
      ru: 'korporativnaya-skoraya-pomoshch',
      kk: 'korporativtik-zhedel-zhardem',
      en: 'corporate-industrial-ambulance'
    },
    titles: {
      ru: 'Корпоративная скорая помощь для предприятий',
      kk: 'Кәсіпорындарға арналған корпоративтік жедел жәрдем',
      en: 'Corporate and industrial ambulance service'
    },
    descriptions: {
      ru: 'Выделенная или зональная скорая помощь, медицинский пост и выездная бригада для офиса, предприятия, стройки, месторождения и вахтового посёлка.',
      kk: 'Кеңсе, кәсіпорын, құрылыс, кен орны және вахталық кент үшін бөлінген немесе аймақтық жедел жәрдем, медициналық пункт және көшпелі бригада.',
      en: 'Dedicated or zonal ambulance cover, medical posts and response teams for offices, industrial facilities, construction sites, fields and remote camps.'
    },
    keywords: {
      ru: ['корпоративная скорая помощь', 'скорая помощь для предприятия', 'скорая помощь для промышленного объекта', 'медицинское обеспечение предприятия', 'медицинский пост на предприятии', 'дежурство скорой помощи', 'скорая помощь на месторождение', 'скорая помощь для вахтового поселка', 'скорая помощь на строительную площадку', 'медицинское сопровождение сотрудников'],
      kk: ['кәсіпорынға арналған жедел жәрдем', 'корпоративтік жедел жәрдем', 'өндірістік нысанға жедел жәрдем', 'кен орнына жедел жәрдем', 'құрылыс алаңына жедел жәрдем', 'вахталық кентке жедел жәрдем', 'кәсіпорынды медициналық қамтамасыз ету', 'қызметкерлерді медициналық сүйемелдеу'],
      en: ['corporate ambulance service', 'ambulance for industrial sites', 'workplace ambulance service', 'oil and gas site medical support', 'construction site ambulance', 'remote camp ambulance', 'company medical post', 'employee emergency medical support']
    },
    bullets: {
      ru: ['SLA и зона покрытия', 'Выделенная или общая бригада', 'Интеграция с HSE', 'Ежемесячная отчётность'],
      kk: ['SLA және қамту аймағы', 'Бөлінген немесе ортақ бригада', 'HSE жүйесімен біріктіру', 'Ай сайынғы есеп'],
      en: ['SLA and coverage zone', 'Dedicated or shared crew', 'HSE integration', 'Monthly reporting']
    }
  },
  {
    id: 'insurance-assistance',
    icon: '✓',
    slugs: {
      ru: 'skoraya-pomoshch-dlya-strahovyh-kompaniy',
      kk: 'saqtandyru-kompaniyalaryna-zhedel-zhardem',
      en: 'ambulance-for-insurers-assistance'
    },
    titles: {
      ru: 'Скорая помощь для страховых и ассистанс-компаний',
      kk: 'Сақтандыру және ассистанс компанияларына арналған жедел жәрдем',
      en: 'Ambulance services for insurers and assistance companies'
    },
    descriptions: {
      ru: 'Единый канал заявок для страховых и ассистанс-компаний: проверка данных, организация транспорта, согласование случая, документы и консолидированная отчётность.',
      kk: 'Сақтандыру және ассистанс компанияларына арналған бірыңғай өтінім арнасы: деректерді тексеру, тасымалдауды ұйымдастыру, жағдайды келісу, құжаттар және біріктірілген есеп.',
      en: 'A coordinated request channel for insurers and assistance companies covering eligibility data, transport, case approval, documents and consolidated reporting.'
    },
    keywords: {
      ru: ['услуги скорой помощи для страховых компаний', 'медицинская транспортировка для страховых компаний', 'медицинский ассистанс', 'обслуживание застрахованных лиц', 'скорая помощь по страховке', 'прямой биллинг скорой помощи'],
      kk: ['сақтандыру компанияларына медициналық тасымалдау', 'сақтандырылған тұлғаларға жедел жәрдем', 'медициналық ассистанс', 'сақтандыру бойынша жедел жәрдем'],
      en: ['ambulance services for insurance companies', 'medical transportation for insurers', 'medical assistance company Kazakhstan', 'ambulance for insured members', 'direct billing ambulance']
    },
    bullets: {
      ru: ['Единая точка контакта', 'Проверка покрытия', 'Документы по случаю', 'Консолидированная фактура'],
      kk: ['Бірыңғай байланыс нүктесі', 'Қамтуды тексеру', 'Жағдай құжаттары', 'Біріктірілген шот'],
      en: ['Single contact point', 'Coverage verification', 'Case documentation', 'Consolidated invoicing']
    }
  },
  {
    id: 'hospital-clinic-partners',
    icon: '＋',
    slugs: {
      ru: 'transport-dlya-bolnits-i-klinik',
      kk: 'aurukhaneler-men-klinikalar-ushin-tasymal',
      en: 'transport-for-hospitals-clinics'
    },
    titles: {
      ru: 'Медицинский транспорт для больниц и клиник',
      kk: 'Ауруханалар мен клиникаларға арналған медициналық көлік',
      en: 'Medical transport for hospitals and clinics'
    },
    descriptions: {
      ru: 'Партнёрская перевозка пациентов для больниц, клиник, реабилитационных центров, диализных центров и домов ухода по заявке учреждения.',
      kk: 'Ауруханалар, клиникалар, оңалту орталықтары, диализ орталықтары және күтім үйлері үшін мекеменің өтінімі бойынша пациент тасымалдау.',
      en: 'Contracted patient transport for hospitals, clinics, rehabilitation centres, dialysis centres and care facilities.'
    },
    keywords: {
      ru: ['перевозка пациентов для больниц', 'медицинский транспорт для клиник', 'транспортировка пациентов по договору', 'вывоз пациента после выписки', 'аутсорсинг медицинского транспорта', 'скорая помощь для частной клиники'],
      kk: ['ауруханаларға арналған пациент тасымалы', 'клиникаларға арналған медициналық көлік', 'шарт бойынша пациенттерді тасымалдау', 'шығарылғаннан кейін пациентті тасымалдау'],
      en: ['medical transportation for hospitals', 'ambulance services for clinics', 'contract patient transport', 'outsourced medical transportation', 'patient discharge transport service']
    },
    bullets: {
      ru: ['Портал заявок', 'Согласованные тарифы', 'Плановые и срочные заявки', 'Отчётность по учреждению'],
      kk: ['Өтінімдер порталы', 'Келісілген тарифтер', 'Жоспарлы және шұғыл өтінімдер', 'Мекеме бойынша есеп'],
      en: ['Booking portal', 'Contracted rates', 'Scheduled and urgent requests', 'Facility reporting']
    }
  },
  {
    id: 'hotels-expats',
    icon: '◇',
    slugs: {
      ru: 'skoraya-pomoshch-dlya-oteley-i-inostrantsev',
      kk: 'qonaquylar-men-sheteldikterge-zhedel-zhardem',
      en: 'ambulance-for-hotels-expats'
    },
    titles: {
      ru: 'Скорая помощь для отелей, иностранцев и экспатов',
      kk: 'Қонақүйлерге, шетелдіктерге және экспаттарға жедел жәрдем',
      en: 'Ambulance for hotels, travellers and expatriates'
    },
    descriptions: {
      ru: 'Многоязычная координация медицинской помощи для гостей отелей, туристов, экспатов и иностранных сотрудников с транспортом в клинику и связью со страховой.',
      kk: 'Қонақүй қонақтары, туристер, экспаттар және шетелдік қызметкерлер үшін клиникаға тасымалдау және сақтандырумен байланыс арқылы көптілді медициналық көмекті үйлестіру.',
      en: 'Multilingual medical coordination for hotel guests, travellers, expatriates and foreign employees, including clinic transport and insurer liaison.'
    },
    keywords: {
      ru: ['скорая помощь для отеля', 'скорая помощь для иностранцев', 'медицинская помощь туристам', 'медицинская помощь экспатам', 'врач в отель', 'транспорт из отеля в клинику'],
      kk: ['қонақүйге жедел жәрдем', 'шетелдіктерге жедел жәрдем', 'туристерге медициналық көмек', 'экспаттарға медициналық көмек', 'қонақүйге дәрігер шақыру'],
      en: ['ambulance for hotels', 'ambulance for foreigners Kazakhstan', 'medical assistance for tourists', 'expat medical assistance', 'doctor to hotel', 'hotel-to-clinic medical transport']
    },
    bullets: {
      ru: ['RU/KZ/EN координация', 'Связь с отелем', 'Клиника и транспорт', 'Контакт со страховой'],
      kk: ['RU/KZ/EN үйлестіру', 'Қонақүймен байланыс', 'Клиника және көлік', 'Сақтандырумен байланыс'],
      en: ['RU/KZ/EN coordination', 'Hotel liaison', 'Clinic and transport', 'Insurance contact']
    }
  }
];

const almatyNeighborhoods: AmbulanceLocation[] = [
  ['samal', 'Самал', 'Самал', 'Samal', '751710000'],
  ['gornyy-gigant', 'Горный Гигант', 'Горный Гигант', 'Gorny Gigant', '751710000'],
  ['kok-tobe', 'Кок-Тобе', 'Көк-Төбе', 'Kok-Tobe', '751710000'],
  ['orbita', 'Орбита', 'Орбита', 'Orbita', '751410000'],
  ['atakent', 'Атакент', 'Атакент', 'Atakent', '751410000'],
  ['kazgu', 'КазГУ', 'ҚазҰУ', 'KazNU', '751410000'],
  ['mamyr', 'Мамыр', 'Мамыр', 'Mamyr', '751310000'],
  ['aksay-almaty', 'Аксай', 'Ақсай', 'Aksai', '751310000'],
  ['sayran', 'Сайран', 'Сайран', 'Sairan', '751310000'],
  ['kalkaman', 'Калкаман', 'Қалқаман', 'Kalkaman', '751810000'],
  ['shugyla', 'Шугыла', 'Шұғыла', 'Shugyla', '751810000'],
  ['akzhar', 'Акжар', 'Ақжар', 'Akzhar', '751810000'],
  ['tausamaly', 'Таусамалы', 'Таусамалы', 'Tausamaly', '751810000'],
  ['zhas-kanat', 'Жас Канат', 'Жас Қанат', 'Zhas Kanat', '751910000'],
  ['aynabulak', 'Айнабулак', 'Айнабұлақ', 'Ainabulak', '751510000'],
  ['pervomayskiy', 'Первомайский', 'Первомай', 'Pervomaiskiy', '751510000'],
  ['nurkent', 'Нуркент', 'Нұркент', 'Nurkent', '751210000'],
  ['algabas', 'Алгабас', 'Алғабас', 'Algabas', '751210000'],
  ['sayaly', 'Саялы', 'Саялы', 'Sayaly', '751210000'],
  ['kok-kaynar', 'Кок-Кайнар', 'Көк-Қайнар', 'Kok-Kainar', '751210000']
].map(([slug, ru, kk, en, parentId]) => ({
  id: `neighborhood-${slug}`,
  type: 'neighborhood',
  parentId,
  names: { ru, kk, en },
  slugs: { ru: slug, kk: slug, en: slug },
  region: { ru: 'город Алматы', kk: 'Алматы қаласы', en: 'Almaty' }
}));

export const ambulanceLocations: AmbulanceLocation[] = [
  ...officialLocations,
  ...almatyNeighborhoods
];

export const ambulanceUi = {
  ru: {
    brand: 'Medsestra Ambulance',
    urgent: 'При угрозе жизни немедленно звоните 103.',
    call103: 'Позвонить 103',
    hubH1: 'Частная скорая помощь и медицинская транспортировка в Казахстане',
    hubLead: 'Одна точка заявки для частной скорой помощи, плановой перевозки пациентов, реанимобиля, мероприятий, предприятий, больниц, клиник и страховых компаний.',
    request: 'Оставить заявку',
    call: 'Позвонить',
    servicesEyebrow: 'Все направления',
    servicesH2: 'Выберите подходящий медицинский транспорт',
    servicesLead: 'Тип автомобиля, состав бригады и оборудование подтверждает диспетчер после уточнения состояния пациента и маршрута.',
    locationsEyebrow: 'География',
    locationsH2: 'Города и городские районы Казахстана',
    locationsLead: 'Страницы сформированы по официальному классификатору КАТО. Для каждого выезда доступность команды подтверждается отдельно.',
    b2bEyebrow: 'Для организаций',
    b2bH2: 'Единый канал для корпоративных клиентов',
    b2bLead: 'Отдельные сценарии для страховых компаний, больниц, клиник, предприятий, промышленных объектов, отелей и организаторов мероприятий.',
    processEyebrow: 'Как оформить заявку',
    processH2: 'От заявки до подтверждённого транспорта',
    process: ['Укажите пациента, адрес и задачу', 'Диспетчер уточнит медицинские и логистические детали', 'Получите подтверждение бригады, времени и стоимости'],
    keywordEyebrow: 'Популярные запросы',
    keywordH2: 'Услуги, которые ищут пациенты и организации',
    disclaimer: 'Medsestra.kz принимает и координирует заявки. Медицинскую услугу должен оказывать лицензированный оператор, указанный в подтверждении заказа. Доступность, время подачи и цена подтверждаются диспетчером.',
    allCities: 'Все города',
    cityDistricts: 'Районы города',
    neighborhoods: 'Микрорайоны',
    cityPageLead: 'Заявка на частную скорую помощь и медицинскую транспортировку для пациентов, больниц, клиник, компаний и страховщиков.',
    noDiagnosis: 'Онлайн-форма не ставит диагноз. При угрозе жизни звоните 103.'
  },
  kk: {
    brand: 'Medsestra Ambulance',
    urgent: 'Өмірге қауіп төнсе, дереу 103 нөміріне қоңырау шалыңыз.',
    call103: '103-ке қоңырау шалу',
    hubH1: 'Қазақстандағы жеке жедел жәрдем және медициналық тасымалдау',
    hubLead: 'Жеке жедел жәрдем, жоспарлы пациент тасымалы, реанимобиль, іс-шаралар, кәсіпорындар, ауруханалар, клиникалар және сақтандыру компаниялары үшін бірыңғай өтінім арнасы.',
    request: 'Өтінім қалдыру',
    call: 'Қоңырау шалу',
    servicesEyebrow: 'Барлық бағыттар',
    servicesH2: 'Қажетті медициналық көлікті таңдаңыз',
    servicesLead: 'Көлік түрін, бригада құрамын және жабдықты диспетчер пациенттің жағдайы мен бағытын нақтылағаннан кейін растайды.',
    locationsEyebrow: 'География',
    locationsH2: 'Қазақстан қалалары мен қалалық аудандары',
    locationsLead: 'Беттер ресми КАТО жіктеуіші бойынша жасалған. Әр шығу үшін команданың қолжетімділігі бөлек расталады.',
    b2bEyebrow: 'Ұйымдарға',
    b2bH2: 'Корпоративтік клиенттерге бірыңғай арна',
    b2bLead: 'Сақтандыру компаниялары, ауруханалар, клиникалар, кәсіпорындар, өндірістік нысандар, қонақүйлер және іс-шара ұйымдастырушыларына арналған сценарийлер.',
    processEyebrow: 'Өтінімді рәсімдеу',
    processH2: 'Өтінімнен расталған көлікке дейін',
    process: ['Пациентті, мекенжайды және міндетті көрсетіңіз', 'Диспетчер медициналық және логистикалық мәліметтерді нақтылайды', 'Бригаданы, уақытты және бағаны растауды алыңыз'],
    keywordEyebrow: 'Танымал сұраулар',
    keywordH2: 'Пациенттер мен ұйымдар іздейтін қызметтер',
    disclaimer: 'Medsestra.kz өтінімдерді қабылдайды және үйлестіреді. Медициналық қызметті тапсырыс растауында көрсетілген лицензияланған оператор көрсетуі тиіс. Қолжетімділік, келу уақыты және баға диспетчермен расталады.',
    allCities: 'Барлық қалалар',
    cityDistricts: 'Қала аудандары',
    neighborhoods: 'Шағын аудандар',
    cityPageLead: 'Пациенттерге, ауруханаларға, клиникаларға, компанияларға және сақтандырушыларға жеке жедел жәрдем мен медициналық тасымалдауға өтінім.',
    noDiagnosis: 'Онлайн нысан диагноз қоймайды. Өмірге қауіп төнсе, 103-ке қоңырау шалыңыз.'
  },
  en: {
    brand: 'Medsestra Ambulance',
    urgent: 'For a life-threatening emergency, call 103 immediately.',
    call103: 'Call 103',
    hubH1: 'Private ambulance and medical transportation in Kazakhstan',
    hubLead: 'One request channel for private ambulance calls, scheduled patient transport, critical care vehicles, events, companies, hospitals, clinics and insurers.',
    request: 'Request a quote',
    call: 'Call',
    servicesEyebrow: 'All services',
    servicesH2: 'Choose the appropriate medical transport',
    servicesLead: 'Dispatch confirms the vehicle, crew and equipment after reviewing the patient condition and route.',
    locationsEyebrow: 'Coverage',
    locationsH2: 'Cities and urban districts across Kazakhstan',
    locationsLead: 'Pages follow Kazakhstan’s official KATO classification. Team availability is confirmed separately for every request.',
    b2bEyebrow: 'For organizations',
    b2bH2: 'One channel for corporate medical mobility',
    b2bLead: 'Dedicated workflows for insurers, hospitals, clinics, companies, industrial sites, hotels and event organizers.',
    processEyebrow: 'How to request',
    processH2: 'From request to confirmed transport',
    process: ['Provide the patient, address and request type', 'Dispatch confirms the medical and logistical details', 'Receive crew, timing and price confirmation'],
    keywordEyebrow: 'Popular searches',
    keywordH2: 'Services searched by patients and organizations',
    disclaimer: 'Medsestra.kz receives and coordinates requests. Medical care must be delivered by the licensed operator named in the booking confirmation. Availability, arrival time and price are confirmed by dispatch.',
    allCities: 'All cities',
    cityDistricts: 'City districts',
    neighborhoods: 'Neighborhoods',
    cityPageLead: 'Private ambulance and medical transport requests for patients, hospitals, clinics, companies and insurers.',
    noDiagnosis: 'The online form does not provide a diagnosis. For a life-threatening emergency, call 103.'
  }
} satisfies Localized<Record<string, string | string[]>>;

export function getAmbulanceService(id: string) {
  return ambulanceServices.find((service) => service.id === id);
}

export function getAmbulanceLocation(id: string) {
  return ambulanceLocations.find((location) => location.id === id);
}

export function getLocationParent(location: AmbulanceLocation) {
  return location.parentId ? getAmbulanceLocation(location.parentId) : undefined;
}

export function getLocationPathSegments(lang: AmbulanceLang, location: AmbulanceLocation): string[] {
  const parent = getLocationParent(location);
  if (!parent) return [location.slugs[lang]];
  const grandparent = getLocationParent(parent);
  if (!grandparent) return [parent.slugs[lang], location.slugs[lang]];
  return [grandparent.slugs[lang], parent.slugs[lang], location.slugs[lang]];
}

export function getAmbulanceHubUrl(lang: AmbulanceLang) {
  return `/${lang}/${ambulanceRouteSegments[lang].root}/`;
}

export function getAmbulanceServiceUrl(lang: AmbulanceLang, service: AmbulanceService) {
  return `${getAmbulanceHubUrl(lang)}${ambulanceRouteSegments[lang].services}/${service.slugs[lang]}/`;
}

export function getAmbulanceLocationUrl(lang: AmbulanceLang, location: AmbulanceLocation) {
  return `${getAmbulanceHubUrl(lang)}${getLocationPathSegments(lang, location).join('/')}/`;
}

export function getAmbulanceAlternates(
  item?: { service?: AmbulanceService; location?: AmbulanceLocation }
) {
  return Object.fromEntries(
    ambulanceLanguages.map((lang) => {
      const url = item?.service
        ? getAmbulanceServiceUrl(lang, item.service)
        : item?.location
          ? getAmbulanceLocationUrl(lang, item.location)
          : getAmbulanceHubUrl(lang);
      return [ambulanceHreflang[lang], url];
    })
  ) as Record<string, string>;
}

export function getAllAmbulanceKeywords(lang: AmbulanceLang) {
  return Array.from(new Set(ambulanceServices.flatMap((service) => service.keywords[lang])));
}

export function locationDisplayName(lang: AmbulanceLang, location: AmbulanceLocation) {
  const parent = getLocationParent(location);
  if (!parent) return location.names[lang];
  return lang === 'en'
    ? `${location.names.en}, ${parent.names.en}`
    : `${location.names[lang]}, ${parent.names[lang]}`;
}

export function locationContext(lang: AmbulanceLang, location: AmbulanceLocation) {
  const display = locationDisplayName(lang, location);
  if (lang === 'ru') return location.type === 'city' ? `в городе ${display}` : `в ${display}`;
  if (lang === 'kk') return location.type === 'city' ? `${display} қаласында` : `${display} аумағында`;
  return `in ${display}`;
}

export function getLocationKeywordCombinations(lang: AmbulanceLang, location: AmbulanceLocation) {
  const place = location.names[lang];
  const parent = getLocationParent(location);
  const placeLong = parent ? `${place} ${parent.names[lang]}` : place;
  return getAllAmbulanceKeywords(lang).map((keyword) => `${keyword} ${placeLong}`);
}

export function findAmbulanceServiceBySlug(lang: AmbulanceLang, slug: string) {
  return ambulanceServices.find((service) => service.slugs[lang] === slug);
}

export function findAmbulanceLocationBySegments(lang: AmbulanceLang, segments: string[]) {
  return ambulanceLocations.find(
    (location) => getLocationPathSegments(lang, location).join('/') === segments.join('/')
  );
}

export type AmbulanceResolvedPage =
  | { kind: 'hub' }
  | { kind: 'service'; service: AmbulanceService }
  | { kind: 'location'; location: AmbulanceLocation };

export function resolveAmbulancePage(
  lang: AmbulanceLang,
  rootSegment: string,
  slug: string[] = []
): AmbulanceResolvedPage | undefined {
  if (rootSegment !== ambulanceRouteSegments[lang].root) return undefined;
  if (slug.length === 0) return { kind: 'hub' };
  if (slug[0] === ambulanceRouteSegments[lang].services && slug.length === 2) {
    const service = findAmbulanceServiceBySlug(lang, slug[1]);
    return service ? { kind: 'service', service } : undefined;
  }
  const location = findAmbulanceLocationBySegments(lang, slug);
  return location ? { kind: 'location', location } : undefined;
}

export function getAllAmbulanceStaticParams() {
  return ambulanceLanguages.flatMap((lang) => {
    const base = { lang, ambulance: ambulanceRouteSegments[lang].root };
    return [
      { ...base, slug: [] as string[] },
      ...ambulanceServices.map((service) => ({
        ...base,
        slug: [ambulanceRouteSegments[lang].services, service.slugs[lang]]
      })),
      ...ambulanceLocations.map((location) => ({
        ...base,
        slug: getLocationPathSegments(lang, location)
      }))
    ];
  });
}
