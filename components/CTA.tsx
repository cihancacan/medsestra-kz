import { site } from '@/lib/content';

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="overflow-hidden rounded-[2rem] bg-brand-navy p-8 text-white shadow-premium md:p-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Medsestra.kz</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Нужна медсестра домой, в офис или для семьи?
            </h2>
            <p className="mt-2 text-sm text-white/55">Nuzhna medsestra domoy, v ofis ili dlya semyi?</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Оставьте заявку в WhatsApp. Мы уточним услугу, район, удобное время и подберём подходящий формат: разовый визит, Family Care, Corporate Care или Beauty & Wellness IV.
            </p>
            <a href={`https://wa.me/${site.whatsapp}`} className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-brand-navy">
              Написать в WhatsApp
            </a>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold text-brand-blue">Что мы уточним</p>
            <ul className="mt-5 space-y-3 text-white/80">
              <li>• Услуга и район выезда</li>
              <li>• Удобное время визита</li>
              <li>• Нужна ли предварительная проверка</li>
              <li>• Разовый визит или абонемент</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
