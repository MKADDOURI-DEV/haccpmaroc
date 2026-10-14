'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  sub: string;
  crumb: string;
}

export default function PageHero({ eyebrow, title, sub, crumb }: PageHeroProps) {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="blob-accent animate-blob absolute -right-24 top-10 h-72 w-72 opacity-40" />
        <div className="wireframe-grid absolute inset-0 opacity-20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="opacity-80 hover:opacity-100">{t.breadcrumb.home}</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold">{crumb}</li>
          </ol>
        </nav>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="max-w-3xl text-section-xl font-semibold text-primary-foreground">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-primary-foreground opacity-85">{sub}</p>
      </div>
    </section>
  );
}