'use client';

import React from 'react';
import { useTranslation } from '@/context/LanguageContext';

// Shows whether a module is offered or still in development, based on the
// same status flags as the Features page (t.features.items[].s).
export default function StatusChip({ featureId }: { featureId: string }) {
  const { t } = useTranslation();
  const feature = t.features.items.find((i) => i.id === featureId);
  if (!feature) return null;
  const planned = feature.s === 'planned';
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        planned ? 'bg-warning text-warning-foreground' : 'bg-secondary text-primary'
      }`}
    >
      {planned ? t.status.planned : t.status.available}
    </span>
  );
}
