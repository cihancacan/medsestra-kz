import { imageFiles, site } from '@/lib/content';

export function Hero() {
  return (
    <section className="relative min-h-[94vh] overflow-hidden bg-brand-beige pt-24 md:min-h-screen">
      <picture>
        <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
        <img src={imageFiles.home.desktop} alt="Medsestra.kz — медсестра на дом в Алматы" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl items-center px-5 py-16 md:min-h-[88vh]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex rounded-full border border-brand-blue/30 bg-white/75 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm backdrop-blur">
            Медицинская и wellness-консьерж-служба на дому в Алматы
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-brand-navy md:text-7xl">
            Медсестра на дом в Алматы
          </h1>
          <p className="mt-3 text-base text-brand-navy/60">Medsestra na dom v Almaty</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-navy/78 md:text-xl">
            Уколы, перевязки, снятие швов, уход за пожилыми, corporate care и Beauty & Wellness IV. Проверенные специалисты, запись через WhatsApp и удобная оплата.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-navy px-7 py-4 text-center font-semibold text-white shadow-premium">
              Вызвать медсестру
            </a>
            <a href="/prices/" className="rounded-full border border-brand-navy/15 bg-white/85 px-7 py-4 text-center font-semibold text-brand-navy backdrop-blur">
              Посмотреть цены
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm text-brand-navy/70">
            <div className="rounded-2xl bg-white/75 p-4 backdrop-blur"><b className="block text-brand-navy">45 мин</b>ориентир выезда</div>
            <div className="rounded-2xl bg-white/75 p-4 backdrop-blur"><b className="block text-brand-navy">RU | KZ | EN</b>языки сервиса</div>
            <div className="rounded-2xl bg-white/75 p-4 backdrop-blur"><b className="block text-brand-navy">Kaspi</b>удобная оплата</div>
          </div>
        </div>
      </div>
    </section>
  );
}
