// Central, replaceable brand + company configuration.
// All values can be overridden through environment variables at deploy time.
export const siteConfig = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || 'HACCP Maroc',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || '[Raison sociale à renseigner]',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '[Adresse de l’entreprise à renseigner]',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@votre-domaine.ma',
  // Placeholder only — replace with the real WhatsApp number (international format, digits only).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212600000000',
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || '/api/leads',
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
  searchConsoleVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;