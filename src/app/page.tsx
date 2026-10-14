import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import FaqAccordion from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import HeroSection from './components/HeroSection';
import WorkflowSection from './components/WorkflowSection';
import SolutionsBento from './components/SolutionsBento';
import CompareSection from './components/CompareSection';
import LimitsSection from './components/LimitsSection';

export const metadata: Metadata = {
  title: 'Logiciel HACCP Maroc — suivi des températures et de l’hygiène',
  description:
    'Logiciel HACCP pour hôtels, riads et restaurants au Maroc : centralisez contrôles, températures, nettoyage et traçabilité. Demandez une démo.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main className="relative">
      <JsonLd />
      <Header />
      <HeroSection />
      <WorkflowSection />
      <SolutionsBento />
      <CompareSection />
      <LimitsSection />
      <FaqAccordion />
      <DemoCta />
      <Footer />
    </main>
  );
}