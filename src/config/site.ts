// Central, replaceable brand + company configuration.
// All values can be overridden through environment variables at deploy time.
export const siteConfig = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || 'HACCP Maroc',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || '[Raison sociale à renseigner]',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '[Adresse de l’entreprise à renseigner]',
  // Left empty on purpose: contact details are only displayed when really configured.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  // Real professional WhatsApp number (international format, digits only). Empty = WhatsApp hidden.
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || '/api/leads',
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
  searchConsoleVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const hasWhatsapp = siteConfig.whatsappNumber.length >= 8;
export const hasEmail = siteConfig.contactEmail.includes('@');
