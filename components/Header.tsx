import { site } from '@/lib/content';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="text-xl font-semibold tracking-tight text-brand-navy">Medsestra.kz</a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-brand-navy/75 md:flex">
          <a href="/services/">Услуги</a>
          <a href="/prices/">Цены</a>
          <a href="/client/">Личный кабинет</a>
          <a href="/admin/">Admin</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden rounded-full bg-brand-soft px-3 py-2 text-xs font-semibold text-brand-navy md:block">RU | KZ | EN</div>
          <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full bg-brand-navy px-5 py-2 text-sm font-semibold text-white shadow-premium">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
