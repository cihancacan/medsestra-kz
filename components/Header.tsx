import { site } from '@/lib/content';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/82 px-5 py-3 shadow-premium backdrop-blur-2xl">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink text-sm font-semibold text-white">M</span>
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-brand-ink">Medsestra.kz</span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-brand-ink/45 md:block">Private medical concierge</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-ink/70 md:flex">
          <a className="transition hover:text-brand-ink" href="/services/">Услуги</a>
          <a className="transition hover:text-brand-ink" href="/prices/">Цены</a>
          <a className="transition hover:text-brand-ink" href="/client/">Кабинет</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-brand-ink/10 bg-white px-3 py-2 text-xs font-semibold text-brand-ink/70 md:block">RU · KZ · EN</div>
          <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
