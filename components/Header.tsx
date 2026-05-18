import { site } from '@/lib/content';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-ink/8 bg-white/88 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-ink text-sm font-semibold text-white shadow-premium">M</span>
          <span className="leading-tight">
            <span className="block text-xl font-semibold tracking-[-0.03em] text-brand-ink">Medsestra.kz</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink/42 md:block">Private nurse in Almaty</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-brand-ink/68 lg:flex">
          <a className="transition hover:text-brand-ink" href="/#about">À propos</a>
          <a className="transition hover:text-brand-ink" href="/services/">Services</a>
          <a className="transition hover:text-brand-ink" href="/prices/">Prix</a>
          <a className="transition hover:text-brand-ink" href="/#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/client/" className="hidden rounded-full border border-brand-ink/12 bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink md:inline-flex">
            Connexion
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5">
            Inscription
          </a>
        </div>
      </div>
    </header>
  );
}
