import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { articles } from '@/content/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1.0 },
    { path: '/features', priority: 0.8 },
    { path: '/solutions-by-industry', priority: 0.8 },
    { path: '/solutions-agroalimentaires', priority: 0.9 },
    { path: '/blog', priority: 0.8 },
    { path: '/about', priority: 0.5 },
    { path: '/contact', priority: 0.8 },
  ];

  const pages = routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r.priority,
  }));

  // Articles are rendered inside /blog; their dates are surfaced as lastModified hints.
  const latestUpdate = articles
    .map((a) => new Date(a.updated).getTime())
    .reduce((max, v) => (v > max ? v : max), 0);

  if (latestUpdate > 0) {
    pages[4] = { ...pages[4], lastModified: new Date(latestUpdate) };
  }

  return pages;
}