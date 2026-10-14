'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

export default function WorkflowSection() {
  const { t } = useTranslation();

  const visuals = [
    <div key="setup" className="w-full space-y-2 rounded-3xl bg-card p-5">
      {['Cuisine principale', 'Pâtisserie', 'Stockage']?.map((z, i) => (
        <div key={z} className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
          <span className="text-sm font-medium text-foreground">{z}</span>
          <span className="text-xs font-semibold text-muted-foreground">{i + 3} éq.</span>
        </div>
      ))}
    </div>,
    <div key="record" className="w-full rounded-3xl bg-card p-5">
      <div className="flex items-end justify-between gap-2">
        {[40, 62, 48, 70, 55, 66]?.map((h, i) => (
          <div key={i} className="w-full rounded-t-lg bg-accent" style={{ height: `${h}px` }} />
        ))}
      </div>
      <p className="mt-4 text-center text-xs font-semibold text-muted-foreground">Relevés de la semaine</p>
    </div>,
    <div key="review" className="w-full space-y-2 rounded-3xl bg-card p-5">
      {[
        { l: 'Écart vitrine', s: 'En cours', c: 'bg-warning' },
        { l: 'Nettoyage plonge', s: 'Clôturé', c: 'bg-success' },
      ]?.map((r) => (
        <div key={r?.l} className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
          <span className="text-sm font-medium text-foreground">{r?.l}</span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-foreground">
            <span className={`h-2.5 w-2.5 rounded-full ${r?.c}`} />
            {r?.s}
          </span>
        </div>
      ))}
    </div>,
  ];

  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-section-xl font-semibold text-primary">{t?.workflow?.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t?.workflow?.sub}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t?.workflow?.steps?.map((s, i) => (
            <Reveal key={s?.t} delay={i * 120}>
              <div className="flex h-full flex-col items-center rounded-[2.5rem] bg-secondary p-8 text-center">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon name={['Cog6ToothIcon', 'ClipboardDocumentCheckIcon', 'ChartBarIcon']?.[i]} size={24} />
                </div>
                <h3 className="font-serif-accent text-2xl font-medium text-primary">{s?.t}</h3>
                <p className="mb-8 mt-3 text-[15px] text-muted-foreground">{s?.d}</p>
                {visuals?.[i]}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <a
              href="/contact"
              className="inline-flex min-h-[52px] items-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              {t?.hero?.primary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}