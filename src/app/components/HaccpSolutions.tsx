'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import StatusChip from '@/components/StatusChip';
import { useTranslation } from '@/context/LanguageContext';

const ids = ['temp', 'clean', 'check', 'docs', 'reports'];
const iconMap: Record<string, string> = {
  temp: 'BeakerIcon',
  clean: 'SparklesIcon',
  check: 'ClipboardDocumentCheckIcon',
  docs: 'DocumentTextIcon',
  reports: 'ChartBarIcon',
};

export default function HaccpSolutions() {
  const { t } = useTranslation();
  const items = ids.map((id) => t.features.items.find((i) => i.id === id)).filter(Boolean) as typeof t.features.items;

  return (
    <section id="solutions-haccp" className="bg-background px-4 pt-20 pb-6 sm:px-6 lg:px-10" aria-labelledby="haccp-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading id="haccp-title" eyebrow={t.haccpHome.eyebrow} title={t.haccpHome.title} sub={t.haccpHome.sub} />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.id}>
              <Reveal delay={i * 70} className="h-full">
                <article className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-7 transition-shadow hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon name={iconMap[item.id]} size={26} />
                    </span>
                    <StatusChip featureId={item.id} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{item.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.d}</p>
                </article>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={ids.length * 70} className="h-full">
              <Link
                href="/features"
                className="group flex h-full min-h-[200px] flex-col justify-between rounded-[2rem] bg-primary p-7 text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Icon name="Squares2X2Icon" size={28} className="text-accent" />
                <span className="mt-6 inline-flex items-center gap-2 text-lg font-semibold">
                  {t.haccpHome.link}
                  <Icon name="ArrowRightIcon" size={20} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
