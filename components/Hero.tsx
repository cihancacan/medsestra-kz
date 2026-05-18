import { imageFiles } from '@/lib/content';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-brand-beige pt-24 md:min-h-screen">
      <picture>
        <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
        <img src={imageFiles.home.desktop} alt="Medsestra.kz premium nurse at home in Almaty" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 py-16 md:min-h-[88vh]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex rounded-full border border-brand-blue/30 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm backdrop-blur">
            Premium home nursing & wellness concierge in Almaty
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-brand-navy md:text-7xl">
            Медсестра на дом в Алматы
          </h1>
          <p className="mt-3 text-base text-brand-navy/60">Medsestra na dom v Almaty</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-navy/78 md:text-xl">
            Medsestra.kz connecte les familles, particuliers et entreprises avec des professionnels vérifiés pour soins à domicile, Family Care, Corporate Care et Beauty & Wellness IV.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/77000000000" className="rounded-full bg-brand-navy px-7 py-4 text-center font-semibold text-white shadow-premium">
              Réserver sur WhatsApp
            </a>
            <a href="/prices/" className="rounded-full border border-brand-navy/15 bg-white/80 px-7 py-4 text-center font-semibold text-brand-navy backdrop-blur">
              Voir les prix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
