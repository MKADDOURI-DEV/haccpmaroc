'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

export default function LimitsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background px-4 pb-6 pt-12 sm:px-6 lg:px-10">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-[2.5rem] border border-border bg-card lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12">
            <h2 className="text-section-xl font-semibold text-primary">{t?.limits?.title}</h2>
            <p className="mt-6 text-[15px] text-muted-foreground">{t?.limits?.note}</p>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-secondary p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon name="CheckIcon" size={22} />
              </div>
              <p className="text-[15px] font-medium text-foreground">{t?.limits?.do}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon name="ExclamationTriangleIcon" size={22} />
              </div>
              <p className="text-[15px] font-medium text-foreground">{t?.limits?.dont}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}