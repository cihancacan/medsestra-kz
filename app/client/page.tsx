import { Header } from '@/components/Header';

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="mx-auto max-w-4xl px-5 pt-32">
        <div className="rounded-[2rem] bg-white p-8 shadow-premium md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Личный кабинет / Lichnyy kabinet</p>
          <h1 className="mt-4 text-5xl font-semibold text-brand-navy">Espace client</h1>
          <p className="mt-5 text-lg leading-8 text-brand-navy/70">Version de départ : espace vitrine. La connexion Supabase sera ajoutée après création du projet Supabase.</p>
        </div>
      </section>
    </main>
  );
}
