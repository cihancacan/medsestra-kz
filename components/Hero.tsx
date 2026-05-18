import { imageFiles, site } from '@/lib/content';

const quickServices = ['Укол на дому', 'Перевязка', 'Family Care', 'Beauty IV'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F4EF] pt-24">
      <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute right-0 top-20 h-[480px] w-[480px] rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] gap-8 px-4 pb-10 md:px-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-stretch lg:pb-16">
        <div className="flex flex-col justify-center rounded-[2rem] bg-white/70 p-6 shadow-sm backdrop-blur md:p-10 lg:min-h-[760px] lg:p-14">
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-brand-ink/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/55">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Almaty private care
          </div>

          <h1 className="max-w-3xl text-[3.3rem] font-semibold leading-[0.94] tracking-[-0.07em] text-brand-ink md:text-7xl xl:text-[5.8rem]">
            Медсестра на дом. Без лишнего стресса.
          </h1>
          <p className="mt-4 text-base text-brand-ink/42">Medsestra na dom. Bez lishnego stressa.</p>
          <p className="mt-7 max-w-xl text-xl leading-9 text-brand-ink/66">
            Уход на дому, Family Care, Corporate Care и Beauty & Wellness IV в Алматы. Один номер для звонка, WhatsApp и сопровождения заявки.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-8 py-4 text-center font-semibold text-white shadow-luxury transition hover:-translate-y-0.5">
              Написать в WhatsApp
            </a>
            <a href={site.phoneHref} className="rounded-full border border-brand-ink/12 bg-white px-8 py-4 text-center font-semibold text-brand-ink shadow-sm transition hover:-translate-y-0.5">
              Позвонить {site.phone}
            </a>
          </div>

          <div className="mt-9 rounded-[1.75rem] border border-brand-ink/8 bg-[#F6F4EF] p-4 md:p-5">
            <p className="text-sm font-semibold text-brand-ink">Быстрый выбор услуги</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {quickServices.map((service) => (
                <a key={service} href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${service}`)}`} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-ink shadow-sm transition hover:bg-brand-soft">
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-brand-ink/62">
            <span className="rounded-full bg-white px-4 py-2">RU / KZ / EN</span>
            <span className="rounded-full bg-white px-4 py-2">Kaspi Pay</span>
            <a className="rounded-full bg-white px-4 py-2" href={site.emailHref}>{site.email}</a>
          </div>
        </div>

        <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] bg-brand-ink shadow-luxury lg:min-h-[760px]">
          <picture>
            <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
            <img src={imageFiles.home.desktop} alt="Medsestra.kz — premium nurse at home in Almaty" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
          <div className="absolute left-5 right-5 top-5 flex justify-between gap-3 md:left-8 md:right-8 md:top-8">
            <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink backdrop-blur">Medsestra.kz</div>
            <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink backdrop-blur">Home visit</div>
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border border-white/25 bg-white/88 p-5 shadow-luxury backdrop-blur-xl md:bottom-8 md:left-8 md:right-auto md:w-[440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">Concierge desk</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-brand-ink">Один контакт для всей заявки</h2>
            <p className="mt-3 text-sm leading-6 text-brand-ink/62">Звонок, WhatsApp или email. Мы уточняем услугу, район и время, затем подтверждаем визит.</p>
            <div className="mt-4 flex gap-2">
              <a href={site.phoneHref} className="rounded-full bg-brand-ink px-4 py-2 text-sm font-semibold text-white">Call</a>
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
