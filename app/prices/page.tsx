import { Header } from '@/components/Header';
import { site } from '@/lib/content';

const priceGroups = [
  {
    title: 'Soins à domicile',
    ru: 'Медсестра на дом',
    translit: 'Medsestra na dom',
    description: 'Уколы, перевязки, снятие швов и базовые процедуры на дому.',
    items: [
      { service: 'Уколы на дому', price: 'от 8 000 ₸', note: 'По назначению врача' },
      { service: 'Перевязка на дому', price: 'от 12 000 ₸', note: 'Стерильные материалы' },
      { service: 'Снятие швов', price: 'от 12 000 ₸', note: 'После уточнения ситуации' },
      { service: 'Капельница на дому', price: 'от 18 000 ₸', note: 'При медицинских показаниях' }
    ]
  },
  {
    title: 'Family Care',
    ru: 'Забота о родителях',
    translit: 'Zabota o roditelyakh',
    description: 'Регулярные визиты, сопровождение и короткий отчёт семье после визита.',
    items: [
      { service: 'Family Care Start', price: 'от 149 000 ₸ / месяц', note: 'Базовый формат сопровождения' },
      { service: 'Family Care Plus', price: 'от 249 000 ₸ / месяц', note: 'Больше визитов и приоритет' },
      { service: 'Сопровождение в клинику', price: 'по запросу', note: 'Клиника, лаборатория, обследование' }
    ]
  },
  {
    title: 'Corporate Care',
    ru: 'Медсестра в офис',
    translit: 'Medsestra v ofis',
    description: 'Выезд в офис, wellness day, поддержка руководителей и сотрудников.',
    items: [
      { service: 'Wellness Day', price: 'по запросу', note: 'Для команды или офиса' },
      { service: 'Корпоративная медсестра', price: 'по запросу', note: 'По графику компании' },
      { service: 'Executive Care', price: 'по запросу', note: 'Для руководителей и VIP-клиентов' }
    ]
  },
  {
    title: 'Beauty & Wellness IV',
    ru: 'Капельницы красоты',
    translit: 'Kapelnitsy krasoty',
    description: 'Vitamin IV, glow, energy, hydration и восстановление после интенсивного ритма.',
    items: [
      { service: 'Vitamin IV', price: 'от 30 000 ₸', note: 'После оценки специалиста' },
      { service: 'Glow Beauty IV', price: 'от 35 000 ₸', note: 'Beauty & wellness формат' },
      { service: 'Energy & Hydration', price: 'от 35 000 ₸', note: 'Восстановление и энергия' },
      { service: 'Recovery IV', price: 'от 35 000 ₸', note: 'Восстановление после вечеринки' }
    ]
  },
  {
    title: 'Déplacement / urgence / nuit',
    ru: 'Выезд, срочность и ночное время',
    translit: 'Vyezd, srochnost i nochnoe vremya',
    description: 'Финальная стоимость зависит от района, времени, срочности и формата заявки.',
    items: [
      { service: 'Выезд по Алматы', price: 'включён / по зоне', note: 'Зависит от района' },
      { service: 'Срочный выезд', price: '+ supplément', note: 'При наличии специалиста' },
      { service: 'Ночь / выходные', price: '+ supplément', note: 'После подтверждения' }
    ]
  }
];

export default function PricesPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />

      <section className="relative overflow-hidden bg-white px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-20 top-20 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
              Prix
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#071827] md:text-7xl lg:text-8xl">
              Цены Medsestra.kz
            </h1>
            <p className="mt-4 text-base font-medium text-[#071827]/45">Tseny Medsestra.kz</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Стартовые тарифы для ухода на дому, Family Care, Corporate Care, Beauty & Wellness IV и Recovery IV. Финальная стоимость зависит от услуги, района, времени и срочности.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">
                Уточнить цену в WhatsApp
              </a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-5">
            {priceGroups.map((group) => (
              <a key={group.title} href={`#${group.title.toLowerCase().replaceAll(' ', '-')}`} className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-1 hover:shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1677A8]">{group.title}</p>
                <h2 className="mt-3 text-xl font-black tracking-[-0.04em] text-[#071827]">{group.ru}</h2>
                <p className="mt-1 text-sm font-semibold text-[#071827]/45">{group.translit}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl space-y-10">
          {priceGroups.map((group) => (
            <section key={group.title} id={group.title.toLowerCase().replaceAll(' ', '-')} className="overflow-hidden rounded-[2.4rem] bg-white shadow-xl ring-1 ring-[#DDE8EE]">
              <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="bg-[#071827] p-7 text-white md:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#23A6D5]">{group.title}</p>
                  <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-5xl">{group.ru}</h2>
                  <p className="mt-3 text-sm font-semibold text-white/45">{group.translit}</p>
                  <p className="mt-6 text-base leading-7 text-white/65">{group.description}</p>
                </div>

                <div className="divide-y divide-[#E2EEF4] bg-white">
                  {group.items.map((item) => (
                    <div key={item.service} className="grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-7">
                      <div>
                        <h3 className="text-xl font-black tracking-[-0.03em] text-[#071827]">{item.service}</h3>
                        <p className="mt-1 text-sm font-semibold text-[#071827]/50">{item.note}</p>
                      </div>
                      <p className="rounded-2xl bg-[#F5FBFE] px-4 py-3 text-left text-xl font-black text-[#1677A8] ring-1 ring-[#D7EEF7] md:text-right">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#EAF6FB] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Important</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Les prix restent des tarifs de départ.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#071827]/62">
              Avant chaque intervention, nous confirmons le service, la zone, le créneau, le matériel nécessaire et le prix final. La première version du site ne collecte pas de données médicales sensibles.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-[#D7EEF7]">
            <a href={`https://wa.me/${site.whatsapp}`} className="block rounded-2xl bg-[#071827] px-5 py-4 text-center font-black text-white">WhatsApp</a>
            <a href={site.phoneHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.phone}</a>
            <a href={site.emailHref} className="mt-3 block rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827]">{site.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
