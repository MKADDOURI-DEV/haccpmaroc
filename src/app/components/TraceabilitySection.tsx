'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import StatusChip from '@/components/StatusChip';
import { useTranslation } from '@/context/LanguageContext';

const icons = ['CubeIcon', 'QrCodeIcon', 'TruckIcon', 'ClockIcon', 'MagnifyingGlassIcon', 'ArrowPathRoundedSquareIcon'];

export default function TraceabilitySection() {
  const { t } = useTranslation();
  const tr = t.trace;

  return (
    <section id="tracabilite" className="bg-secondary px-4 py-20 sm:px-6 lg:px-10" aria-labelledby="trace-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading id="trace-title" eyebrow={tr.eyebrow} title={tr.title} sub={tr.sub} />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tr.items.map((item, i) => (
            <li key={item.t}>
              <Reveal delay={i * 60} className="h-full">
                <article className="flex h-full flex-col rounded-[2rem] bg-card p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon name={icons[i]} size={24} />
                    </span>
                    <StatusChip featureId={item.ref} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{item.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.d}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[15px] text-muted-foreground">{tr.note}</p>
            <Link
              href="/contact?demande=demo"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              {tr.cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
