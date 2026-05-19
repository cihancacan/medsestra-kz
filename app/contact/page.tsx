import { Header } from '@/components/Header';
import { site } from '@/lib/content';

const quickServices = [
  'Медсестра на дом',
  'Family Care',
  'Corporate Care',
  'Beauty & Wellness IV',
  'Recovery IV'
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#071827]">
      <Header />

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-32">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-24 top-24 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/24 blur-3xl" />
        <div className="absolute -left-28 bottom-10 h-[360px] w-[360px] rounded-full bg-[#BDEBFF]/18 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
              Contact
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              Связаться с Medsestra.kz
            </h1>
            <p className="mt-4 text-base font-medium text-[#071827]/45">Svyazatsya s Medsestra.kz</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
              Pour organiser un passage à domicile, écrivez sur WhatsApp ou appelez directement. Nous confirmons le service, la zone et le créneau.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-7 py-4 text-center font-black text-white shadow-xl">
                WhatsApp
              </a>
              <a href={site.phoneHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
                Appeler
              </a>
              <a href={site.emailHref} className="rounded-2xl bg-white px-7 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
                Email
              </a>
            </div>
          </div>

          <div className="rounded-[2.4rem] bg-white p-6 shadow-2xl ring-1 ring-[#DDE8EE] md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Demande rapide</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#071827]">Choisir un service</h2>
            <div className="mt-5 grid gap-2">
              {quickServices.map((service) => (
                <a
                  key={service}
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${service}`)}`}
                  className="flex items-center justify-between rounded-2xl bg-[#F5FBFE] px-4 py-3.5 font-black text-[#071827] ring-1 ring-[#D7EEF7]"
                >
                  {service}
                  <span className="text-[#1677A8]">→</span>
                </a>
              ))}
            </div>

            <div className="mt-6 grid gap-2 border-t border-[#E2EEF4] pt-5 text-center font-black">
              <a href={site.phoneHref} className="rounded-2xl bg-[#F5FBFE] px-4 py-3 text-[#071827] ring-1 ring-[#D7EEF7]">{site.phone}</a>
              <a href={site.emailHref} className="rounded-2xl bg-[#F5FBFE] px-4 py-3 text-[#071827] ring-1 ring-[#D7EEF7]">{site.email}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
