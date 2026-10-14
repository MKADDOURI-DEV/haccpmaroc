'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { useTranslation } from '@/context/LanguageContext';

export default function ContactHero() {
  const { t } = useTranslation();
  return (
    <PageHero
      eyebrow={t?.nav?.contact}
      title={t?.contact?.title}
      sub={t?.contact?.sub}
      crumb={t?.nav?.contact}
    />
  );
}