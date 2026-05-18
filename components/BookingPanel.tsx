import { site } from '@/lib/content';

const serviceOptions = ['Медсестра на дом', 'Family Care', 'Corporate Care', 'Beauty & Wellness IV'];

export function BookingPanel() {
  return (
    <div className="glass-card rounded-[2rem] p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">Быстрая заявка</p>
          <h3 className="mt-2 text-2xl font-semibold text-brand-navy">Что вам нужно?</h3>
          <p className="mt-1 text-sm text-brand-navy/50">Chto vam nuzhno?</p>
        </div>
        <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-white">Алматы</span>
      </div>
      <div className="mt-5 grid gap-2">
        {serviceOptions.map((item) => (
          <a key={item} href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Здравствуйте, хочу записаться: ${item}`)}`} className="group flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-brand-soft">
            {item}
            <span className="text-brand-blue transition group-hover:translate-x-1">→</span>
          </a>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-brand-navy/10 bg-brand-soft/70 p-4">
        <p className="text-sm font-semibold text-brand-navy">Минимум данных на старте</p>
        <p className="mt-1 text-sm leading-6 text-brand-navy/65">Контакт, район, услуга и время. Без хранения чувствительных медицинских данных в первой версии.</p>
      </div>
    </div>
  );
}
