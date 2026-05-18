import { imageFiles, site } from '@/lib/content';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F1E8]">
      <div className="grid min-h-screen lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex items-center px-5 pb-16 pt-32 md:px-10 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <div className="mb-8 h-px w-28 bg-brand-gold" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-ink/50">
              Private medical concierge · Almaty
            </p>
            <h1 className="mt-7 text-[3.65rem] font-semibold leading-[0.92] tracking-[-0.075em] text-brand-ink md:text-7xl xl:text-8xl">
              Медсестра на дом в Алматы
            </h1>
            <p className="mt-4 text-base text-brand-ink/45">Medsestra na dom v Almaty</p>
            <p className="mt-8 max-w-xl text-xl leading-9 text-brand-ink/68">
              Премиальный сервис выезда медсестры, Family Care, Corporate Care и Beauty & Wellness IV. Спокойно, чисто, профессионально — через один понятный контакт.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-luxury transition hover:-translate-y-0.5">
                Записаться
              </a>
              <a href="/services/" className="rounded-full border border-brand-ink/15 bg-white/50 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink backdrop-blur transition hover:bg-white">
                Услуги
              </a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-brand-ink/10 pt-8">
              <div>
                <p className="text-2xl font-semibold text-brand-ink">4.9</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-ink/45">service score</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-brand-ink">28</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-ink/45">zones</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-brand-ink">RU/KZ/EN</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-ink/45">languages</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[62vh] lg:min-h-screen">
          <picture>
            <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
            <img src={imageFiles.home.desktop} alt="Medsestra.kz — private nurse at home in Almaty" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/28 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/35 bg-white/75 p-5 shadow-luxury backdrop-blur-xl md:bottom-10 md:left-10 md:right-auto md:w-[420px]">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-blue">Быстрая заявка</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-brand-ink">Медсестра, family care или wellness IV?</h2>
            <p className="mt-3 text-sm leading-6 text-brand-ink/62">Напишите в WhatsApp — мы уточним район, услугу, время и подберём формат без лишних анкет.</p>
            <a href={`https://wa.me/${site.whatsapp}`} className="mt-5 inline-flex rounded-full bg-brand-ink px-5 py-3 text-sm font-semibold text-white">
              Открыть WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
