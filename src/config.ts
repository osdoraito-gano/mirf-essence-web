// ============================================================================
// SITE CONFIGURATION - ESSENCE PERFUMES PREMIUM
// ============================================================================
// Embudo de ventas para perfumes y lociones con redirección a WhatsApp
// ============================================================================

// Número de WhatsApp para pedidos (cambiar por tu número real)
const WHATSAPP_NUMBER = "521234567890";
const WHATSAPP_MESSAGE = "Hola, estoy interesado en los perfumes Essence. Me gustaría recibir más información.";

// Enlaces de pago (ejemplos - reemplazar con tus enlaces reales)
const PAYMENT_LINK = "https://pay.stripe.com/..."; // Tu enlace de pasarela de pago

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "ESSENCE",
  logoAccent: "®",
  navLinks: [
    { label: "Colección", href: "#products" },
    { label: "Fragancias", href: "#palette" },
    { label: "Nosotros", href: "#finale" },
  ],
  ctaText: "Comprar Ahora",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  goldCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "TU DEFINES",
  titleLine2: "TU ESENCIA",
  subtitle: "Descubre nuestra colección exclusiva de fragancias premium diseñadas para dejar una impresión inolvidable. Cada nota cuenta tu historia.",
  ctaText: "Ver Colección",
  ctaHref: "#products",
  backgroundImage: "/images/hero.jpg",
  gridRows: 6,
  gridCols: 8,
  goldCells: [
    { row: 0, col: 2 },
    { row: 1, col: 5 },
    { row: 2, col: 0 },
    { row: 3, col: 7 },
    { row: 4, col: 3 },
    { row: 5, col: 6 },
  ],
};

// ----------------------------------------------------------------------------
// Product Showcase Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  ctaHref: string;
  whatsappCta: string;
  whatsappHref: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "PRODUCTO DESTACADO",
  headingMain: "AURUM",
  headingAccent: "ROSA",
  productName: "Eau de Parfum 100ml",
  description: "Una fragancia oriental-amaderada que combina notas de rosa búlgara, ámbar dorado y sándalo de Mysore. Diseñada para quienes buscan elegancia atemporal y sofisticación en cada gota.",
  price: "$2,499 MXN",
  features: [
    { value: "12H", label: "Duración" },
    { value: "100ml", label: "Contenido" },
    { value: "EDP", label: "Concentración" },
  ],
  colorSwatches: ["#D4AF37", "#FF69B4", "#8B4513", "#1a1a1a"],
  colorSwatchesLabel: "Colección de Fragancias",
  ctaText: "Comprar Ahora",
  ctaHref: PAYMENT_LINK,
  whatsappCta: "Pedir por WhatsApp",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  productImage: "/images/product-perfume.png",
  productImageAlt: "Perfume Aurum Rosa - Essence Premium",
  decorativeText: "ESSENCE",
};

// ----------------------------------------------------------------------------
// Color Palette Section - Colección de Fragancias
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
  price: string;
  whatsappLink: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "NUESTRA COLECCIÓN",
  headingMain: "FRAGANCIAS",
  headingAccent: "SIGNATURE",
  colors: [
    {
      name: "Aurum Rosa",
      nameSecondary: "Oriental Floral",
      color: "#D4AF37",
      description: "Rosa búlgara, ámbar dorado, sándalo",
      price: "$2,499",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero comprar Aurum Rosa")}`,
    },
    {
      name: "Velvet Noir",
      nameSecondary: "Amaderado Intenso",
      color: "#1a1a1a",
      description: "Pachulí, vainilla negra, cuero",
      price: "$2,299",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero comprar Velvet Noir")}`,
    },
    {
      name: "Pink Saffron",
      nameSecondary: "Floral Especiado",
      color: "#FF69B4",
      description: "Azafrán, peonía, almizcle blanco",
      price: "$2,199",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero comprar Pink Saffron")}`,
    },
    {
      name: "Cedar Gold",
      nameSecondary: "Amaderado Cítrico",
      color: "#8B4513",
      description: "Bergamota, cedro, vetiver",
      price: "$1,999",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero comprar Cedar Gold")}`,
    },
    {
      name: "Midnight Oud",
      nameSecondary: "Oriental Intenso",
      color: "#2F1B14",
      description: "Oud, incienso, rosas negras",
      price: "$2,799",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero comprar Midnight Oud")}`,
    },
    {
      name: "Crystal Bloom",
      nameSecondary: "Floral Fresco",
      color: "#E8E8E8",
      description: "Lirio blanco, neroli, almizcle",
      price: "$1,899",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero comprar Crystal Bloom")}`,
    },
  ],
  bottomText: "Haz clic en cualquier fragancia para pedir por WhatsApp",
  decorativeText: "COLLECTION",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  whatsappCta: string;
  whatsappHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "FILOSOFÍA DE MARCA",
  headingMain: "LA ESENCIA",
  headingAccent: "DEL LUJO",
  tagline: "Cada fragancia Essence es una obra maestra creada con los ingredientes más finos del mundo. Nuestros perfumistas expertos combinan arte y ciencia para capturar emociones en cada frasco. Porque tu presencia merece ser recordada.",
  features: [
    "Ingredientes 100% originales",
    "Cruelty-free & Vegan",
    "Envío gratis en compras +$1,500",
    "Muestra gratis con cada pedido",
  ],
  ctaText: "Comprar Colección",
  ctaHref: PAYMENT_LINK,
  whatsappCta: "Asesoría Personalizada",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me gustaría recibir asesoría personalizada para elegir mi fragancia")}`,
  image: "/images/brand-portrait.jpg",
  imageAlt: "Modelo con perfume Essence - Elegancia y sofisticación",
  decorativeText: "LUXURY",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
  whatsappCta: string;
  whatsappHref: string;
}

export const footerConfig: FooterConfig = {
  logo: "ESSENCE",
  logoAccent: "®",
  brandDescription: "Fragancias premium diseñadas para quienes entienden que el verdadero lujo está en los detalles.",
  socialLinks: [
    { platform: "instagram", href: "https://instagram.com/essence", label: "Instagram" },
    { platform: "twitter", href: "https://twitter.com/essence", label: "Twitter" },
    { platform: "youtube", href: "https://youtube.com/essence", label: "YouTube" },
  ],
  linkSections: [
    {
      title: "Colección",
      links: ["Aurum Rosa", "Velvet Noir", "Pink Saffron", "Cedar Gold", "Midnight Oud"],
    },
    {
      title: "Atención al Cliente",
      links: ["Envíos y Entregas", "Devoluciones", "Preguntas Frecuentes", "Rastrear Pedido"],
    },
    {
      title: "Empresa",
      links: ["Sobre Nosotros", "Carreras", "Prensa", "Contacto"],
    },
  ],
  contact: {
    address: "Barinas-Venezuela",
    phone: "+58 424-1234567",
    email: "hola@essenceperfumes.com",
  },
  legalLinks: [
    { label: "Términos de Servicio", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Aviso Legal", href: "#" },
  ],
  copyrightText: "MIRF Essence. Todos los derechos reservados.",
  decorativeText: "ESSENCE",
  whatsappCta: "Pedir por WhatsApp",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Essence - Perfumes Premium | Fragancias de Lujo",
  description: "Descubre nuestra colección exclusiva de fragancias premium. Perfumes de autor con ingredientes finos del mundo. contactanos y acordamos tu pedido por WhatsApp.",
  language: "es",
};
