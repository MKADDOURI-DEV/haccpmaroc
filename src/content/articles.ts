// Original editorial drafts. All thresholds and regulatory statements must be verified
// against official sources before publication. No numerical thresholds are asserted here.
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  published: string;
  updated: string;
  body: string[];
  related: string[];
  image: string;
  alt: string;
}

export const articles: Article[] = [
{
  slug: 'quest-ce-que-haccp',
  title: 'Qu’est-ce que le HACCP et comment fonctionne-t-il ?',
  excerpt: 'Une introduction claire aux principes de l’analyse des dangers et de la maîtrise des points critiques.',
  category: 'Fondamentaux',
  author: '[Auteur à renseigner]',
  published: '2026-09-20',
  updated: '2026-10-02',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_140e335a4-1768214595848.png",
  alt: 'Équipe de cuisine professionnelle préparant des plats dans une cuisine propre',
  body: [
  'HACCP désigne une démarche qui consiste à identifier les dangers liés à la sécurité des aliments, puis à maîtriser les étapes où ils peuvent être prévenus ou réduits.',
  'Concrètement, un établissement décrit ses étapes de production, repère celles qui sont sensibles, définit comment les surveiller et prévoit quoi faire en cas d’écart.',
  'La démarche repose autant sur des procédures écrites que sur des habitudes d’équipe : sans formation ni suivi régulier, un système documenté perd vite son utilité.'],

  related: ['mesurer-temperatures-frigos', 'registres-papier-ou-numerique']
},
{
  slug: 'mesurer-temperatures-frigos',
  title: 'Comment suivre les températures des réfrigérateurs et chambres froides',
  excerpt: 'Bonnes pratiques d’organisation des relevés, sans fixer de seuils non vérifiés.',
  category: 'Températures',
  author: '[Auteur à renseigner]',
  published: '2026-09-24',
  updated: '2026-10-05',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17656913a-1772232320256.png",
  alt: 'Chambre froide professionnelle avec étagères de produits alimentaires',
  body: [
  'Un suivi utile commence par la liste des équipements : chaque frigo, congélateur et chambre froide devrait avoir un identifiant clair et un responsable de relevé.',
  'Définissez à quelle fréquence relever, à quel moment de la journée, et qui valide. Une règle simple et stable vaut mieux qu’un planning complexe que personne ne suit.',
  'Les valeurs de référence applicables doivent être confirmées auprès des textes officiels et de votre plan de maîtrise sanitaire avant d’être utilisées dans un outil.'],

  related: ['quest-ce-que-haccp', 'checklists-nettoyage-desinfection']
},
{
  slug: 'checklists-nettoyage-desinfection',
  title: 'Check-lists de nettoyage et de désinfection en cuisine',
  excerpt: 'Structurer des tâches par zone, par fréquence et par responsable.',
  category: 'Hygiène',
  author: '[Auteur à renseigner]',
  published: '2026-09-28',
  updated: '2026-10-07',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17beff2e8-1767105535217.png",
  alt: 'Plan de travail en inox propre dans une cuisine professionnelle',
  body: [
  'Une bonne check-list est courte, spécifique à une zone et rédigée avec les mots de l’équipe. Évitez les listes génériques copiées d’un autre établissement.',
  'Distinguez les tâches de fin de service, hebdomadaires et mensuelles, et précisez le produit ou la méthode validés par votre responsable.',
  'Conservez une trace datée de la réalisation : c’est ce qui permet de revenir sur un incident et d’ajuster la procédure.'],

  related: ['mesurer-temperatures-frigos', 'registres-papier-ou-numerique']
},
{
  slug: 'tracabilite-dates-limites',
  title: 'Traçabilité alimentaire et gestion des dates limites',
  excerpt: 'Relier réceptions, lots et dates pour retrouver une information rapidement.',
  category: 'Traçabilité',
  author: '[Auteur à renseigner]',
  published: '2026-10-01',
  updated: '2026-10-08',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1033e6df9-1772086934637.png",
  alt: 'Étiquettes et produits alimentaires rangés avec dates visibles',
  body: [
  'La traçabilité consiste à pouvoir retrouver d’où vient un produit, où il a été utilisé et quand. Elle commence dès la réception avec un enregistrement minimal et cohérent.',
  'Pour les dates limites, l’enjeu est la visibilité : un produit proche de sa date doit apparaître avant qu’il ne soit oublié au fond d’une chambre froide.',
  'Vérifiez auprès des autorités compétentes les obligations d’enregistrement applicables à votre activité avant de définir vos formulaires.'],

  related: ['quest-ce-que-haccp', 'haccp-hotels-riads-maroc']
},
{
  slug: 'haccp-hotels-riads-maroc',
  title: 'Procédures HACCP pour les hôtels et riads au Maroc',
  excerpt: 'Adapter une démarche de suivi à la taille et aux saisons de votre établissement.',
  category: 'Secteurs',
  author: '[Auteur à renseigner]',
  published: '2026-10-04',
  updated: '2026-10-09',
  image: "https://images.unsplash.com/photo-1691508650928-5019db450b2e",
  alt: 'Salle de restaurant d’un hôtel avec tables dressées',
  body: [
  'Hôtels et riads n’ont pas la même échelle, mais partagent un défi : maintenir des pratiques constantes malgré la rotation du personnel et les variations de fréquentation.',
  'Un outil simple, compris par tous dès le premier jour, est souvent plus efficace qu’un système très complet que seule une personne maîtrise.',
  'Les exigences légales locales évoluent : appuyez-vous sur les textes officiels et sur un professionnel qualifié pour valider votre dispositif.'],

  related: ['tracabilite-dates-limites', 'registres-papier-ou-numerique']
},
{
  slug: 'registres-papier-ou-numerique',
  title: 'Registres HACCP papier ou numériques : comment choisir ?',
  excerpt: 'Avantages, limites et points de vigilance pour chaque approche.',
  category: 'Outils',
  author: '[Auteur à renseigner]',
  published: '2026-10-06',
  updated: '2026-10-10',
  image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0",
  alt: 'Tableau de bord numérique affichant des graphiques de suivi',
  body: [
  'Le papier est familier et ne demande aucun équipement, mais il rend la recherche, le partage entre sites et l’export plus laborieux.',
  'Le numérique facilite l’historique et les rappels, à condition que l’équipe l’adopte réellement et que les appareils soient disponibles en cuisine.',
  'Dans les deux cas, la qualité vient de la régularité de la saisie et de la revue des anomalies, pas de l’outil seul.'],

  related: ['quest-ce-que-haccp', 'checklists-nettoyage-desinfection']
}];