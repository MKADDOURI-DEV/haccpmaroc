'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

/*
BENTO GRID AUDIT
STEP 1 — Array has 5 cards: [hotels, riads, restaurants, cafes, kitchens]
STEP 2 — Desktop (lg: 6 cols, 2 rows):
  Row 1: [col-1..3: hotels cs-3 rs-2] [col-4..6: riads cs-3 rs-1]
  Row 2: [col-1..3: hotels (row-span)] [col-4..6: restaurants cs-3 rs-1]  -> wait, need all 5 placed.
  Reworked below with 3 rows:
  Row 1: [col-1..4: hotels cs-4] [col-5..6: riads cs-2]
  Row 2: [col-1..2: restaurants cs-2] [col-3..4: cafes cs-2] [col-5..6: kitchens cs-2]
STEP 3 — Placed 5/5 cards ✓ (row 1 = 4+2 = 6 cols, row 2 = 2+2+2 = 6 cols, no empty cells)
Tablet (md: 2 cols): hotels cs-2, riads cs-1, restaurants cs-1, cafes cs-1, kitchens cs-1
  Row 1: [hotels cs-2]
  Row 2: [riads cs-1] [restaurants cs-1]
  Row 3: [cafes cs-1] [kitchens cs-1]  ✓ 5/5, no empty cells
Mobile (1 col): all stacked ✓
*/

const images: Record<string, {src: string;alt: string;layout: string;tall: boolean;}> = {
  hotels: {
    src: "https://images.unsplash.com/photo-1700425628350-78969bf0afd1",
    alt: 'Façade et terrasse d’un grand hôtel avec piscine au coucher du soleil',
    layout: 'md:col-span-2 lg:col-span-4',
    tall: true
  },
  riads: {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7e4a4f8-1783858393331.png",
    alt: 'Patio traditionnel d’un riad marocain avec zellige et fontaine',
    layout: 'md:col-span-1 lg:col-span-2',
    tall: false
  },
  restaurants: {
    src: "https://images.unsplash.com/photo-1669310970620-42fbd32fd3c0",
    alt: 'Salle de restaurant élégante avec tables dressées',
    layout: 'md:col-span-1 lg:col-span-2',
    tall: false
  },
  cafes: {
    src: "https://images.unsplash.com/photo-1599229809585-f92ea053b547",
    alt: 'Comptoir de café avec pâtisseries et machine à espresso',
    layout: 'md:col-span-1 lg:col-span-2',
    tall: false
  },
  kitchens: {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1990779a1-1781166515375.png",
    alt: 'Cuisine professionnelle en inox avec brigade au travail',
    layout: 'md:col-span-1 lg:col-span-2',
    tall: false
  }
};

export default function SolutionsBento() {
  const { t } = useTranslation();

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-section-xl font-semibold text-primary">{t.solutions.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.solutions.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {t.solutions.items.map((item, i) => {
            const meta = images[item.k];
            return (
              <Reveal key={item.k} delay={i * 90} className={meta.layout}>
                {/* Card: {item.k} */}
                <Link
                  href={`/solutions-by-industry#${item.k}`}
                  className={`group relative isolate flex h-full ${
                  meta.tall ? 'min-h-[360px]' : 'min-h-[300px]'} flex-col justify-end overflow-hidden rounded-[2.5rem] bg-foreground p-7`
                  }>
                  
                  <div className="absolute inset-0 -z-20 transition-transform duration-700 group-hover:scale-105">
                    <AppImage
                      src={meta.src}
                      alt={meta.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover" />
                    
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/85 via-foreground/45 to-transparent" />
                  <h3 className="font-serif-accent text-2xl font-medium text-background sm:text-3xl">{item.t}</h3>
                  <p className="mt-2 max-w-md text-[15px] text-background opacity-90">{item.d}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-background">
                    {t.solutions.link}
                    <Icon name="ArrowRightIcon" size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </span>
                </Link>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}