'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig, hasEmail, hasWhatsapp, whatsappLink } from '@/config/site';
import { useTranslation } from '@/context/LanguageContext';

const linkClass = 'inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground hover:text-foreground';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date()?.getFullYear();

  const solutions = [
    { href: '/solutions-agroalimentaires', label: t.nav.agro },
    { href: '/solutions-by-industry', label: t.nav.solutions },
    { href: '/features', label: t.nav.features },
    { href: '/contact?demande=devis', label: t.nav.quote },
  ];
  const company = [
    { href: '/about', label: t.nav.about },
    { href: '/blog', label: t.nav.blog },
    { href: '/contact?demande=contact', label: t.nav.contact },
    { href: '/contact?demande=demo', label: t.nav.cta },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <p className="text-lg font-semibold text-primary">{siteConfig?.brandName}</p>
            <p className="mt-2 text-[15px] text-muted-foreground">{t?.footer?.tag}</p>
          </div>
          <nav aria-label={t.footer.solutionsTitle}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.footer.solutionsTitle}</p>
            <ul className="mt-3 flex flex-col">
              {solutions.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkClass}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label={t.footer.companyTitle}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.footer.companyTitle}</p>
            <ul className="mt-3 flex flex-col">
              {company.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkClass}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.footer.contactTitle}</p>
            <ul className="mt-3 flex flex-col">
              <li><Link href="/contact" className={linkClass}>{t.nav.contact}</Link></li>
              {hasEmail && (
                <li><a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>{siteConfig.contactEmail}</a></li>
              )}
              {hasWhatsapp && (
                <li>
                  <a href={whatsappLink(t.contact.whatsappMsg)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t.footer.disclaimer}</p>

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 text-[15px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig?.brandName}. {t?.footer?.rights}
          </p>
          <p className="flex gap-4">
            <Link href="/contact" className="hover:text-foreground">{t?.footer?.privacy}</Link>
            <Link href="/about" className="hover:text-foreground">{t?.footer?.terms}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
