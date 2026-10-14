import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import AgroHero from './components/AgroHero';
import AgroSectors from './components/AgroSectors';

export const metadata: Metadata = {
  title: 'Solutions agroalimentaires — HACCP, traçabilité et contrôle qualité au Maroc',
  description:
    'Solutions agroalimentaires au Maroc : organisation HACCP, suivi des contrôles, traçabilité alimentaire des lots, stockage et accompagnement à la préparation des audits.',
  alternates: { canonical: '/solutions-agroalimentaires' },
  openGraph: {
    title: 'Solutions agroalimentaires — HACCP Maroc',
    description: 'HACCP, qualité, traçabilité et stockage pour l’industrie agroalimentaire et la restauration.',
    locale: 'fr_MA',
  },
};

export default function SolutionsAgroalimentairesPage() {
  return (
    <main>
      <Header />
      <AgroHero />
      <AgroSectors />
      <DemoCta />
      <Footer />
    </main>
  );
}
