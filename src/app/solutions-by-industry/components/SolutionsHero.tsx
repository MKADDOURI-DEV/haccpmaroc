'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { useTranslation } from '@/context/LanguageContext';

export default function SolutionsHero() {
  const { t } = useTranslation();
  return (
    <PageHero
      eyebrow={t?.nav?.solutions}
      title={t?.industry?.title}
      sub={t?.industry?.sub}
      crumb={t?.nav?.solutions}
    />
  );
}