import { site } from '@/lib/content';

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
          <a className="transition hover:text-[#071827]" href="/#about">À propos</a>
          <a className="transition hover:text-[#071827]" href="/services/">Services</a>
          <a className="transition hover:text-[#071827]" href="/prices/">Prix</a>
          <a className="transition hover:text-[#071827]" href="/#contact">Contact</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="/client/" className="rounded-full border border-[#DDE8EE] bg-white px-4 py-2.5 text-sm font-bold text-[#071827]">
            Connexion
          </a>
          <a href="/client/" className="rounded-full bg-[#071827] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">
            Accès client
          </a>
        </div>

        <button aria-label="Open menu" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071827] text-white shadow-lg md:hidden">
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
          </span>
        </button>
      </div>

      <div className="border-t border-[#E2EEF4] bg-white px-5 py-3 md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 text-sm font-bold text-[#071827]">
          <a className="rounded-2xl bg-[#F5FBFE] px-4 py-3" href="/#about">À propos</a>
          <a className="rounded-2xl bg-[#F5FBFE] px-4 py-3" href="/services/">Services</a>
          <a className="rounded-2xl bg-[#F5FBFE] px-4 py-3" href="/prices/">Prix</a>
          <a className="rounded-2xl bg-[#F5FBFE] px-4 py-3" href="/#contact">Contact</a>
          <a className="rounded-2xl bg-[#F5FBFE] px-4 py-3" href="/client/">Connexion</a>
          <a className="rounded-2xl bg-[#071827] px-4 py-3 text-white" href="/client/">Accès client</a>
        </div>
      </div>
    </header>
  );
}
