'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { useTranslation } from '@/context/LanguageContext';

export default function AgroHero() {
  const { t } = useTranslation();
  return <PageHero eyebrow={t.agro.eyebrow} title={t.agro.title} sub={t.agro.sub} crumb={t.agro.crumb} />;
}
