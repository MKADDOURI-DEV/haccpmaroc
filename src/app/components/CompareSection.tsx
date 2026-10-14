'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

export default function CompareSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-section-xl font-semibold text-primary">{t?.compare?.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t?.compare?.sub}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 overflow-x-auto rounded-[2.5rem] bg-secondary">
            <div className="min-w-[620px]">
              <div className="grid grid-cols-12 border-b border-border">
                <div className="col-span-5 p-6" />
                <div className="col-span-4 -mt-4 flex items-center justify-center rounded-t-[2rem] bg-primary px-4 pb-5 pt-9 text-center text-lg font-semibold text-primary-foreground">
                  {t?.compare?.col1}
                </div>
                <div className="col-span-3 flex items-center justify-center p-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {t?.compare?.col2}
                </div>
              </div>

              <div className="divide-y divide-border">
                {t?.compare?.rows?.map((row) => (
                  <div key={row?.[0]} className="grid grid-cols-12 items-center">
                    <div className="col-span-5 p-6 text-[15px] font-medium text-foreground">{row?.[0]}</div>
                    <div className="col-span-4 flex items-center justify-center gap-2 bg-primary p-6 text-center text-[15px] font-medium text-primary-foreground">
                      <Icon name="CheckCircleIcon" size={20} className="shrink-0 text-accent" />
                      {row?.[1]}
                    </div>
                    <div className="col-span-3 flex items-center justify-center p-6 text-center text-[15px] text-muted-foreground">
                      {row?.[2]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-5" />
                <div className="col-span-4 h-8 rounded-b-[2rem] bg-primary" />
                <div className="col-span-3" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}