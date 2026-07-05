import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { CorporateClient } from '@/components/CorporateClient';

export const metadata: Metadata = {
  title: 'Корпоративная медсестра для компаний в Алматы | Medsestra.kz',
  description: 'Medsestra Corporate Care: медсестра на дом и в офис для руководителей, сотрудников, экспатов и семей. Премиальный корпоративный сервис в Алматы, программы на заказ, RU/KZ/EN.',
  keywords: [
    'корпоративная медсестра Алматы', 'медсестра в офис Алматы', 'корпоративная медицина Алматы', 'здоровье сотрудников Алматы', 'медсестра для руководителей',
    'компанияларға медбике Алматы', 'corporate nurse Almaty', 'employee wellbeing Kazakhstan', 'executive care Almaty'
  ],
  alternates: { canonical: '/corporate/' },
  openGraph: {
    title: 'Корпоративная медсестра для компаний в Алматы | Medsestra.kz',
    description: 'Премиальный корпоративный уход: визиты медсестры домой или в офис, поддержка руководителей, сотрудников и семей, программа на заказ для бизнеса.',
    url: '/corporate/',
    siteName: 'Medsestra.kz',
    locale: 'ru_KZ',
    alternateLocale: ['kk_KZ', 'en_US'],
    type: 'website'
  }
};

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-white text-[#071827]">
      <Header />
      <CorporateClient />
    </main>
  );
}
