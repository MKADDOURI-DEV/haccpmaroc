import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import FeaturesHero from './components/FeaturesHero';
import FeaturesExplorer from './components/FeaturesExplorer';

export const metadata: Metadata = {
  title: 'Fonctionnalités HACCP : réception, températures, traçabilité, IoT',
  description:
    'Vingt modules pour structurer le suivi HACCP : réception, températures, décongélation, nettoyage, huiles de friture, étiquetage, production, lots et traçabilité, IoT et plus.',
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