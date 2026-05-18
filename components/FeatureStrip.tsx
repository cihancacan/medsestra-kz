const features = [
  { value: '24/7', label: 'заявка через WhatsApp' },
  { value: '4.9/5', label: 'целевой уровень сервиса' },
  { value: '28 зон', label: 'Алматы и область' },
  { value: 'RU/KZ/EN', label: 'три языка сервиса' }
];

export function FeatureStrip() {
  return (
    <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-5">
      <div className="glass-card grid gap-4 rounded-[2rem] p-5 md:grid-cols-4 md:p-6">
        {features.map((feature) => (
          <div key={feature.value} className="rounded-[1.5rem] bg-white/70 p-5 text-center">
            <p className="text-3xl font-semibold text-brand-navy">{feature.value}</p>
            <p className="mt-1 text-sm text-brand-navy/60">{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
