'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

export default function FaqAccordion() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-10" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 id="faq-title" className="text-section-xl font-semibold text-primary">
              {t?.faq?.title}
            </h2>
            <p className="mt-5 max-w-sm text-lg text-muted-foreground">{t?.limits?.note}</p>
          </div>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {t?.faq?.items?.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item?.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-start text-base font-semibold text-foreground hover:text-primary sm:text-lg"
                  >
                    <span>{item?.q}</span>
                    <Icon
                      name="ChevronDownIcon"
                      size={22}
                      className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{item?.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}