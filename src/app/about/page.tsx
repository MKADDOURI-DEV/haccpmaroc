import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import AboutHero from './components/AboutHero';
import AboutContent from './components/AboutContent';

export const metadata: Metadata = {
  title: 'À propos — éditeur marocain de solutions HACCP pour l’hôtellerie',
  description:
    'Présentation de notre activité de technologie et de conseil pour les professionnels marocains de l’hôtellerie et de la restauration.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutContent />
      <DemoCta />
      <Footer />
    </main>
  );
}