'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { useTranslation } from '@/context/LanguageContext';

export default function AboutHero() {
  const { t } = useTranslation();
  return (
    <PageHero
      eyebrow={t?.nav?.about}
      title={t?.about?.title}
      sub={t?.limits?.note}
      crumb={t?.nav?.about}
    />
  );
}