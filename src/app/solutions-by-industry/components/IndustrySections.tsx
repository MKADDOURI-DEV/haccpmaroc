'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

const photos: Record<string, {src: string;alt: string;}> = {
  hotels: {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d61a3701-1771268207552.png",
    alt: 'Hôtel de luxe avec piscine et terrasse au coucher du soleil'
  },
  riads: {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ef717048-1786026750485.png",
    alt: 'Patio d’un riad traditionnel marocain avec fontaine centrale'
  },
  restaurants: {
    src: "https://images.unsplash.com/photo-1691508650928-5019db450b2e",
    alt: 'Salle de restaurant avec tables dressées et éclairage chaleureux'
  },
  cafes: {
    src: "https://images.unsplash.com/photo-1735323004218-224112baf1ca",
    alt: 'Intérieur de café avec comptoir et vitrine de pâtisseries'
  },
  kitchens: {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_104841850-1772175677943.png",
    alt: 'Brigade de cuisine professionnelle préparant un service en volume'
  }
};

export default function IndustrySections() {
  const { t } = useTranslation();

  return (
    <div className="bg-background px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-20">
        {t.industry.sections.map((s, i) => {
          const photo = photos[s.id];
          const reversed = i % 2 === 1;
          return (
            <section key={s.id} id={s.id} className="scroll-mt-24" aria-labelledby={`${s.id}-title`}>
              <Reveal>
                <div className="grid items-stretch gap-8 lg:grid-cols-2">
                  <div className={`relative min-h-[300px] overflow-hidden rounded-[2.5rem] ${reversed ? 'lg:order-2' : ''}`}>
                    <AppImage
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover" />
                    
                  </div>
                  <div className="flex flex-col justify-between rounded-[2.5rem] bg-secondary p-8 sm:p-10">
                    <div>
                      <h2 id={`${s.id}-title`} className="font-serif-accent text-3xl font-medium text-primary sm:text-4xl">
                        {s.t}
                      </h2>
                      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{s.p}</p>
                      <ul className="mt-6 space-y-3">
                        {s.pts.map((pt) =>
                        <li key={pt} className="flex items-center gap-3 text-[15px] font-medium text-foreground">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                              <Icon name="CheckIcon" size={16} />
                            </span>
                            {pt}
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]">
                        
                        {t.nav.cta}
                      </Link>
                      <Link
                        href="/features"
                        className="inline-flex min-h-[48px] items-center rounded-full border border-primary px-6 text-sm font-semibold text-primary hover:bg-card">
                        
                        {t.nav.features}
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>);

        })}
      </div>
    </div>);

}