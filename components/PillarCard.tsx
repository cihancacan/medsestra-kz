import type { pillars } from '@/lib/content';

type Pillar = (typeof pillars)[number];

export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <a href={pillar.href} className="group overflow-hidden rounded-[2rem] bg-white shadow-premium transition hover:-translate-y-1">
      <picture>
        <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
        <img src={pillar.image.desktop} alt={pillar.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
      </picture>
      <div className="p-7">
        <h3 className="text-2xl font-semibold text-brand-navy">{pillar.title}</h3>
        <p className="mt-2 text-lg font-medium text-brand-blue">{pillar.ru}</p>
        <p className="text-sm text-brand-navy/50">{pillar.translit}</p>
        <p className="mt-4 leading-7 text-brand-navy/70">{pillar.text}</p>
      </div>
    </a>
  );
}
