'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { useTranslation } from '@/context/LanguageContext';

export default function PaperToDigitalSection() {
  const { t } = useTranslation();
  const d = t.digital;

  return (
    <section id="papier-vers-digital" className="bg-background px-4 py-20 sm:px-6 lg:px-10" aria-labelledby="digital-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading id="digital-title" title={d.title} sub={d.sub} align="center" />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[2.5rem] border border-border bg-card p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <Icon name="DocumentDuplicateIcon" size={26} />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{d.beforeTitle}</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {d.before.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-destructive">
                      <Icon name="XMarkIcon" size={14} />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-[2.5rem] bg-primary p-8 text-primary-foreground sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon name="DevicePhoneMobileIcon" size={26} />
                </span>
                <h3 className="text-xl font-semibold">{d.afterTitle}</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {d.after.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] font-medium">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon name="CheckIcon" size={14} />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <ul className="flex flex-wrap justify-center gap-3">
              {d.benefits.map((b) => (
                <li key={b} className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-primary">{b}</li>
              ))}
            </ul>
            <p className="max-w-xl text-sm text-muted-foreground">{d.note}</p>
            <Link
              href="/contact?demande=demo"
              className="inline-flex min-h-[52px] items-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
            >
              {d.cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
