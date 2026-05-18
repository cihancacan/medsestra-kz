import { imageFiles, site } from '@/lib/content';

const quickServices = ['Укол на дому', 'Перевязка', 'Family Care', 'Beauty IV'];

export function Hero() {
  return (
    <section className="bg-[#F6F4EF] pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] gap-0 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="order-2 flex items-center px-5 py-10 md:px-8 lg:order-1 lg:py-16 xl:px-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/55">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              Almaty · Private medical concierge
            </div>

            <h1 className="mt-7 text-[3.15rem] font-semibold leading-[0.96] tracking-[-0.065em] text-brand-ink md:text-6xl xl:text-7xl">
              Медсестра на дом в Алматы
            </h1>
            <p className="mt-4 text-base text-brand-ink/45">Medsestra na dom v Almaty</p>
            <p className="mt-7 text-lg leading-8 text-brand-ink/68 md:text-xl md:leading-9">
              Уход на дому, Family Care, Corporate Care и Beauty & Wellness IV. Один номер для звонка, WhatsApp и сопровождения заявки.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-8 py-4 text-center font-semibold text-white shadow-premium transition hover:-translate-y-0.5">
                WhatsApp
              </a>
              <a href={site.phoneHref} className="rounded-full border border-brand-ink/12 bg-white px-8 py-4 text-center font-semibold text-brand-ink shadow-sm transition hover:-translate-y-0.5">
                {site.phone}
              </a>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-brand-ink/8 bg-white p-4 shadow-sm md:p-5">
              <p className="text-sm font-semibold text-brand-ink">Быстрый выбор услуги</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {quickServices.map((service) => (
                  <a key={service} href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${service}`)}`} className="rounded-2xl bg-[#F6F4EF] px-4 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-soft">
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

        <div className="order-1 min-h-[58vh] overflow-hidden lg:order-2 lg:min-h-[calc(100vh-5rem)]">
          <picture>
            <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
            <img
              src={imageFiles.home.desktop}
              alt="Medsestra.kz — premium nurse at home in Almaty"
              className="h-full w-full object-cover object-[50%_18%] md:object-[70%_50%] lg:object-right"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
