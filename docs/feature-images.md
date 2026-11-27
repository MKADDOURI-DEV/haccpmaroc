# Images de la page Fonctionnalités

Les 20 images affichées sur la page `/features` se trouvent dans `public/images/features/`.
Chaque fichier porte l'identifiant de la fonctionnalité correspondante (`<id>.webp`), tel que déclaré dans `src/locales/fr.ts`, `en.ts` et `ar.ts` (`features.items[].id`).
Le mapping identifiant → image et les textes alternatifs FR / EN / AR sont dans `src/config/features.ts`.

## Origine et licence

- **Origine :** illustrations originales créées spécifiquement pour ce site (dessin vectoriel SVG généré par script, puis converti en WebP). Elles ne reprennent aucune image, aucun site concurrent, aucune banque d'images ni aucune marque.
- **Licence :** création originale réalisée pour le projet HACCP Maroc. Aucune source externe et aucune attribution requise. Utilisation commerciale libre pour le site.
- **Contenu :** aucun texte, aucun logo, aucun filigrane, aucune capture d'écran d'interface.

## Caractéristiques techniques

- Format WebP, 1600 × 1000 px (16:10), qualité 84, entre 15 et 33 Ko par image (446 Ko au total).
- Palette alignée sur le site : bleu nuit `#0F2A43`, vert `#2FA36B`, fond `#F7FAF8` / `#E6EFEA`.
- Éléments importants placés dans la zone centrale, pour rester visibles avec `object-cover object-center` dans le panneau (format environ 2:1 sur ordinateur, environ 4:3 sur mobile).

## Correspondance

| ID | Fonctionnalité | Fichier | Contenu de l'image |
|---|---|---|---|
| reception | Réception des marchandises | reception.webp | Camion ouvert, caisses de produits, liste de contrôle, thermomètre, appareil photo |
| temp | Suivi des températures | temp.webp | Réfrigérateur double porte, congélateur coffre, écran de suivi des températures |
| thaw | Décongélation | thaw.webp | Produit en décongélation au réfrigérateur, sonde, minuteur |
| clean | Nettoyage et désinfection (PND) | clean.webp | Plan de travail inox, pulvérisateur, seau, balai, planning de nettoyage |
| metro | Métrologie et vérification des instruments | metro.webp | Bain de glace avec sondes, cadran de tolérance, instruments contrôlés |
| oil | Contrôle des huiles de friture | oil.webp | Friteuse, testeur de composés polaires, bandelettes de test |
| hau | Collecte des huiles alimentaires usagées (HAU) | hau.webp | Bidons d'huile usagée, entonnoir, fût, véhicule de collecte |
| labels | Étiquetage des produits | labels.webp | Imprimante d'étiquettes, bacs alimentaires étiquetés |
| production | Gestion de la production | production.webp | Planche à découper, bols d'ingrédients, marmite, fiche de production |
| trace | Gestion des lots et traçabilité | trace.webp | Lots codés reliés au produit fini, loupe, lot expiré bloqué |
| sousvide | Gestion des produits sous-vide | sousvide.webp | Machine sous-vide, sachets sous-vide empilés |
| iot | Surveillance connectée IoT | iot.webp | Capteur connecté sur réfrigérateur, passerelle, tablette avec alerte |
| suppliers | Gestion des fournisseurs | suppliers.webp | Entrepôt fournisseur, fiches fournisseurs avec statut de validation |
| catalog | Gestion des articles, catégories et allergènes | catalog.webp | Étagères classées par catégorie, pictogrammes d'allergènes |
| equipment | Gestion des équipements et des zones | equipment.webp | Plan de cuisine par zones, équipements repérés |
| cleaningProducts | Gestion des produits de nettoyage | cleaningProducts.webp | Produits de nettoyage et désinfection, gants, lunettes |
| users | Gestion des utilisateurs et des permissions | users.webp | Profils administrateur, manager, équipe, permissions, cadenas |
| alerts | Notifications et alertes | alerts.webp | Smartphone avec notifications, cloche, panneau d'avertissement |
| docs | Gestion documentaire | docs.webp | Dossier, document signé, photo jointe, justificatif validé |
| history | Historique et suivi des opérations | history.webp | Chronologie des opérations, horloge, calendrier, loupe |

## Remplacer une image

Déposer un nouveau fichier du même nom dans `public/images/features/` (WebP recommandé, format 16:10, sujet centré). Aucune modification de code n'est nécessaire.
