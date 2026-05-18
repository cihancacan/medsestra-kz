import type { pillars } from '@/lib/content';

type Pillar = (typeof pillars)[number];

export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <a href={pillar.href} className="group overflow-hidden rounded-[2rem] bg-white shadow-premium transition hover:-translate-y-1">
      <picture>
        <source media="(max-width: 768px)" srcSet={pillar.image.mobile} />
        <img src={pillar.image.desktop} alt={pillar.eyebrow} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
      </picture>
      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">{pillar.title}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-navy">{pillar.eyebrow}</h3>
        <p className="mt-1 text-sm text-brand-navy/50">{pillar.translit}</p>
        <p className="mt-4 leading-7 text-brand-navy/70">{pillar.text}</p>
        <ul className="mt-5 space-y-2 text-sm font-medium text-brand-navy/75">
          {pillar.bullets.slice(0, 3).map((bullet) => (
            <li key={bullet} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />{bullet}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
