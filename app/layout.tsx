import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Medsestra.kz — медицинская и wellness-консьерж-служба на дому в Алматы',
  description: 'Medsestra.kz — réservation de services d’infirmières à domicile, Family Care, Corporate Care et Beauty & Wellness IV à Almaty.',
  metadataBase: new URL('https://medsestra.kz'),
  openGraph: {
    title: 'Medsestra.kz',
    description: 'Premium home nursing, family care, corporate care and Beauty & Wellness IV in Almaty.',
    url: 'https://medsestra.kz',
    siteName: 'Medsestra.kz',
    images: ['/images/Home.jpg'],
    locale: 'ru_KZ',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
