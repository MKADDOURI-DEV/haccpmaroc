'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { useTranslation } from '@/context/LanguageContext';

const icons = ['ClipboardDocumentCheckIcon', 'FolderOpenIcon', 'ExclamationTriangleIcon', 'ShieldCheckIcon', 'AcademicCapIcon'];

export default function CertificationSection() {
  const { t } = useTranslation();
  const c = t.cert;

  return (
    <section id="accompagnement" className="bg-background px-4 py-20 sm:px-6 lg:px-10" aria-labelledby="cert-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading id="cert-title" eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
            <div className="mt-8 rounded-[2rem] border border-border bg-secondary p-6">
              <p className="flex items-center gap-2 font-semibold text-primary">
                <Icon name="InformationCircleIcon" size={22} className="shrink-0 text-success" />
                {c.officialTitle}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{c.officialText}</p>
            </div>
            <Link
              href="/contact?demande=contact"
              className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              {c.cta}
            </Link>
          </div>
        </Reveal>

        <ul className="space-y-4">
          {c.items.map((item, i) => (
            <li key={item.t}>
              <Reveal delay={i * 70}>
                <article className="flex items-start gap-5 rounded-[2rem] border border-border bg-card p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon name={icons[i]} size={24} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{item.t}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
