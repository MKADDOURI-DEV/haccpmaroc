import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import FaqAccordion from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import HeroSection from './components/HeroSection';
import HaccpSolutions from './components/HaccpSolutions';
import WorkflowSection from './components/WorkflowSection';
import ComplianceSection from './components/ComplianceSection';
import LimitsSection from './components/LimitsSection';
import TraceabilitySection from './components/TraceabilitySection';
import PaperToDigitalSection from './components/PaperToDigitalSection';
import AgroTeaser from './components/AgroTeaser';
import SolutionsBento from './components/SolutionsBento';
import CertificationSection from './components/CertificationSection';

export const metadata: Metadata = {
  title: 'Logiciel HACCP Maroc — conformité sanitaire, traçabilité alimentaire et digitalisation',
  description:
    'Logiciel HACCP au Maroc : digitalisation HACCP, traçabilité alimentaire et organisation des documents pour préparer le contrôle ONSSA. Solutions agroalimentaires, hôtels et restaurants.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main className="relative">
      <JsonLd withFaq />
      <Header />
      <HeroSection />
      <HaccpSolutions />
      <WorkflowSection />
      <ComplianceSection />
      <LimitsSection />
      <TraceabilitySection />
      <PaperToDigitalSection />
      <AgroTeaser />
      <SolutionsBento />
      <CertificationSection />
      <FaqAccordion />
      <DemoCta />
      <Footer />
    </main>
  );
}
