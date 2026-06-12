'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/content';

type Lang = 'RU' | 'KZ' | 'EN';

const menus = {
  RU: [
    { label: 'О нас', href: '/#about', hint: 'Кто мы и как работаем' },
    { label: 'Услуги', href: '/services/', hint: 'Медсестра на дом, уход, капельницы' },
    { label: 'Корпоративно', href: '/corporate/', hint: 'Для компаний, кадров и команд' },
    { label: 'Цены', href: '/prices/', hint: 'Стартовые тарифы' },
    { label: 'Контакты', href: '/contact/', hint: 'Запись, WhatsApp, телефон' }
  ],
  KZ: [
    { label: 'Біз туралы', href: '/#about', hint: 'Қалай жұмыс істейміз' },
    { label: 'Қызметтер', href: '/services/', hint: 'Үйге медбике, күтім, тамшылату' },
    { label: 'Компанияларға', href: '/corporate/', hint: 'Компаниялар, кадрлар және командалар үшін' },
    { label: 'Бағалар', href: '/prices/', hint: 'Бастапқы тарифтер' },
    { label: 'Байланыс', href: '/contact/', hint: 'Жазылу, WhatsApp, телефон' }
  ],
  EN: [
    { label: 'About', href: '/#about', hint: 'Who we are and how we work' },
    { label: 'Services', href: '/services/', hint: 'Nurse at home, care, IV drips' },
    { label: 'Corporate', href: '/corporate/', hint: 'For companies, executives and teams' },
    { label: 'Prices', href: '/prices/', hint: 'Starting prices' },
    { label: 'Contact', href: '/contact/', hint: 'Booking, WhatsApp, phone' }
  ]
};

