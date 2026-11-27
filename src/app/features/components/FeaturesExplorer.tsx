'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';
import { featureIcons, featureImages, defaultFeatureImage } from '@/config/features';

export default function FeaturesExplorer() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const current = t.features.items[active];
  const img = featureImages[current.id] ?? defaultFeatureImage;

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-10 max-w-3xl rounded-2xl border border-border bg-card p-5 text-[15px] text-muted-foreground">
            {t.features.sub}
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ul className="grid gap-3" aria-label={t.features.title}>
            {t.features.items.map((f, i) => {
              const isActive = i === active;
              return (
                <li key={f.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex min-h-[64px] w-full items-center gap-4 rounded-2xl border p-4 text-start transition-all ${
                    isActive ?
                    'border-primary bg-primary text-primary-foreground shadow-lg' :
                    'border-border bg-card text-foreground hover:border-accent'}`
                    }>
                    
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? 'bg-accent text-accent-foreground' : 'bg-secondary text-primary'}`
                      }>
                      
                      <Icon name={featureIcons[f.id] ?? 'Squares2X2Icon'} size={22} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-base font-semibold">{f.t}</span>
                      <span
                        className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        f.s === 'available' ? 'bg-success text-success-foreground' : 'bg-warning text-warning-foreground'}`
                        }>
                        
                        {f.s === 'available' ? t.features.available : t.features.planned}
                      </span>
                    </span>
                  </button>
                </li>);

            })}
          </ul>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-xl">
              <div className="relative h-64 w-full sm:h-80">
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" />
                
              </div>
              <div className="p-8">
                <h2 className="font-serif-accent text-3xl font-medium text-primary">{current.t}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{current.d}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-foreground">
                  {t.features.benefits}
                </p>
                <ul className="mt-3 space-y-2">
                  {current.b.map((b) =>
                  <li key={b} className="flex items-center gap-3 text-[15px] text-foreground">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Icon name="CheckIcon" size={14} />
                      </span>
                      {b}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}