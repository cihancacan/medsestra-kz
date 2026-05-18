import { BookingPanel } from '@/components/BookingPanel';
import { imageFiles, site } from '@/lib/content';

export function Hero() {
  return (
    <section className="relative min-h-[96vh] overflow-hidden bg-brand-beige pt-24 md:min-h-screen">
      <picture>
        <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
        <img src={imageFiles.home.desktop} alt="Medsestra.kz — медсестра на дом в Алматы" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-beige to-transparent" />
      <div className="relative z-10 mx-auto grid min-h-[86vh] max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.72fr] md:py-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex rounded-full border border-brand-blue/30 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm backdrop-blur">
            Медицинская и wellness-консьерж-служба на дому в Алматы
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-brand-navy md:text-7xl lg:text-8xl">
            Медсестра на дом в Алматы
          </h1>
          <p className="mt-3 text-base text-brand-navy/55">Medsestra na dom v Almaty</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-navy/78 md:text-xl">
            Уколы, перевязки, снятие швов, уход за пожилыми, corporate care и Beauty & Wellness IV. Премиальный сервис, проверенные специалисты и запись через WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-navy px-8 py-4 text-center font-semibold text-white shadow-premium transition hover:-translate-y-0.5">
              Вызвать медсестру
            </a>
            <a href="/prices/" className="rounded-full border border-brand-navy/15 bg-white/85 px-8 py-4 text-center font-semibold text-brand-navy backdrop-blur transition hover:bg-white">
              Посмотреть цены
            </a>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-sm text-brand-navy/70">
            <div className="glass-card rounded-2xl p-4"><b className="block text-lg text-brand-navy">45 мин</b>ориентир выезда</div>
            <div className="glass-card rounded-2xl p-4"><b className="block text-lg text-brand-navy">RU | KZ | EN</b>языки сервиса</div>
            <div className="glass-card rounded-2xl p-4"><b className="block text-lg text-brand-navy">Kaspi</b>удобная оплата</div>
          </div>
        </div>
        <div className="hidden md:block">
          <BookingPanel />
        </div>
      </div>
    </section>
  );
}
