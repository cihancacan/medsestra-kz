import { site } from '@/lib/content';

const menuItems = [
  { label: 'À propos', href: '/#about' },
  { label: 'Services', href: '/services/' },
  { label: 'Prix', href: '/prices/' },
  { label: 'Contact', href: '/#contact' }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E2EEF4] bg-white/92 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071827] text-sm font-black text-white shadow-lg">M</span>
          <span className="leading-tight">
            <span className="block text-xl font-black tracking-[-0.04em] text-[#071827]">Medsestra.kz</span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#071827]/42 md:block">Nurse care in Almaty</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-[#071827]/68 lg:flex">
          {menuItems.map((item) => (
            <a key={item.href} className="transition hover:text-[#071827]" href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="/client/" className="rounded-full bg-[#071827] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">
            Accès client
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary aria-label="Menu" className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-2xl bg-[#071827] text-white shadow-lg [&::-webkit-details-marker]:hidden">
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="block h-0.5 w-5 rounded-full bg-white transition group-open:opacity-0" />
              <span className="block h-0.5 w-5 rounded-full bg-white transition group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-[1.5rem] border border-[#E2EEF4] bg-white p-3 shadow-2xl">
            <div className="grid gap-2 text-sm font-bold text-[#071827]">
              {menuItems.map((item) => (
                <a key={item.href} className="rounded-2xl bg-[#F5FBFE] px-4 py-3" href={item.href}>{item.label}</a>
              ))}
              <a className="rounded-2xl bg-[#071827] px-4 py-3 text-white" href="/client/">Accès client</a>
              <a className="rounded-2xl bg-[#EAF6FB] px-4 py-3 text-[#1677A8]" href={`https://wa.me/${site.whatsapp}`}>WhatsApp</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
