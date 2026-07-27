import { Header } from '@/components/Header';
import {
  ambulanceLanguages,
  ambulanceLocations,
  ambulanceServices,
  ambulanceUi,
  getAllAmbulanceKeywords,
  getAmbulanceAlternates,
  getAmbulanceHubUrl,
  getAmbulanceLocationUrl,
  getAmbulanceServiceUrl,
  getLocationKeywordCombinations,
  getLocationParent,
  locationContext,
  locationDisplayName,
  type AmbulanceLang,
  type AmbulanceLocation,
  type AmbulanceResolvedPage
} from '@/lib/ambulance-seo-data';
import { site } from '@/lib/content';
import { SITE_URL } from '@/lib/site-url';

const languageLabels = {
  ru: 'Русский',
  kk: 'Қазақша',
  en: 'English'
};

const ambulanceImageAlt = {
  ru: 'Медицинская бригада внутри современной машины скорой помощи',
  kk: 'Заманауи жедел жәрдем көлігінің ішіндегі медициналық бригада',
  en: 'Medical team inside a modern ambulance'
};

const businessServiceIds = new Set([
  'corporate-industrial',
  'insurance-assistance',
  'hospital-clinic-partners',
  'event-medical-cover',
  'hotels-expats'
]);

function pageUrl(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  if (page.kind === 'service') return getAmbulanceServiceUrl(lang, page.service);
  if (page.kind === 'location') return getAmbulanceLocationUrl(lang, page.location);
  return getAmbulanceHubUrl(lang);
}

function pageTitle(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  if (page.kind === 'service') return page.service.titles[lang];
  if (page.kind === 'location') {
    const place = locationDisplayName(lang, page.location);
    if (lang === 'ru') return `Частная скорая помощь и медицинская транспортировка — ${place}`;
    if (lang === 'kk') return `${place}: жеке жедел жәрдем және медициналық тасымалдау`;
    return `Private ambulance and medical transportation in ${place}`;
  }
  return ambulanceUi[lang].hubH1;
}

function pageLead(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  if (page.kind === 'service') return page.service.descriptions[lang];
  if (page.kind === 'location') {
    const context = locationContext(lang, page.location);
    return `${ambulanceUi[lang].cityPageLead} ${context}.`;
  }
  return ambulanceUi[lang].hubLead;
}

function whatsappMessage(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  const subject = page.kind === 'service'
    ? page.service.titles[lang]
    : page.kind === 'location'
      ? locationDisplayName(lang, page.location)
      : ambulanceUi[lang].brand;
  if (lang === 'ru') return `Здравствуйте. Нужна заявка Medsestra Ambulance: ${subject}.`;
  if (lang === 'kk') return `Сәлеметсіз бе. Medsestra Ambulance өтінімі қажет: ${subject}.`;
  return `Hello. I need a Medsestra Ambulance request: ${subject}.`;
}

function locationGroups(lang: AmbulanceLang) {
  const groups = new Map<string, AmbulanceLocation[]>();
  ambulanceLocations
    .filter((location) => location.type === 'city')
    .forEach((location) => {
      const region = location.region[lang];
      groups.set(region, [...(groups.get(region) ?? []), location]);
    });
  return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b, lang));
}

function LanguageNav({ lang, page }: { lang: AmbulanceLang; page: AmbulanceResolvedPage }) {
  return (
    <nav aria-label="Languages" className="flex flex-wrap gap-2">
      {ambulanceLanguages.map((candidate) => (
        <a
          key={candidate}
          href={pageUrl(candidate, page)}
          hrefLang={candidate}
          className={`rounded-full px-4 py-2 text-sm font-black transition ${
            candidate === lang
              ? 'bg-[#071827] text-white'
              : 'bg-white text-[#071827] ring-1 ring-[#D7EEF7] hover:bg-[#EAF6FB]'
          }`}
        >
          {languageLabels[candidate]}
        </a>
      ))}
    </nav>
  );
}

