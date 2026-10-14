'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import Reveal from '@/components/Reveal';

export default function DemoCta() {
  const { t } = useTranslation();
  return (
    <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-10">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center sm:px-14 sm:py-20">
          <div className="blob-accent animate-blob pointer-events-none absolute -left-20 -top-24 h-72 w-72 opacity-40" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-section-xl font-semibold text-primary-foreground">
              {t?.cta?.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground opacity-85">{t?.cta?.text}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[52px] items-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
            >
              {t?.cta?.button}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}