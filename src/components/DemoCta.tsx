'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import Reveal from '@/components/Reveal';

export default function DemoCta() {
  const { t } = useTranslation();
  return (
    <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-10" aria-labelledby="final-cta-title">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center sm:px-14 sm:py-20">
          <div className="blob-accent animate-blob pointer-events-none absolute -left-20 -top-24 h-72 w-72 opacity-40" />
          <div className="relative">
            <h2 id="final-cta-title" className="mx-auto max-w-3xl text-section-xl font-semibold text-primary-foreground">
              {t?.cta?.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground opacity-85">{t?.cta?.text}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact?demande=demo"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
              >
                {t?.cta?.button}
              </Link>
              <Link
                href="/contact?demande=devis"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-primary-foreground/40 px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {t?.cta?.quote}
              </Link>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-6">
              <Link href="/contact?demande=contact" className="inline-flex min-h-[44px] items-center text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline">
                {t?.cta?.contact}
              </Link>
              <Link href="/solutions-agroalimentaires" className="inline-flex min-h-[44px] items-center text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline">
                {t?.cta?.discover}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
