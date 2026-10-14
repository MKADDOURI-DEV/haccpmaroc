import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';

export const metadata: Metadata = {
  title: 'Demander une démonstration HACCP — contact',
  description:
    'Demandez une démonstration du logiciel HACCP pour votre hôtel, riad ou restaurant au Maroc. Réponse personnalisée de notre équipe.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <section className="bg-background px-4 pb-20 pt-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}