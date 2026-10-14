// Images used on the "Solutions agroalimentaires" page and home teaser.
// They re-use images already present in the project. To use your own photos,
// drop them in /public/assets/images/agro/ and change `src` below (one line per sector).
export const agroImages: Record<string, { src: string; alt: string; icon: string }> = {
  industrie: {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_104841850-1772175677943.png',
    alt: 'Équipe de production en cuisine professionnelle de grand volume',
    icon: 'BuildingOffice2Icon',
  },
  production: {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ac18d062-1784100421862.png',
    alt: 'Plan de travail en inox propre dans un atelier de transformation alimentaire',
    icon: 'Cog6ToothIcon',
  },
  qualite: {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11440eb6d-1772232934789.png',
    alt: 'Équipe suivant une liste de contrôle qualité avant la production',
    icon: 'ClipboardDocumentCheckIcon',
  },
  tracabilite: {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11e6a57a5-1770818707126.png',
    alt: 'Produits alimentaires étiquetés avec dates visibles pour la traçabilité',
    icon: 'QrCodeIcon',
  },
  stockage: {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_17656913a-1772232320256.png',
    alt: 'Chambre froide professionnelle avec produits alimentaires rangés',
    icon: 'ArchiveBoxIcon',
  },
  restauration: {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_137f13aeb-1775731852786.png',
    alt: 'Chef en tenue blanche contrôlant la préparation dans une cuisine professionnelle',
    icon: 'FireIcon',
  },
  formation: {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12f26172c-1772232102317.png',
    alt: 'Chef vérifiant une préparation lors d’un accompagnement sur le terrain',
    icon: 'AcademicCapIcon',
  },
};

// Maps an agro sector id to the matching option of the contact form "Secteur d'activité".
export const sectorToContactId: Record<string, string> = {
  industrie: 'industrie',
  production: 'production',
  qualite: 'qualite',
  tracabilite: 'production',
  stockage: 'stockage',
  restauration: 'restaurant',
  formation: 'formation',
};

// Order must match `t.contact.types` in the locale files.
export const contactSectorIds = [
  'industrie', 'production', 'qualite', 'stockage', 'restaurant', 'hotel', 'riad', 'cafe', 'cuisine', 'formation', 'autre',
];
