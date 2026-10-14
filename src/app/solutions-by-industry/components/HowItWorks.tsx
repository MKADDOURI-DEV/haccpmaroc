'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

export default function HowItWorks() {
  const { t } = useTranslation();
  const icons = ['Cog6ToothIcon', 'PencilSquareIcon', 'PresentationChartLineIcon'];

  return (
    <section className="bg-background px-4 pb-12 pt-4 sm:px-6 lg:px-10" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <h2 id="how-title" className="text-section-xl font-semibold text-primary">{t?.how?.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t?.how?.sub}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t?.how?.steps?.map((s, i) => (
            <Reveal key={s?.t} delay={i * 110}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon name={icons?.[i]} size={24} />
                </span>
                <h3 className="mt-5 font-serif-accent text-2xl font-medium text-primary">{s?.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground">{s?.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}