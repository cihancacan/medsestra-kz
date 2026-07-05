import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { HomeClient } from '@/components/HomeClient';
import { site } from '@/lib/content';

const BASE_URL = 'https://medsestra-kz.vercel.app';

export const metadata: Metadata = {
  title: 'Medsestra.kz | Медсестра на дом в Алматы | Уколы, капельницы, уход',
  description: 'Medsestra.kz — медсестра на дом в Алматы: уколы, капельницы, перевязки, снятие швов, семейный уход, корпоративный уход, капельницы красоты и восстановительные процедуры. Проверенные медсёстры, контроль качества, запись через WhatsApp.',
  keywords: ['медсестра на дом Алматы', 'вызвать медсестру на дом Алматы', 'уколы на дому Алматы', 'капельница на дому Алматы', 'перевязка на дому Алматы', 'снятие швов на дому Алматы', 'уход за пожилыми Алматы', 'үйге медбике Алматы', 'nurse at home Almaty'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Medsestra.kz | Медсестра на дом в Алматы',
    description: 'Организованный выезд медсестры на дом: проверенные специалисты, понятная запись, контроль качества и поддержка пациента.',
    url: '/',
    siteName: 'Medsestra.kz',
    type: 'website'
  }
};

const faq = [
  { q: 'Как вызвать медсестру на дом в Алматы?', a: 'Напишите в WhatsApp или позвоните. Достаточно указать услугу, район, удобное время и имя для связи.' },
  { q: 'Кто приезжает к пациенту?', a: 'На визит приезжает выбранная медсестра. Мы проверяем документы, опыт, аккуратность и качество общения.' },
  { q: 'Это сервис объявлений?', a: 'Нет. Medsestra.kz — организованная компания медсестёр с отбором специалистов и контролем качества.' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Medsestra.kz',
  url: `${BASE_URL}/`,
  telephone: site.phone,
  email: site.email,
  areaServed: ['Almaty', 'Almaty Region'],
  medicalSpecialty: ['Nursing', 'HomeHealthCare'],
  availableLanguage: ['ru', 'kk', 'en'],
  description: 'Медсестра на дом в Алматы: уколы, капельницы, перевязки, снятие швов, семейный уход, корпоративный уход, капельницы красоты и восстановительные процедуры.'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
};

export default function HomePage() {
  return (
    <main className="bg-white text-[#071827]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomeClient />
    </main>
  );
}
