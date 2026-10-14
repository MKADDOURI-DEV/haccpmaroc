'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';
import { articles, type Article } from '@/content/articles';

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
};

export default function BlogExplorer() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Article | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (selected) {
    const related = articles.filter((a) => selected.related.includes(a.slug));
    return (
      <article className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="mb-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
        >
          <Icon name="ArrowLeftIcon" size={18} className="rtl:rotate-180" />
          {t.blog.back}
        </button>
        <div className="relative h-64 w-full overflow-hidden rounded-[2.5rem] sm:h-80">
          <AppImage src={selected.image} alt={selected.alt} fill sizes="100vw" className="object-cover" priority />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent">{selected.category}</p>
        <h2 className="mt-3 font-serif-accent text-3xl font-medium text-primary sm:text-5xl">{selected.title}</h2>
        <p className="mt-5 text-sm text-muted-foreground">
          {t.blog.by} {selected.author} · {t.blog.published} {formatDate(selected.published)} · {t.blog.updated}{' '}
          {formatDate(selected.updated)}
        </p>

        <div className="mt-8 space-y-5">
          {selected.body.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-foreground">{p}</p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">{t.blog.sources}</h3>
          <p className="mt-2 text-[15px] text-muted-foreground">{t.blog.sourcesText}</p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-primary">{t.blog.related}</h3>
          <ul className="mt-3 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(r);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex min-h-[44px] items-center text-start text-[15px] font-medium text-accent-foreground underline decoration-accent underline-offset-4 hover:text-primary"
                >
                  {r.title}
                </button>
              </li>
            ))}
            <li>
              <Link href="/features" className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-primary underline decoration-accent underline-offset-4">
                {t.nav.features}
              </Link>
            </li>
          </ul>
        </div>
      </article>
    );
  }

  return (
    <div>
      <div className="relative mx-auto mb-12 max-w-xl">
        <label htmlFor="blog-search" className="sr-only">{t.blog.search}</label>
        <Icon name="MagnifyingGlassIcon" size={20} className="pointer-events-none absolute start-5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.blog.search}
          className="min-h-[52px] w-full rounded-full border border-input bg-card ps-12 pe-5 text-base text-foreground placeholder:text-muted-foreground focus:border-accent"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">{t.blog.empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card transition-shadow hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <AppImage
                    src={a.image}
                    alt={a.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{a.category}</p>
                  <h2 className="mt-2 font-serif-accent text-xl font-medium text-primary">{a.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] text-muted-foreground">{a.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {t.blog.published} {formatDate(a.published)}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected(a);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 inline-flex min-h-[44px] items-center gap-2 self-start text-sm font-semibold text-primary hover:text-accent"
                  >
                    {t.blog.read}
                    <Icon name="ArrowRightIcon" size={18} className="rtl:rotate-180" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}