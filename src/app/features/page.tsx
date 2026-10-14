import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import FeaturesHero from './components/FeaturesHero';
import FeaturesExplorer from './components/FeaturesExplorer';

export const metadata: Metadata = {
  title: 'Fonctionnalités HACCP — températures, nettoyage, traçabilité',
  description:
    'Neuf modules proposés pour structurer le suivi HACCP : températures, check-lists, traçabilité, non-conformités et rapports exportables.',
  alternates: { canonical: '/features' },
};

export default function FeaturesPage() {
  return (
    <main>
      <Header />
      <FeaturesHero />
      <FeaturesExplorer />
      <DemoCta />
      <Footer />
    </main>
  );
}