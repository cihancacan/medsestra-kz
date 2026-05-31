import { Header } from '@/components/Header';
import { ContactClient } from '@/components/ContactClient';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#071827]">
      <Header />
      <ContactClient />
    </main>
  );
}
