import React from 'react';
import { siteConfig } from '@/config/site';
import { fr } from '@/locales/fr';

export default function JsonLd({ withFaq = false }: { withFaq?: boolean }) {
  const organization: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig?.brandName,
    url: siteConfig?.siteUrl,
    ...(siteConfig.contactEmail ? { email: siteConfig.contactEmail } : {}),
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig?.brandName,
    url: siteConfig?.siteUrl,
    inLanguage: ['fr', 'ar', 'en'],
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fr.faq.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      {withFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}
    </>
  );
}
