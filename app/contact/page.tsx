import { Header } from '@/components/Header';
import { pillars, site } from '@/lib/content';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#071827]">
      <Header />

      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EAF6FB] to-white" />
        <div className="absolute -right-24 top-24 h-[520px] w-[520px] rounded-full bg-[#8ED8F8]/24 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1677A8] shadow-sm ring-1 ring-[#D7EEF7]">
            Contact
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.07em] md:text-7xl lg:text-8xl">
            Связаться с Medsestra.kz
          </h1>
          <p className="mt-4 text-base font-medium text-[#071827]/45">Svyazatsya s Medsestra.kz</p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#071827]/64 md:text-xl md:leading-9">
            Pour organiser un passage à domicile, le plus simple est de nous écrire sur WhatsApp ou de nous appeler directement.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-3">
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-2xl bg-[#071827] px-6 py-4 text-center font-black text-white shadow-xl">
              WhatsApp
            </a>
            <a href={site.phoneHref} className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
              Appeler
            </a>
            <a href={site.emailHref} className="rounded-2xl bg-white px-6 py-4 text-center font-black text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">
              Email
            </a>
          </div>

          <div className="mx-auto mt-5 grid max-w-3xl gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827] ring-1 ring-[#D7EEF7]">
              {site.phone}
            </div>
            <div className="rounded-2xl bg-[#F5FBFE] px-5 py-4 text-center font-black text-[#071827] ring-1 ring-[#D7EEF7]">
              {site.email}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBFE] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2.4rem] bg-white p-6 shadow-xl ring-1 ring-[#DDE8EE] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1677A8]">Demande rapide</p>
                <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-5xl">
                  Choisir un service
                </h2>
                <p className="mt-5 leading-7 text-[#071827]/62">
                  Un clic ouvre WhatsApp avec le service choisi. Nous confirmerons ensuite la zone et le créneau.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {pillars.map((pillar) => (
                  <a
                    key={pillar.key}
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${pillar.eyebrow}`)}`}
                    className="rounded-[1.5rem] bg-[#F5FBFE] p-5 ring-1 ring-[#D7EEF7] transition hover:bg-[#EAF6FB]"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1677A8]">{pillar.title}</p>
                    <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071827]">{pillar.eyebrow}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#071827]/45">{pillar.translit}</p>
                  </a>
                ))}

                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Здравствуйте, хочу записаться: Recovery IV / восстановление после вечеринки')}`}
                  className="rounded-[1.5rem] bg-[#071827] p-5 text-white transition hover:bg-[#0D2238] md:col-span-2"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#23A6D5]">Recovery IV</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">Восстановление после вечеринки</h3>
                  <p className="mt-1 text-sm font-semibold text-white/45">Vosstanovlenie posle vecherinki</p>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-white p-6 text-center shadow-sm ring-1 ring-[#DDE8EE]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1677A8]">Informations utiles</p>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#071827]/62">
              Pour gagner du temps, envoyez simplement : service souhaité, quartier, créneau préféré, nom et téléphone. Aucune donnée médicale sensible n’est demandée à cette étape.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
