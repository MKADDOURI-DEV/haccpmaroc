'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';
import { useTranslation, type LangCode } from '@/context/LanguageContext';

const languages: LangCode[] = ['fr', 'ar', 'en'];

export default function Header() {
  const { t, lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/features', label: t.nav.features },
    { href: '/solutions-by-industry', label: t.nav.solutions },
    { href: '/blog', label: t.nav.blog },
    { href: '/about', label: t.nav.about },
  ];

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.brandName}>
          <AppLogo size={40} />
          <span className="font-semibold tracking-tight text-lg text-primary">
            {siteConfig.brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center rounded-full border border-border bg-card p-1 text-xs font-semibold"
            role="group"
            aria-label="Langue"
          >
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`min-h-[32px] rounded-full px-2.5 uppercase transition-colors ${
                  lang === code
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            {t.nav.cta}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-background/95 px-6 py-8 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Menu mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-lg font-semibold text-primary hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-6 text-base font-semibold text-accent-foreground"
            >
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}