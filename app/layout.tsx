import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Medsestra.kz — медсестра на дом в Алматы',
  description: 'Medsestra.kz — медсестра на дом в Алматы: уколы, капельницы, перевязки, снятие швов, семейный уход, корпоративный уход и восстановительные процедуры.',
  metadataBase: new URL('https://medsestra.kz'),
  icons: {
    icon: '/images/favicon.jpg',
    shortcut: '/images/favicon.jpg',
    apple: '/images/favicon.jpg'
  },
  openGraph: {
    title: 'Medsestra.kz',
    description: 'Медсестра на дом, семейный уход, корпоративный уход и восстановительные процедуры в Алматы.',
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