function ServiceCards({
  lang,
  location,
  businessOnly = false
}: {
  lang: AmbulanceLang;
  location?: AmbulanceLocation;
  businessOnly?: boolean;
}) {
  const services = businessOnly
    ? ambulanceServices.filter((service) => businessServiceIds.has(service.id))
    : ambulanceServices;

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <a
          key={service.id}
          href={getAmbulanceServiceUrl(lang, service)}
          className="group rounded-[1.8rem] border border-[#DDE8EE] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#23A6D5] hover:shadow-xl"
        >
          <div className="flex items-start justify-between gap-5">
            <span className="flex h-12 min-w-12 items-center justify-center rounded-2xl bg-[#EAF6FB] text-sm font-black text-[#1677A8]">
              {service.icon}
            </span>
            <span className="text-xl font-black text-[#23A6D5] transition group-hover:translate-x-1">→</span>
          </div>
          <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.04em] text-[#071827]">
            {service.titles[lang]}
            {location ? ` — ${location.names[lang]}` : ''}
          </h3>
          <p className="mt-4 leading-7 text-[#071827]/62">{service.descriptions[lang]}</p>
          <ul className="mt-5 space-y-2 text-sm font-bold text-[#071827]/68">
            {service.bullets[lang].slice(0, 3).map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="text-[#23A6D5]">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </a>
      ))}
    </div>
  );
}

