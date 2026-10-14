import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoCta from '@/components/DemoCta';
import BlogHero from './components/BlogHero';
import BlogExplorer from './components/BlogExplorer';

export const metadata: Metadata = {
  title: 'Ressources HACCP — articles sur l’hygiène alimentaire au Maroc',
  description:
    'Articles sur le HACCP, le suivi des températures, le nettoyage, la traçabilité et les registres numériques pour l’hôtellerie et la restauration.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <main>
      <Header />
      <BlogHero />
      <section className="bg-background px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <BlogExplorer />
        </div>
      </section>
      <DemoCta />
      <Footer />
    </main>
  );
}