import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { ContactClient } from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Записаться к медсестре на дом в Алматы | Medsestra.kz',
  description: 'Свяжитесь с Medsestra.kz: вызов медсестры на дом, уколы, капельницы, перевязки, семейный уход и корпоративные заявки в Алматы. Быстрая запись через WhatsApp, RU/KZ/EN.',
  keywords: [
    'записаться медсестра Алматы', 'вызвать медсестру Алматы WhatsApp', 'контакты Medsestra.kz', 'медсестра на дом телефон Алматы',
    'үйге медбике байланыс Алматы', 'book nurse at home Almaty', 'Medsestra contact Almaty'
  ],
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Записаться к медсестре на дом в Алматы | Medsestra.kz',
    description: 'Оставьте заявку на визит медсестры домой или в офис. WhatsApp, телефон и email для пациентов, семей и компаний.',
    url: '/contact/',
    siteName: 'Medsestra.kz',
    locale: 'ru_KZ',
    alternateLocale: ['kk_KZ', 'en_US'],
    type: 'website'
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#071827]">
      <Header />
      <ContactClient />
    </main>
  );
}
