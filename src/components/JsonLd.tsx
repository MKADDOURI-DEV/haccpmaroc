import React from 'react';
import { siteConfig } from '@/config/site';

export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig?.brandName,
    url: siteConfig?.siteUrl,
    email: siteConfig?.contactEmail,
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig?.brandName,
    url: siteConfig?.siteUrl,
    inLanguage: ['fr', 'ar', 'en'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}