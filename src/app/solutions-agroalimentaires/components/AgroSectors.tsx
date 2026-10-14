'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { agroImages, sectorToContactId } from '@/config/agro-images';
import { useTranslation } from '@/context/LanguageContext';

export default function AgroSectors() {
  const { t } = useTranslation();

  return (
    <div className="bg-background px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-16">
        {t.agro.sectors.map((s, i) => {
          const img = agroImages[s.id];
          const reversed = i % 2 === 1;
          const contactId = sectorToContactId[s.id];
          return (
            <section key={s.id} id={s.id} className="scroll-mt-24" aria-labelledby={`${s.id}-title`}>
              <Reveal>
                <div className="grid items-stretch gap-6 lg:grid-cols-2">
                  <div className={`relative min-h-[280px] overflow-hidden rounded-[2.5rem] ${reversed ? 'lg:order-2' : ''}`}>
                    <AppImage src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <span className="absolute start-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-background/90 text-primary shadow-lg">
                      <Icon name={img.icon} size={26} />
                    </span>
                  </div>
                  <div className="flex flex-col justify-between rounded-[2.5rem] bg-secondary p-8 sm:p-10">
                    <div>
                      <h2 id={`${s.id}-title`} className="text-2xl font-semibold text-primary sm:text-3xl">{s.t}</h2>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
                      <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-success">{t.agro.benefits}</h3>
                      <ul className="mt-3 space-y-3">
                        {s.b.map((b) => (
                          <li key={b} className="flex items-center gap-3 text-[15px] font-medium text-foreground">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                              <Icon name="CheckIcon" size={16} />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/contact?demande=demo&secteur=${contactId}`}
                        className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
                      >
                        {t.agro.discover}
                      </Link>
                      <Link
                        href={`/contact?demande=devis&secteur=${contactId}`}
                        className="inline-flex min-h-[48px] items-center rounded-full border border-primary px-6 text-sm font-semibold text-primary hover:bg-card"
                      >
                        {t.agro.quote}
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>
          );
        })}
        <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">{t.agro.scope}</p>
      </div>
    </div>
  );
}
