'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useTranslation();
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (blobARef.current) blobARef.current.style.transform = `translateY(${y * 0.18}px)`;
      if (blobBRef.current) blobBRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    const onMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;
      cardRef.current.style.transform = `translate(${mx * -10}px, ${my * -8}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const rows = [
  { n: 'Frigo cuisine 01', v: 'OK', tone: 'bg-success' },
  { n: 'Chambre froide', v: 'OK', tone: 'bg-success' },
  { n: 'Vitrine pâtisserie', v: 'À revoir', tone: 'bg-warning' }];


  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-foreground">
      <div className="absolute inset-0 -z-20">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_137f13aeb-1775731852786.png"
          alt="Chef en tenue blanche contrôlant la préparation dans une cuisine professionnelle lumineuse"
          fill
          priority
          sizes="100vw"
          className="object-cover" />
        
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
      <div className="wireframe-grid absolute inset-0 -z-10 opacity-20" />
      <div ref={blobARef} className="blob-accent animate-blob pointer-events-none absolute -left-20 top-1/3 -z-10 h-80 w-80 opacity-30" />
      <div ref={blobBRef} className="blob-primary animate-blob pointer-events-none absolute right-0 top-10 -z-10 h-96 w-96 opacity-40" />
      <div className="grain absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:pt-44">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-background backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.eyebrow}
          </p>
          <h1 className="text-hero-xl font-semibold text-background">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-background opacity-90 sm:text-xl">{t.hero.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?demande=demo"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.04]">
              {t.hero.primary}
            </Link>
            <Link
              href="/contact?demande=devis"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-background/40 bg-background/10 px-8 text-base font-semibold text-background backdrop-blur transition-colors hover:bg-background/20">
              {t.hero.secondary}
            </Link>
          </div>
          <Link
            href="/solutions-agroalimentaires"
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-base font-semibold text-background underline-offset-4 hover:underline">
            {t.hero.discover}
            <Icon name="ArrowRightIcon" size={18} className="rtl:rotate-180" />
          </Link>
        </div>

        <div className="relative">
          <div
            ref={cardRef}
            className="relative rounded-[2rem] border border-background/25 bg-background/15 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-200 sm:p-6">
            
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-background">{t.hero.dashTitle}</p>
              <span className="rounded-full bg-background/20 px-3 py-1 text-xs font-medium text-background">14/10/2026</span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-background/90 p-4">
                <p className="text-xs font-medium text-muted-foreground">{t.hero.chip1}</p>
                <p className="mt-1 text-3xl font-semibold text-primary">18 / 24</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
              </div>
              <div className="rounded-2xl bg-background/90 p-4">
                <p className="text-xs font-medium text-muted-foreground">{t.hero.chip2}</p>
                <p className="mt-1 text-3xl font-semibold text-primary">1</p>
                <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                  <Icon name="ExclamationTriangleIcon" size={16} className="text-warning" />
                  Vitrine
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {rows.map((r) =>
              <li key={r.n} className="flex items-center justify-between rounded-xl bg-background/90 px-4 py-3">
                  <span className="text-sm font-medium text-foreground">{r.n}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-foreground">
                    <span className={`h-2.5 w-2.5 rounded-full ${r.tone}`} />
                    {r.v}
                  </span>
                </li>
              )}
            </ul>
            <p className="mt-4 text-xs text-background opacity-90">{t.hero.mock}</p>
          </div>

          <div className="animate-floaty absolute -left-4 -top-8 hidden items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <Icon name="BeakerIcon" size={22} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Chambre froide</p>
              <p className="text-lg font-semibold text-foreground">Relevé enregistré</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}