function CityDirectory({ lang }: { lang: AmbulanceLang }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {locationGroups(lang).map(([region, locations]) => (
        <details key={region} className="rounded-[1.6rem] bg-white p-5 ring-1 ring-[#D7EEF7]" open={locations.some((location) => ['almaty', 'astana', 'shymkent'].includes(location.slugs.en))}>
          <summary className="cursor-pointer list-none text-lg font-black text-[#071827]">
            <span className="flex items-center justify-between gap-4">
              {region}
              <span className="rounded-full bg-[#EAF6FB] px-3 py-1 text-xs text-[#1677A8]">{locations.length}</span>
            </span>
          </summary>
          <div className="mt-4 flex flex-wrap gap-2">
            {locations.map((location) => (
              <a
                key={location.id}
                href={getAmbulanceLocationUrl(lang, location)}
                className="rounded-full bg-[#F5FBFE] px-3 py-2 text-sm font-bold text-[#071827]/72 hover:bg-[#DFF3FA] hover:text-[#071827]"
              >
                {location.names[lang]}
              </a>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

function ChildLocations({ lang, location }: { lang: AmbulanceLang; location: AmbulanceLocation }) {
  const children = ambulanceLocations.filter((item) => item.parentId === location.id);
  if (children.length === 0) return null;
  const heading = children[0].type === 'district'
    ? ambulanceUi[lang].cityDistricts
    : ambulanceUi[lang].neighborhoods;
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-black tracking-[-0.04em]">{heading}</h3>
      <div className="mt-5 flex flex-wrap gap-3">
        {children.map((child) => (
          <a
            key={child.id}
            href={getAmbulanceLocationUrl(lang, child)}
            className="rounded-full bg-white px-4 py-2.5 text-sm font-black text-[#071827] ring-1 ring-[#D7EEF7] hover:bg-[#EAF6FB]"
          >
            {child.names[lang]}
          </a>
        ))}
      </div>
    </div>
  );
}

function KeywordSection({ lang, page }: { lang: AmbulanceLang; page: AmbulanceResolvedPage }) {
  const keywords = page.kind === 'service'
    ? page.service.keywords[lang]
    : page.kind === 'location'
      ? getLocationKeywordCombinations(lang, page.location)
      : getAllAmbulanceKeywords(lang);

  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{ambulanceUi[lang].keywordEyebrow}</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{ambulanceUi[lang].keywordH2}</h2>
        <details className="mt-10 rounded-[2rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
          <summary className="cursor-pointer text-lg font-black text-[#071827]">
            {page.kind === 'location' ? locationDisplayName(lang, page.location) : ambulanceUi[lang].brand} — {keywords.length}
          </summary>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {keywords.map((keyword) => (
              <li key={keyword} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#071827]/68 ring-1 ring-[#E2EEF4]">{keyword}</li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

function faq(lang: AmbulanceLang, page: AmbulanceResolvedPage) {
  const subject = page.kind === 'service'
    ? page.service.titles[lang]
    : page.kind === 'location'
      ? locationDisplayName(lang, page.location)
      : ambulanceUi[lang].brand;
  if (lang === 'ru') {
    return [
      { q: `Как оформить заявку на ${subject}?`, a: 'Позвоните или отправьте сообщение в WhatsApp. Укажите адрес, состояние и мобильность пациента, пункт назначения, дату и контактное лицо.' },
      { q: 'Когда подтверждается цена?', a: 'После уточнения маршрута, типа автомобиля, состава бригады, оборудования, этажа, лифта, ожидания и обратной поездки.' },
      { q: 'Может ли заявку оформить больница, страховая или компания?', a: 'Да. Для организаций предусмотрена заявка от ответственного лица, согласование условий и документы для корпоративной оплаты.' },
      { q: 'Заменяет ли частная услуга государственную скорую 103?', a: 'Нет. При угрозе жизни необходимо немедленно звонить 103. Онлайн-заявка Medsestra не ставит диагноз и не заменяет государственную экстренную службу.' }
    ];
  }
  if (lang === 'kk') {
    return [
      { q: `${subject} бойынша өтінімді қалай беруге болады?`, a: 'Қоңырау шалыңыз немесе WhatsApp-қа жазыңыз. Мекенжайды, пациенттің жағдайы мен қозғалысын, баратын жерін, күнін және байланыс тұлғасын көрсетіңіз.' },
      { q: 'Баға қашан расталады?', a: 'Бағыт, көлік түрі, бригада құрамы, жабдық, қабат, лифт, күту және кері сапар нақтыланғаннан кейін.' },
      { q: 'Өтінімді аурухана, сақтандыру компаниясы немесе кәсіпорын бере ала ма?', a: 'Иә. Ұйымдарға жауапты тұлға арқылы өтінім, шарттарды келісу және корпоративтік төлем құжаттары қарастырылған.' },
      { q: 'Жеке қызмет мемлекеттік 103 жедел жәрдемін алмастыра ма?', a: 'Жоқ. Өмірге қауіп төнсе, дереу 103-ке қоңырау шалу қажет. Medsestra онлайн өтінімі диагноз қоймайды және мемлекеттік шұғыл қызметті алмастырмайды.' }
    ];
  }
  return [
    { q: `How do I request ${subject}?`, a: 'Call or message us on WhatsApp with the address, patient condition and mobility, destination, requested date and contact person.' },
    { q: 'When is the price confirmed?', a: 'After dispatch confirms the route, vehicle, crew, equipment, floor access, lift, waiting time and return journey.' },
    { q: 'Can a hospital, insurer or company submit a request?', a: 'Yes. Organizations can book through an authorized contact and receive agreed commercial terms and corporate payment documents.' },
    { q: 'Does this replace the public 103 emergency service?', a: 'No. Call 103 immediately for a life-threatening emergency. The Medsestra online request does not diagnose and does not replace the public emergency service.' }
  ];
}

export function AmbulanceSeoPage({
  lang,
  page
}: {
  lang: AmbulanceLang;
  page: AmbulanceResolvedPage;
}) {
  const ui = ambulanceUi[lang];
  const alternates = getAmbulanceAlternates(
    page.kind === 'service' ? { service: page.service } : page.kind === 'location' ? { location: page.location } : undefined
  );
  const localizedUrls = {
    RU: alternates['ru-KZ'],
    KZ: alternates['kk-KZ'],
    EN: alternates['en-KZ']
  };
  const initialLang = lang === 'ru' ? 'RU' : lang === 'kk' ? 'KZ' : 'EN';
  const canonical = `${SITE_URL}${pageUrl(lang, page)}`;
  const questions = faq(lang, page);
  const title = pageTitle(lang, page);
  const lead = pageLead(lang, page);
  const location = page.kind === 'location' ? page.location : undefined;
  const parent = location ? getLocationParent(location) : undefined;
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage(lang, page))}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      url: canonical,
      inLanguage: lang,
      description: lead,
      isPartOf: { '@type': 'WebSite', name: 'Medsestra.kz', url: SITE_URL }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      serviceType: page.kind === 'service' ? page.service.titles[lang] : 'Ambulance and medical transportation coordination',
      areaServed: location ? locationDisplayName(lang, location) : 'Kazakhstan',
      availableLanguage: ['ru', 'kk', 'en'],
      provider: {
        '@type': 'Organization',
        name: 'Medsestra.kz',
        url: SITE_URL,
        telephone: site.phone,
        email: site.email
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ];

  return (
    <main lang={lang} className="bg-white text-[#071827]">
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang)}` }} />
      <Header initialLang={initialLang} localizedUrls={localizedUrls} />
      {structuredData.map((item) => (
        <script key={item['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}

      <section className="border-b border-red-100 bg-red-50 px-5 pb-4 pt-24 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black text-red-800">{ui.urgent}</p>
          <a href="tel:103" className="rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-black text-white shadow-lg">{ui.call103}</a>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#EAF6FB] px-5 py-16 md:px-8 md:py-24">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full border-[80px] border-white/55" />
        <div className="absolute -bottom-24 left-[44%] h-64 w-64 rounded-full bg-[#23A6D5]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">{ui.brand}</p>
              <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl">{title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/68 md:text-xl md:leading-9">{lead}</p>
              {parent && <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-[#1677A8]">{parent.names[lang]} · {location?.region[lang]}</p>}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsapp} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">{ui.request}</a>
                <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">{ui.call} {site.phone}</a>
              </div>
              <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-[#071827]/52">{ui.noDiagnosis}</p>
            </div>
            <div className="shrink-0 lg:w-[min(36vw,430px)]">
              <div className="rounded-[1.7rem] bg-white/80 p-4 shadow-sm ring-1 ring-white">
                <LanguageNav lang={lang} page={page} />
              </div>
              <div className="mt-5 overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl ring-1 ring-white">
                <picture>
                  <source media="(min-width: 1024px)" srcSet="/images/ambulance.kz.jpg" />
                  <img
                    src="/images/ambulance.kz.mb.jpg"
                    alt={ambulanceImageAlt[lang]}
                    width={1254}
                    height={1254}
                    loading="eager"
                    fetchPriority="high"
                    className="aspect-square w-full rounded-[1.6rem] object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {page.kind === 'service' ? (
        <section className="bg-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{ui.processEyebrow}</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{page.service.titles[lang]}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {page.service.bullets[lang].map((bullet, index) => (
                <div key={bullet} className="rounded-[1.6rem] bg-[#F5FBFE] p-6 ring-1 ring-[#D7EEF7]">
                  <span className="text-sm font-black text-[#23A6D5]">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-black tracking-[-0.03em]">{bullet}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{ui.servicesEyebrow}</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{ui.servicesH2}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#071827]/62">{ui.servicesLead}</p>
            <ServiceCards lang={lang} location={location} />
          </div>
        </section>
      )}

      <section className="bg-[#071827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#23A6D5]">{ui.b2bEyebrow}</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">{ui.b2bH2}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/62">{ui.b2bLead}</p>
          <div className="[&>div>a]:bg-white [&>div>a]:text-[#071827]">
            <ServiceCards lang={lang} location={location} businessOnly />
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">{ui.locationsEyebrow}</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
            {location ? locationDisplayName(lang, location) : ui.locationsH2}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#071827]/62">{ui.locationsLead}</p>
          {location ? <ChildLocations lang={lang} location={location} /> : <CityDirectory lang={lang} />}
          {page.kind === 'service' && <CityDirectory lang={lang} />}
        </div>
      </section>

      <KeywordSection lang={lang} page={page} />

      <section className="bg-[#F5FBFE] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">FAQ</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {questions.map((item) => (
              <article key={item.q} className="rounded-[1.8rem] bg-white p-6 ring-1 ring-[#D7EEF7]">
                <h2 className="text-xl font-black tracking-[-0.03em]">{item.q}</h2>
                <p className="mt-4 leading-7 text-[#071827]/64">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-sm font-semibold leading-7 text-amber-950">
          {ui.disclaimer}
        </div>
      </section>
    </main>
  );
}
