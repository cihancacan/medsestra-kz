import { imageFiles, site } from '@/lib/content';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white pt-20">
      <picture>
        <source media="(max-width: 768px)" srcSet={imageFiles.home.mobile} />
        <img
          src={imageFiles.home.desktop}
          alt="Medsestra.kz — nurse care at home in Almaty"
          className="absolute inset-0 h-full w-full object-cover object-[50%_18%] md:object-[70%_50%] lg:object-right"
        />
      </picture>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(234,246,251,0.74)_0%,rgba(255,255,255,0.48)_34%,rgba(255,255,255,0.10)_60%,rgba(255,255,255,0.58)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.90)_0%,rgba(240,250,255,0.76)_30%,rgba(214,242,252,0.34)_58%,rgba(214,242,252,0.08)_80%,rgba(214,242,252,0)_100%)]" />
      <div className="absolute -right-12 top-10 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/30 blur-3xl" />
      <div className="absolute left-[-90px] top-20 h-[420px] w-[420px] rounded-full bg-[#BDEBFF]/24 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col px-5 pb-8 pt-4 md:flex md:items-center md:px-8 md:py-12 lg:py-16">
        <div className="max-w-2xl md:w-full md:pt-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7] backdrop-blur md:px-4 md:py-2 md:text-xs md:tracking-[0.16em]">
            <span className="h-2 w-2 rounded-full bg-[#23A6D5]" />
            Nurse care in Almaty
          </div>

          <div className="mt-[14svh] md:mt-0">
            <h1 className="max-w-3xl text-[2.38rem] font-black leading-[0.94] tracking-[-0.065em] text-[#071827] md:mt-7 md:text-7xl lg:text-[5.4rem]">
              Уход на дому, как удобный сервис
            </h1>
            <p className="mt-2 text-sm font-medium text-[#071827]/45 md:mt-4 md:text-base">Ukhod na domu, kak udobnyy servis</p>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#071827]/68 md:mt-7 md:text-xl md:leading-9">
              Медсестра на дом, Family Care, Corporate Care и Beauty IV. Напишите в WhatsApp или позвоните — мы организуем визит.
            </p>
          </div>

          <div className="mt-16 flex max-w-xl flex-col gap-2 sm:flex-row md:mt-8 md:gap-3">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-6 py-3.5 text-center font-bold text-white shadow-xl transition hover:-translate-y-0.5 md:px-7 md:py-4">
              Написать в WhatsApp
            </a>
            <a href={site.phoneHref} className="rounded-2xl bg-white px-6 py-3.5 text-center font-bold text-[#071827] shadow-sm ring-1 ring-[#DDE8EE] transition hover:-translate-y-0.5 md:px-7 md:py-4">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
