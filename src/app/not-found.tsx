import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-4 pt-24">
        <div className="blob-accent animate-blob pointer-events-none absolute -right-20 top-20 h-80 w-80 opacity-40" />
        <div className="relative text-center">
          <p className="font-serif-accent text-8xl font-medium text-accent sm:text-9xl">404</p>
          <h1 className="mt-4 text-section-xl font-semibold text-primary-foreground">Page introuvable</h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-primary-foreground opacity-85">
            La page demandée n’existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-[52px] items-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}