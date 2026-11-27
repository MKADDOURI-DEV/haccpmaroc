// Icons and illustrations for the application modules listed in
// t.features.items (src/locales/*.ts). Keys must match item ids.

export const featureIcons: Record<string, string> = {
  reception: 'TruckIcon',
  temp: 'BeakerIcon',
  thaw: 'ClockIcon',
  clean: 'SparklesIcon',
  metro: 'ScaleIcon',
  oil: 'FireIcon',
  hau: 'ArrowPathIcon',
  labels: 'TagIcon',
  production: 'ClipboardDocumentListIcon',
  trace: 'QrCodeIcon',
  sousvide: 'ArchiveBoxIcon',
  iot: 'WifiIcon',
  suppliers: 'BuildingStorefrontIcon',
  catalog: 'RectangleStackIcon',
  equipment: 'MapIcon',
  cleaningProducts: 'ShieldCheckIcon',
  users: 'UserGroupIcon',
  alerts: 'BellAlertIcon',
  docs: 'DocumentTextIcon',
  history: 'DocumentMagnifyingGlassIcon',
};

const IMG = {
  coldRoom: 'https://img.rocket.new/generatedImages/rocket_gen_img_17656913a-1772232320256.png',
  cleanSteel: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ac18d062-1784100421862.png',
  teamChecklist:
    'https://img.rocket.new/generatedImages/rocket_gen_img_11440eb6d-1772232934789.png',
  labelled: 'https://img.rocket.new/generatedImages/rocket_gen_img_11e6a57a5-1770818707126.png',
  chefCheck: 'https://img.rocket.new/generatedImages/rocket_gen_img_12f26172c-1772232102317.png',
  documents: 'https://img.rocket.new/generatedImages/rocket_gen_img_15c437b57-1772542593993.png',
  phoneAlerts: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bbbe35cd-1766709251678.png',
  dashboard: 'https://img.rocket.new/generatedImages/rocket_gen_img_4e4458b8c-1791979614263.png',
};

export const featureImages: Record<string, { src: string; alt: string }> = {
  reception: { src: IMG.labelled, alt: 'Produits alimentaires réceptionnés et étiquetés' },
  temp: {
    src: IMG.coldRoom,
    alt: 'Chambre froide professionnelle avec produits alimentaires rangés',
  },
  thaw: { src: IMG.coldRoom, alt: 'Produits stockés en chambre froide avant décongélation' },
  clean: {
    src: IMG.cleanSteel,
    alt: 'Plan de travail en inox nettoyé dans une cuisine professionnelle',
  },
  metro: { src: IMG.chefCheck, alt: 'Contrôle d’une préparation en cuisine professionnelle' },
  oil: { src: IMG.chefCheck, alt: 'Chef contrôlant une préparation en cuisine' },
  hau: { src: IMG.cleanSteel, alt: 'Cuisine professionnelle propre et rangée' },
  labels: { src: IMG.labelled, alt: 'Produits alimentaires étiquetés avec dates visibles' },
  production: { src: IMG.teamChecklist, alt: 'Équipe de cuisine en préparation avant le service' },
  trace: { src: IMG.labelled, alt: 'Lots de produits identifiés par étiquettes' },
  sousvide: { src: IMG.labelled, alt: 'Produits conditionnés et étiquetés' },
  iot: { src: IMG.dashboard, alt: 'Écran affichant les relevés des capteurs connectés' },
  suppliers: { src: IMG.documents, alt: 'Dossiers fournisseurs organisés sur un bureau' },
  catalog: { src: IMG.documents, alt: 'Fiches produits et catalogue organisés' },
  equipment: { src: IMG.coldRoom, alt: 'Équipements frigorifiques d’une cuisine professionnelle' },
  cleaningProducts: { src: IMG.cleanSteel, alt: 'Surface en inox désinfectée' },
  users: { src: IMG.teamChecklist, alt: 'Équipe de cuisine travaillant ensemble' },
  alerts: { src: IMG.phoneAlerts, alt: 'Smartphone affichant des notifications' },
  docs: { src: IMG.documents, alt: 'Documents et classeurs de procédures organisés sur un bureau' },
  history: { src: IMG.dashboard, alt: 'Écran affichant l’historique des opérations' },
};

export const defaultFeatureImage = featureImages.temp;
