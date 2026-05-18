export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="text-xl font-semibold tracking-tight text-brand-navy">Medsestra.kz</a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-brand-navy/75 md:flex">
          <a href="/services/">Services</a>
          <a href="/prices/">Prix</a>
          <a href="/client/">Espace client</a>
          <a href="/admin/">Admin</a>
        </nav>
        <a href="https://wa.me/77000000000" className="rounded-full bg-brand-navy px-5 py-2 text-sm font-semibold text-white shadow-premium">
          WhatsApp
        </a>
      </div>
    </header>
  );
}
