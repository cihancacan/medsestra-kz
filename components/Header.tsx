import { site } from '@/lib/content';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-ink/8 bg-[#FBF8F4]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-ink text-sm font-semibold text-white shadow-premium">M</span>
          <span className="leading-tight">
            <span className="block text-xl font-semibold tracking-[-0.03em] text-brand-ink">Medsestra.kz</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink/42 md:block">Private nurse at home</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-brand-ink/68 lg:flex">
          <a className="transition hover:text-brand-ink" href="/services/">Услуги</a>
          <a className="transition hover:text-brand-ink" href="/prices/">Цены</a>
          <a className="transition hover:text-brand-ink" href="/#family">Family</a>
          <a className="transition hover:text-brand-ink" href="/#corporate">Corporate</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden rounded-full border border-brand-ink/12 bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink md:inline-flex">
            {site.phone}
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
