import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { PricesClient } from '@/components/PricesClient';

export const metadata: Metadata = {
  title: 'Цены на медсестру на дом в Алматы | Medsestra.kz',
  description: 'Прозрачные цены Medsestra.kz: уколы, капельницы, перевязки, снятие швов, Family Care и корпоративные программы в Алматы. Уточните стоимость и запишитесь через WhatsApp.',
  keywords: [
    'цены медсестра на дом Алматы', 'стоимость укола на дому Алматы', 'капельница на дому цена Алматы', 'перевязка на дому цена', 'family care Алматы цена',
    'үйге медбике бағасы Алматы', 'home nurse price Almaty', 'nurse at home cost Almaty'
  ],
  alternates: { canonical: '/prices/' },
  openGraph: {
    title: 'Цены на медсестру на дом в Алматы | Medsestra.kz',
    description: 'Стартовые цены на услуги медсестры на дому, семейный уход и корпоративные программы. Запись через WhatsApp.',
    url: '/prices/',
    siteName: 'Medsestra.kz',
    locale: 'ru_KZ',
    alternateLocale: ['kk_KZ', 'en_US'],
    type: 'website'
  }
};

export default function PricesPage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <PricesClient />
    </main>
  );
}
