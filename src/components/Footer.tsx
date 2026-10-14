'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useTranslation } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date()?.getFullYear();

  const groupA = [
    { href: '/features', label: t?.nav?.features },
    { href: '/solutions-by-industry', label: t?.nav?.solutions },
    { href: '/blog', label: t?.nav?.blog },
  ];
  const groupB = [
    { href: '/about', label: t?.nav?.about },
    { href: '/contact', label: t?.nav?.contact },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-semibold text-primary">{siteConfig?.brandName}</p>
            <p className="mt-2 text-[15px] text-muted-foreground">{t?.footer?.tag}</p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <ul className="flex flex-col gap-3">
              {groupA?.map((l) => (
                <li key={l?.href}>
                  <Link
                    href={l?.href}
                    className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground hover:text-foreground"
                  >
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {groupB?.map((l) => (
                <li key={l?.href}>
                  <Link
                    href={l?.href}
                    className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground hover:text-foreground"
                  >
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-[15px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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