import { imageFiles, site } from '@/lib/content';

const quickServices = ['Укол на дому', 'Перевязка', 'Family Care', 'Beauty IV'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20">
      <div className="absolute inset-x-0 top-0 h-[72%] bg-gradient-to-b from-[#EAF6FB] to-white" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
            <span className="h-2 w-2 rounded-full bg-[#23A6D5]" />
            Nurse care in Almaty
          </div>
          <h1 className="mt-7 max-w-3xl text-[3.3rem] font-black leading-[0.92] tracking-[-0.075em] text-[#071827] md:text-7xl lg:text-[5.4rem]">
            Уход на дому, как удобный сервис
          </h1>
          <p className="mt-4 text-base font-medium text-[#071827]/45">Ukhod na domu, kak udobnyy servis</p>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#071827]/68 md:text-xl md:leading-9">
            Медсестра на дом, Family Care, Corporate Care и Beauty IV. Выберите услугу, напишите в WhatsApp или позвоните — мы организуем визит.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-bold text-white shadow-xl transition hover:-translate-y-0.5">
              Написать в WhatsApp
            </a>
            <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-bold text-[#071827] shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-0.5">
              {site.phone}
            </a>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 rounded-[2rem] bg-white p-3 shadow-xl ring-1 ring-[#E2EEF4] sm:grid-cols-2">
            {quickServices.map((service) => (
              <a key={service} href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${service}`)}`} className="rounded-2xl bg-[#F5FBFE] px-4 py-4 text-sm font-bold text-[#071827] transition hover:bg-[#EAF6FB]">
                {service}
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-[#071827] shadow-2xl">
            <picture>
              <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
              <img
                src={imageFiles.home.desktop}
                alt="Medsestra.kz — nurse care at home in Almaty"
                className="h-[560px] w-full object-cover object-[50%_18%] md:h-[720px] md:object-[70%_50%] lg:object-right"
              />
            </picture>
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-white/92 p-4 backdrop-blur">
                <p className="text-xl font-black text-[#071827]">RU/KZ/EN</p>
                <p className="text-xs font-semibold text-[#071827]/50">языки</p>
              </div>
              <div className="rounded-2xl bg-white/92 p-4 backdrop-blur">
                <p className="text-xl font-black text-[#071827]">Kaspi</p>
                <p className="text-xs font-semibold text-[#071827]/50">оплата</p>
              </div>
              <div className="rounded-2xl bg-white/92 p-4 backdrop-blur">
                <p className="text-xl font-black text-[#071827]">Almaty</p>
                <p className="text-xs font-semibold text-[#071827]/50">выезд</p>
              </div>
            </div>
          </div>
          <a href={site.emailHref} className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
