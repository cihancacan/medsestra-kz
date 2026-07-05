import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { ServicesClient } from '@/components/ServicesClient';

export const metadata: Metadata = {
  title: 'Услуги медсестры на дом в Алматы | Medsestra.kz',
  description: 'Все услуги Medsestra.kz в Алматы: медсестра на дом, уколы, капельницы, перевязки, снятие швов, семейный и корпоративный уход. Запись через WhatsApp, поддержка RU/KZ/EN.',
  keywords: [
    'услуги медсестры Алматы', 'медсестра на дом Алматы', 'уколы на дому Алматы', 'капельница на дому Алматы', 'перевязка на дому Алматы', 'снятие швов на дому Алматы',
    'үйге медбике Алматы', 'үйде укол салу Алматы', 'home nurse Almaty', 'nursing services Almaty'
  ],
  alternates: { canonical: '/services/' },
  openGraph: {
    title: 'Услуги медсестры на дом в Алматы | Medsestra.kz',
    description: 'Выберите услугу: медсестра на дом, уколы, капельницы, перевязки, семейный уход и корпоративная поддержка для компаний.',
    url: '/services/',
    siteName: 'Medsestra.kz',
    locale: 'ru_KZ',
    alternateLocale: ['kk_KZ', 'en_US'],
    type: 'website'
  }
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <ServicesClient />
    </main>
  );
}
