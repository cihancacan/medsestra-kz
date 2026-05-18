import { Header } from '@/components/Header';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Header />
      <section className="mx-auto max-w-4xl px-5 pt-32">
        <div className="rounded-[2rem] bg-white p-8 shadow-premium md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Панель администратора / Panel administratora</p>
          <h1 className="mt-4 text-5xl font-semibold text-brand-navy">Admin</h1>
          <p className="mt-5 text-lg leading-8 text-brand-navy/70">Version de départ : écran placeholder. On connectera ensuite les leads, les prix et les abonnements avec Supabase.</p>
        </div>
      </section>
    </main>
  );
}
