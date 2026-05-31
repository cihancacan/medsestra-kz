'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/content';

const menuItems = [
  { label: 'À propos', href: '/#about', hint: 'Le concept Medsestra.kz' },
  { label: 'Services', href: '/services/', hint: 'Soins à domicile, famille, entreprise' },
  { label: 'Prix', href: '/prices/', hint: 'Tarifs de départ' },
  { label: 'Contact', href: '/contact/', hint: 'Réservation, WhatsApp, téléphone' }
];

const languages = [
  { code: 'RU', label: 'Русский' },
  { code: 'KZ', label: 'Қазақша' },
  { code: 'EN', label: 'English' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener('mousedown', handlePointerDown);
      document.addEventListener('touchstart', handlePointerDown);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E2EEF4] bg-white/92 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071827] text-sm font-black text-white shadow-lg">M</span>
          <span className="leading-tight">
            <span className="block text-xl font-black tracking-[-0.04em] text-[#071827]">Medsestra.kz</span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#071827]/42 md:block">Nurse care in Kazakhstan</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-[#071827]/68 lg:flex">
          {menuItems.map((item) => (
            <a key={item.href} className="transition hover:text-[#071827]" href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="group relative">
            <button type="button" className="flex items-center gap-2 rounded-full bg-[#F5FBFE] px-4 py-2.5 text-sm font-black text-[#071827] ring-1 ring-[#D7EEF7]">
              <span aria-hidden="true">🌐</span>
              <span>RU</span>
              <span className="text-[#071827]/35">KZ</span>
              <span className="text-[#071827]/35">EN</span>
            </button>
            <div className="pointer-events-none absolute right-0 top-12 w-48 translate-y-1 rounded-2xl bg-white p-2 opacity-0 shadow-2xl ring-1 ring-[#DDE8EE] transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {languages.map((language) => (
                <div key={language.code} className="rounded-xl px-3 py-2 text-sm font-bold text-[#071827]">
                  <span className="mr-2 text-[#1677A8]">{language.code}</span>{language.label}
                </div>
              ))}
            </div>
          </div>
          <a href="/client/" className="rounded-full bg-[#071827] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">
            Accès client
          </a>
        </div>

        <div className="relative md:hidden" ref={menuRef}>
          <button
            type="button"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071827] text-white shadow-lg"
          >
            <span className="space-y-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-white transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-white transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>

          {isOpen && (
            <>
              <button
                type="button"
                aria-label="Fermer le menu"
                className="fixed inset-0 z-40 cursor-default bg-[#071827]/10 backdrop-blur-[1px]"
                onClick={() => setIsOpen(false)}
              />

              <div className="fixed inset-x-4 top-24 z-50 max-h-[calc(100svh-7rem)] overflow-y-auto rounded-[2rem] border border-[#D7EEF7] bg-white shadow-2xl ring-1 ring-[#EAF6FB]">
                <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-gradient-to-br from-[#EAF6FB] via-white to-white p-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#1677A8]">Menu</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#071827]">Medsestra.kz</h3>
                    <p className="mt-1 text-sm font-semibold text-[#071827]/52">Nurse care in Kazakhstan</p>
                  </div>

                  <button
                    type="button"
                    aria-label="Fermer le menu"
                    onClick={() => setIsOpen(false)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-black leading-none text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]"
                  >
                    ×
                  </button>
                </div>

                <div className="mx-3 mt-3 rounded-[1.35rem] bg-[#071827] p-4 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#23A6D5]">🌐 Langues</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <span key={language.code} className="rounded-full bg-white/10 px-3 py-2 text-xs font-black ring-1 ring-white/10">{language.code} · {language.label}</span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2 p-3 text-[#071827]">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      className="flex items-center justify-between rounded-[1.35rem] bg-[#F5FBFE] px-4 py-3.5 ring-1 ring-[#E2EEF4]"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>
                        <span className="block text-base font-black">{item.label}</span>
                        <span className="mt-0.5 block text-xs font-semibold text-[#071827]/45">{item.hint}</span>
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-[#1677A8] shadow-sm">→</span>
                    </a>
                  ))}
                </div>

                <div className="grid gap-2 border-t border-[#E2EEF4] bg-white p-3">
                  <a
                    className="rounded-[1.35rem] bg-[#071827] px-4 py-4 text-center text-sm font-black text-white shadow-lg"
                    href="/client/"
                    onClick={() => setIsOpen(false)}
                  >
                    Accès client
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      className="rounded-[1.25rem] bg-[#EAF6FB] px-3 py-3 text-center text-sm font-black text-[#1677A8]"
                      href={`https://wa.me/${site.whatsapp}`}
                      onClick={() => setIsOpen(false)}
                    >
                      WhatsApp
                    </a>
                    <a
                      className="rounded-[1.25rem] bg-[#F5FBFE] px-3 py-3 text-center text-sm font-black text-[#071827]"
                      href={site.phoneHref}
                      onClick={() => setIsOpen(false)}
                    >
                      Appeler
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
