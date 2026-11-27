// Icons and illustrations for the application modules listed in
// t.features.items (src/locales/*.ts). Keys must match item ids exactly.
// Images: original illustrations stored in public/images/features/<id>.webp
// (see docs/feature-images.md for their origin and licence).

import type { LangCode } from '@/context/LanguageContext';

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

type FeatureImage = { src: string; alt: Record<LangCode, string> };

const img = (id: string, fr: string, en: string, ar: string): FeatureImage => ({
  src: `/images/features/${id}.webp`,
  alt: { fr, en, ar },
});

export const featureImages: Record<string, FeatureImage> = {
  reception: img(
    'reception',
    'Camion de livraison ouvert, caisses de fruits et légumes, liste de contrôle, thermomètre et appareil photo',
    'Open delivery truck, crates of produce, checklist, thermometer and camera',
    'شاحنة توصيل مفتوحة وصناديق خضر وفواكه وقائمة مراقبة وميزان حرارة وآلة تصوير',
  ),
  temp: img(
    'temp',
    'Réfrigérateur double porte, congélateur coffre et écran de suivi des températures',
    'Double-door refrigerator, chest freezer and temperature monitoring display',
    'ثلاجة ببابين ومجمد أفقي وشاشة لمتابعة درجات الحرارة',
  ),
  thaw: img(
    'thaw',
    'Produit en décongélation au réfrigérateur avec sonde de température et minuteur',
    'Product thawing in a refrigerator with a temperature probe and timer',
    'منتج في طور إذابة التجميد داخل الثلاجة مع مسبار حرارة ومؤقت',
  ),
  clean: img(
    'clean',
    'Plan de travail en inox, pulvérisateur, seau, balai et planning de nettoyage validé',
    'Stainless steel worktop, spray bottle, bucket, mop and completed cleaning schedule',
    'طاولة عمل من الفولاذ المقاوم للصدأ ورشاش ودلو وممسحة وجدول تنظيف منجز',
  ),
  metro: img(
    'metro',
    'Bain de glace avec sondes, cadran de tolérance et instruments de mesure contrôlés',
    'Ice bath with probes, tolerance dial and checked measuring instruments',
    'حمام ثلج مع مسابير ومؤشر هامش التسامح وأجهزة قياس مراقبة',
  ),
  oil: img(
    'oil',
    'Friteuse professionnelle, testeur de composés polaires et bandelettes de contrôle de l’huile',
    'Professional fryer, polar compound tester and oil test strips',
    'مقلاة احترافية وجهاز قياس المركبات القطبية وشرائط اختبار الزيت',
  ),
  hau: img(
    'hau',
    'Bidons d’huile usagée, entonnoir, fût de collecte et véhicule de collecte',
    'Used cooking oil containers, funnel, collection drum and collection van',
    'عبوات زيت الطهي المستعمل وقمع وبرميل جمع وشاحنة جمع',
  ),
  labels: img(
    'labels',
    'Imprimante d’étiquettes et bacs alimentaires étiquetés',
    'Label printer and labelled food containers',
    'طابعة ملصقات وعلب أغذية عليها ملصقات',
  ),
  production: img(
    'production',
    'Planche à découper, bols d’ingrédients, marmite et fiche de production',
    'Cutting board, ingredient bowls, cooking pot and production sheet',
    'لوح تقطيع وأوعية مكونات وقدر وبطاقة إنتاج',
  ),
  trace: img(
    'trace',
    'Lots identifiés par codes reliés au produit fini, loupe et lot expiré bloqué',
    'Coded batches linked to the finished product, magnifier and blocked expired batch',
    'دفعات معرفة برموز مرتبطة بالمنتج النهائي وعدسة مكبرة ودفعة منتهية الصلاحية موقوفة',
  ),
  sousvide: img(
    'sousvide',
    'Machine sous-vide scellant une pièce de viande et sachets sous-vide empilés',
    'Vacuum sealer packing a cut of meat and stacked vacuum-packed pouches',
    'آلة تعبئة تحت الفراغ تغلف قطعة لحم وأكياس معبأة تحت الفراغ',
  ),
  iot: img(
    'iot',
    'Réfrigérateur équipé d’un capteur connecté transmettant ses relevés à une tablette avec alerte',
    'Refrigerator with a connected sensor sending readings to a tablet with an alert',
    'ثلاجة مزودة بمستشعر متصل يرسل القراءات إلى لوحة رقمية مع تنبيه',
  ),
  suppliers: img(
    'suppliers',
    'Entrepôt fournisseur et fiches fournisseurs avec statut de validation',
    'Supplier warehouse and supplier records with approval status',
    'مستودع مورد وبطاقات موردين مع وضعية الاعتماد',
  ),
  catalog: img(
    'catalog',
    'Étagères d’articles classés par catégorie et pictogrammes d’allergènes',
    'Shelves of items sorted by category and allergen icons',
    'رفوف مواد مصنفة حسب الفئات ورموز مسببات الحساسية',
  ),
  equipment: img(
    'equipment',
    'Plan de cuisine découpé en zones avec équipements repérés',
    'Kitchen floor plan divided into zones with located equipment',
    'مخطط مطبخ مقسم إلى مناطق مع تحديد مواقع المعدات',
  ),
  cleaningProducts: img(
    'cleaningProducts',
    'Étagère de produits de nettoyage et de désinfection, gants et lunettes de protection',
    'Shelf of cleaning and disinfection products, gloves and safety goggles',
    'رف مواد التنظيف والتطهير وقفازات ونظارات واقية',
  ),
  users: img(
    'users',
    'Profils administrateur, manager et équipe avec leurs permissions et un cadenas',
    'Administrator, manager and team profiles with their permissions and a padlock',
    'ملفات المسؤول والمدير والفريق مع صلاحياتهم وقفل',
  ),
  alerts: img(
    'alerts',
    'Smartphone affichant des notifications, cloche d’alerte et panneau d’avertissement',
    'Smartphone showing notifications, alert bell and warning sign',
    'هاتف ذكي يعرض إشعارات وجرس تنبيه وعلامة تحذير',
  ),
  docs: img(
    'docs',
    'Dossier de documents avec signature, photo jointe et justificatif validé',
    'Document folder with signature, attached photo and approved record',
    'ملف وثائق مع توقيع وصورة مرفقة ومستند مثبت',
  ),
  history: img(
    'history',
    'Chronologie des opérations avec utilisateurs, horloge, calendrier et loupe',
    'Timeline of operations with users, clock, calendar and magnifier',
    'تسلسل زمني للعمليات مع المستخدمين وساعة وتقويم وعدسة مكبرة',
  ),
};
