import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { CorporateClient } from '@/components/CorporateClient';

export const metadata: Metadata = {
  title: 'Corporate Care for Executives & Teams | Medsestra.kz',
  description: 'Corporate medical support for executives, managers, employees and families in Kazakhstan. Private nurse visits at home or at the office, corporate health desk, family access and tailored B2B proposal.',
  alternates: { canonical: '/corporate/' },
  openGraph: {
    title: 'Corporate Care for Executives & Teams | Medsestra.kz',
    description: 'Premium corporate medical support for executives, teams and families: home nurse visits, office nurse visits and tailored corporate care programs.',
    url: '/corporate/',
    siteName: 'Medsestra.kz',
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
