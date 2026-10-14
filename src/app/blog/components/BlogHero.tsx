'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { useTranslation } from '@/context/LanguageContext';

export default function BlogHero() {
  const { t } = useTranslation();
  return (
    <PageHero
      eyebrow={t?.nav?.blog}
      title={t?.blog?.title}
      sub={t?.blog?.sub}
      crumb={t?.nav?.blog}
    />
  );
}