const languages: Array<{ code: Lang; label: string }> = [
  { code: 'RU', label: 'Русский' },
  { code: 'KZ', label: 'Қазақша' },
  { code: 'EN', label: 'English' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Lang>('RU');
  const menuRef = useRef<HTMLDivElement | null>(null);
  const langRef = useRef<HTMLDivElement | null>(null);
  const menuItems = menus[currentLang];
  const bookLabel = currentLang === 'RU' ? 'Записаться' : currentLang === 'KZ' ? 'Жазылу' : 'Book';
  const callLabel = currentLang === 'RU' ? 'Позвонить' : currentLang === 'KZ' ? 'Қоңырау' : 'Call';
  const subtitle = currentLang === 'RU' ? 'Медсестра на дом' : currentLang === 'KZ' ? 'Үйге медбике' : 'Nurse care at home';
  const menuTitle = currentLang === 'RU' ? 'Меню' : currentLang === 'KZ' ? 'Мәзір' : 'Menu';

  useEffect(() => {
    const saved = window.localStorage.getItem('medsestra_lang') as Lang | null;
    if (saved === 'RU' || saved === 'KZ' || saved === 'EN') setCurrentLang(saved);
    function handleLanguage(event: Event) { const next = (event as CustomEvent<Lang>).detail; if (next === 'RU' || next === 'KZ' || next === 'EN') setCurrentLang(next); }
    function handlePointerDown(event: MouseEvent | TouchEvent) { const target = event.target as Node; if (menuRef.current && !menuRef.current.contains(target)) setIsOpen(false); if (langRef.current && !langRef.current.contains(target)) setIsLangOpen(false); }
    function handleEscape(event: KeyboardEvent) { if (event.key === 'Escape') { setIsOpen(false); setIsLangOpen(false); } }
    window.addEventListener('medsestra-language-change', handleLanguage);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => { window.removeEventListener('medsestra-language-change', handleLanguage); document.removeEventListener('mousedown', handlePointerDown); document.removeEventListener('touchstart', handlePointerDown); document.removeEventListener('keydown', handleEscape); };
  }, []);

  function selectLanguage(language: Lang) {
    setCurrentLang(language); setIsLangOpen(false); window.localStorage.setItem('medsestra_lang', language); window.dispatchEvent(new CustomEvent('medsestra-language-change', { detail: language }));
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E2EEF4] bg-white/92 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#D7EEF7]"><img src="/images/favicon.jpg" alt="Medsestra.kz" className="h-full w-full object-cover" /></span>
          <span className="leading-tight"><span className="block text-xl font-black tracking-[-0.04em] text-[#071827]">Medsestra.kz</span><span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#071827]/42 md:block">{subtitle}</span></span>
        </a>
        <nav className="hidden items-center gap-5 text-sm font-bold text-[#071827]/68 lg:flex">{menuItems.map((item) => <a key={item.href} className="transition hover:text-[#071827]" href={item.href}>{item.label}</a>)}</nav>
        <div className="flex items-center gap-2"><div className="relative" ref={langRef}><button type="button" aria-label="Select language" aria-expanded={isLangOpen} onClick={() => setIsLangOpen((value) => !value)} className="flex h-11 items-center gap-1.5 rounded-2xl bg-[#F5FBFE] px-3 text-sm font-black text-[#071827] shadow-sm ring-1 ring-[#D7EEF7]"><span aria-hidden="true">🌐</span><span>{currentLang}</span></button>{isLangOpen && <div className="absolute right-0 top-12 z-50 mt-2 w-28 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-[#DDE8EE]">{languages.map((language) => <button key={language.code} type="button" onClick={() => selectLanguage(language.code)} className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-black text-[#071827] hover:bg-[#F5FBFE]" title={language.label}><span>{language.code}</span><span className="text-[#1677A8]">→</span></button>)}</div>}</div><a href="/contact/" className="hidden rounded-full bg-[#071827] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 md:block">{bookLabel}</a><div className="relative md:hidden" ref={menuRef}><button type="button" aria-label="Menu" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071827] text-white shadow-lg"><span className="space-y-1.5"><span className={`block h-0.5 w-5 rounded-full bg-white transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} /><span className={`block h-0.5 w-5 rounded-full bg-white transition ${isOpen ? 'opacity-0' : ''}`} /><span className={`block h-0.5 w-5 rounded-full bg-white transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} /></span></button>{isOpen && <><button type="button" aria-label="Close menu" className="fixed inset-0 z-40 cursor-default bg-[#071827]/10 backdrop-blur-[1px]" onClick={() => setIsOpen(false)} /><div className="fixed inset-x-4 top-24 z-50 max-h-[calc(100svh-7rem)] overflow-y-auto rounded-[2rem] border border-[#D7EEF7] bg-white shadow-2xl ring-1 ring-[#EAF6FB]"><div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-gradient-to-br from-[#EAF6FB] via-white to-white p-5"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#1677A8]">{menuTitle}</p><h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#071827]">Medsestra.kz</h3><p className="mt-1 text-sm font-semibold text-[#071827]/52">{subtitle}</p></div><button type="button" aria-label="Close menu" onClick={() => setIsOpen(false)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-black leading-none text-[#071827] shadow-sm ring-1 ring-[#DDE8EE]">×</button></div><div className="grid gap-2 p-3 text-[#071827]">{menuItems.map((item) => <a key={item.href} className="flex items-center justify-between rounded-[1.35rem] bg-[#F5FBFE] px-4 py-3.5 ring-1 ring-[#E2EEF4]" href={item.href} onClick={() => setIsOpen(false)}><span><span className="block text-base font-black">{item.label}</span><span className="mt-0.5 block text-xs font-semibold text-[#071827]/45">{item.hint}</span></span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-[#1677A8] shadow-sm">→</span></a>)}</div><div className="grid gap-2 border-t border-[#E2EEF4] bg-white p-3"><a className="rounded-[1.35rem] bg-[#071827] px-4 py-4 text-center text-sm font-black text-white shadow-lg" href="/contact/" onClick={() => setIsOpen(false)}>{bookLabel}</a><div className="grid grid-cols-2 gap-2"><a className="rounded-[1.25rem] bg-[#EAF6FB] px-3 py-3 text-center text-sm font-black text-[#1677A8]" href={`https://wa.me/${site.whatsapp}`} onClick={() => setIsOpen(false)}>WhatsApp</a><a className="rounded-[1.25rem] bg-[#F5FBFE] px-3 py-3 text-center text-sm font-black text-[#071827]" href={site.phoneHref} onClick={() => setIsOpen(false)}>{callLabel}</a></div></div></div></>}</div></div>
      </div>
    </header>
  );
}
