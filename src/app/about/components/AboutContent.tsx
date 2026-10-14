'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function AboutContent() {
  const { t } = useTranslation();
  const placeholderValues = [
  siteConfig?.legalName,
  siteConfig?.address,
  '[Présentation de l’équipe à renseigner]',
  siteConfig?.contactEmail,
  '[Références réelles à renseigner]'];


  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-16">
        <Reveal>
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-between rounded-[2.5rem] bg-secondary p-8 sm:p-12">
              <div>
                <p className="text-lg leading-relaxed text-foreground">{t?.about?.text}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {t?.about?.values?.map((v) =>
                  <div key={v?.t} className="rounded-2xl bg-card p-5">
                      <h3 className="font-serif-accent text-xl font-medium text-primary">{v?.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{v?.d}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-[2.5rem]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d8807744-1768759742860.png"
                alt="Équipe de professionnels réunie autour d’une table de travail"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover" />
              
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[2.5rem] border border-border bg-card p-8 sm:p-12">
            <h2 className="font-serif-accent text-3xl font-medium text-primary">{t?.about?.placeholders}</h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {t?.about?.fields?.map((label, i) =>
              <div key={label} className="flex items-start gap-4 rounded-2xl bg-secondary p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon name="PencilSquareIcon" size={20} />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-[15px] font-medium text-foreground">{placeholderValues?.[i]}</dd>
                  </div>
                </div>
              )}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>);

}