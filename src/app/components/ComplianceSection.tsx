'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { useTranslation } from '@/context/LanguageContext';

const pillarIcons = ['ClipboardDocumentListIcon', 'BookOpenIcon', 'MagnifyingGlassCircleIcon'];

export default function ComplianceSection() {
  const { t } = useTranslation();
  const c = t.compliance;

  return (
    <section id="conformite-onssa" className="bg-background px-4 py-16 sm:px-6 lg:px-10" aria-labelledby="compliance-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading id="compliance-title" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {c.pillars.map((p, i) => (
            <li key={p.t}>
              <Reveal delay={i * 80} className="h-full">
                <article className="h-full rounded-[2rem] border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon name={pillarIcons[i]} size={26} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{p.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-primary lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 text-primary-foreground sm:p-12">
              <h3 className="text-2xl font-semibold sm:text-3xl">{c.onssaTitle}</h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed opacity-90">{c.onssaText}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.onssaPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[15px] font-medium">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon name="CheckIcon" size={14} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?demande=demo"
                className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
              >
                {c.cta}
              </Link>
            </div>
            <div className="flex items-start gap-4 bg-secondary p-8 sm:p-12 lg:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon name="ShieldExclamationIcon" size={24} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{c.disclaimerTitle}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground">{c.disclaimer}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
