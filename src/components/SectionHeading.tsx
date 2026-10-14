import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  id?: string;
  align?: 'start' | 'center';
  tone?: 'default' | 'inverse';
}

export default function SectionHeading({ eyebrow, title, sub, id, align = 'start', tone = 'default' }: SectionHeadingProps) {
  const inverse = tone === 'inverse';
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${inverse ? 'text-accent' : 'text-success'}`}>{eyebrow}</p>
      )}
      <h2 id={id} className={`text-section-xl font-semibold ${inverse ? 'text-primary-foreground' : 'text-primary'}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${inverse ? 'text-primary-foreground opacity-85' : 'text-muted-foreground'}`}>{sub}</p>}
    </div>
  );
}
