import { imageFiles, site } from '@/lib/content';

const quickServices = ['Укол на дому', 'Перевязка', 'Family Care', 'Beauty IV'];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F6F4EF] pt-20">
      <picture>
        <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
        <img
          src={imageFiles.home.desktop}
          alt="Medsestra.kz — premium nurse at home in Almaty"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-[#F6F4EF]/96 via-[#F6F4EF]/78 to-[#F6F4EF]/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F6F4EF] via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-14 md:px-8">
        <div className="max-w-2xl rounded-[2rem] bg-white/72 p-6 shadow-premium backdrop-blur-xl md:p-10 lg:bg-white/62">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/55">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Almaty · Private medical concierge
          </div>

          <h1 className="mt-7 text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.065em] text-brand-ink md:text-7xl lg:text-[5.4rem]">
            Медсестра на дом в Алматы
          </h1>
          <p className="mt-4 text-base text-brand-ink/45">Medsestra na dom v Almaty</p>
          <p className="mt-7 max-w-xl text-lg leading-8 text-brand-ink/68 md:text-xl md:leading-9">
            Уход на дому, Family Care, Corporate Care и Beauty & Wellness IV. Один номер для звонка, WhatsApp и сопровождения заявки.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-8 py-4 text-center font-semibold text-white shadow-luxury transition hover:-translate-y-0.5">
              WhatsApp
            </a>
            <a href={site.phoneHref} className="rounded-full border border-brand-ink/12 bg-white px-8 py-4 text-center font-semibold text-brand-ink shadow-sm transition hover:-translate-y-0.5">
              {site.phone}
            </a>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-brand-ink/8 bg-[#F6F4EF]/85 p-4 md:p-5">
            <p className="text-sm font-semibold text-brand-ink">Быстрый выбор услуги</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {quickServices.map((service) => (
                <a key={service} href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${service}`)}`} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-ink shadow-sm transition hover:bg-brand-soft">
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-brand-ink/62">
            <span className="rounded-full bg-white px-4 py-2">RU / KZ / EN</span>
            <span className="rounded-full bg-white px-4 py-2">Kaspi Pay</span>
            <a className="rounded-full bg-white px-4 py-2" href={site.emailHref}>{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
