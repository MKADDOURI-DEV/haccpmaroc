import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import SolutionsHero from './components/SolutionsHero';
import IndustrySections from './components/IndustrySections';
import HowItWorks from './components/HowItWorks';

export const metadata: Metadata = {
  title: 'Solutions HACCP par secteur — hôtels, riads, restaurants, cafés',
  description:
    'Logiciel HACCP pour hôtels, riads, restaurants, cafés et cuisines professionnelles au Maroc : un suivi adapté à chaque réalité de terrain.',
  alternates: { canonical: '/solutions-by-industry' },
};

export default function SolutionsByIndustryPage() {
  return (
    <main>
      <Header />
      <SolutionsHero />
      <IndustrySections />
      <HowItWorks />
      <DemoCta />
      <Footer />
    </main>
  );
}