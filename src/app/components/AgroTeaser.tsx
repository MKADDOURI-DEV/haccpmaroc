'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { agroImages } from '@/config/agro-images';
import { useTranslation } from '@/context/LanguageContext';

export default function AgroTeaser() {
  const { t } = useTranslation();

  return (
    <section id="agroalimentaire" className="bg-secondary px-4 py-20 sm:px-6 lg:px-10" aria-labelledby="agro-home-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading id="agro-home-title" eyebrow={t.agroHome.eyebrow} title={t.agroHome.title} sub={t.agroHome.sub} />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.agro.sectors.map((s, i) => {
            const img = agroImages[s.id];
            return (
              <li key={s.id}>
                <Reveal delay={i * 50} className="h-full">
                  <Link
                    href={`/solutions-agroalimentaires#${s.id}`}
                    className="group relative isolate flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-[2rem] bg-foreground p-6"
                  >
                    <div className="absolute inset-0 -z-20 transition-transform duration-700 group-hover:scale-105">
                      <AppImage src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                    </div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/10" />
                    <h3 className="text-lg font-semibold text-background">{s.t}</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-background">
                      {t.agro.discover}
                      <Icon name="ArrowRightIcon" size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
          <li>
            <Reveal delay={7 * 50} className="h-full">
              <Link
                href="/solutions-agroalimentaires"
                className="group flex h-full min-h-[240px] flex-col justify-between rounded-[2rem] bg-primary p-6 text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Icon name="Squares2X2Icon" size={28} className="text-accent" />
                <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold">
                  {t.agroHome.link}
                  <Icon name="ArrowRightIcon" size={18} className="shrink-0 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
