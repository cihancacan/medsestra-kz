import { imageFiles, site } from '@/lib/content';

export function Hero() {
  return (
    <section className="bg-[#FBF8F4] pt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-20">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Medsestra.kz · Almaty</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-brand-ink md:text-7xl">
            Медсестра на дом в Алматы
          </h1>
          <p className="mt-3 text-base text-brand-ink/45">Medsestra na dom v Almaty</p>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-brand-ink/68">
            Частный сервис для ухода на дому, family care, корпоративных программ и Beauty & Wellness IV. Проверенные специалисты, аккуратный выезд и запись через WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-8 py-4 text-center font-semibold text-white shadow-premium">
              Записаться в WhatsApp
            </a>
            <a href="/prices/" className="rounded-full border border-brand-ink/15 bg-white px-8 py-4 text-center font-semibold text-brand-ink shadow-sm">
              Посмотреть цены
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-brand-ink/10 pt-7">
            <div>
              <p className="text-2xl font-semibold text-brand-ink">RU/KZ/EN</p>
              <p className="mt-1 text-sm text-brand-ink/48">языки сервиса</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-ink">Kaspi</p>
              <p className="mt-1 text-sm text-brand-ink/48">удобная оплата</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-ink">Almaty</p>
              <p className="mt-1 text-sm text-brand-ink/48">город и область</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-luxury">
            <picture>
              <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
              <img src={imageFiles.home.desktop} alt="Medsestra.kz — медсестра на дом в Алматы" className="h-[520px] w-full object-cover md:h-[720px]" />
            </picture>
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-white/88 p-5 shadow-premium backdrop-blur-xl md:left-8 md:right-8">
              <p className="text-sm font-semibold text-brand-ink">Быстрая заявка</p>
              <p className="mt-1 text-sm leading-6 text-brand-ink/60">Укажите услугу, район и удобное время — мы подтвердим запись в WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
