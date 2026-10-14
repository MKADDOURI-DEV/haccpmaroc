'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { useTranslation } from '@/context/LanguageContext';

export default function FeaturesHero() {
  const { t } = useTranslation();
  return (
    <PageHero
      eyebrow={t?.nav?.features}
      title={t?.features?.title}
      sub={t?.compare?.sub}
      crumb={t?.nav?.features}
    />
  );
}