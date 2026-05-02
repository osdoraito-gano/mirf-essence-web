// ============================================================================
// SITE CONFIGURATION - MIRF ESSENCE
// ============================================================================

// Número de WhatsApp para pedidos (CAMBIAR por el número real)
const WHATSAPP_NUMBER = "+584125592798";
const WHATSAPP_MESSAGE = "Hola MIRF essence, estoy interesado en sus perfumes. Me gustaría recibir más información.";

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------
export const siteConfig = {
  title: "MIRF essence · Perfumería de lujo accesible",
  description: "Descubre fragancias exclusivas en presentaciones cilíndricas 30ml, 60ml, 100ml y envases AAA. Tu defines tu esencia.",
  language: "es",
};

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------
export const navigationConfig = {
  logo: "MIRF",
  logoAccent: "essence",
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Esencia", href: "#finale" },
  ],
  ctaText: "Pedir Ahora",
};

// ----------------------------------------------------------------------------
// Hero Cinematic
// ----------------------------------------------------------------------------
export const heroCinematicConfig = {
  slides: [
    {
      id: 1,
      titleLine1: "TU DEFINES",
      titleLine2: "TU ESENCIA",
      subtitle: "Fragancias exclusivas que reflejan tu estilo. Lujo accesible en cada nota.",
      ctaText: "Descubrir",
      ctaHref: "#catalogo",
      image: "/images/hero-slide1.png",
    },
    {
      id: 2,
      titleLine1: "ENCUENTRA",
      titleLine2: "TU AROMA",
      subtitle: "Cada fragancia está diseñada para una ocasión especial. Encuentra la tuya.",
      ctaText: "Explorar Notas",
      ctaHref: "#products",
      image: "/images/hero-slide2.png",
    },
    {
      id: 3,
      titleLine1: "EXPRESA",
      titleLine2: "TU PODER",
      subtitle: "Porque el lujo no es un precio, es una actitud. Vive la experiencia MIRF.",
      ctaText: "Ver Colección",
      ctaHref: "#catalogo",
      image: "/images/hero-slide3.png",
    },
  ],
};

// ----------------------------------------------------------------------------
// Product Showcase
// ----------------------------------------------------------------------------
export const productShowcaseConfig = {
  sectionLabel: "PRODUCTO DESTACADO",
  headingMain: "COLECCIÓN",
  headingAccent: "ORO",
  productName: "Eau de Parfum · 100ml",
  description: "Una fusión de notas amaderadas y especias orientales, encapsulada en un frasco que evoca el lujo atemporal. Ideal para quienes buscan distinción sin comprometer su esencia.",
  price: "Desde $89.900",
  features: [
    { value: "30ml", label: "Cilindro" },
    { value: "60ml", label: "Intermedio" },
    { value: "100ml", label: "Grande" },
    { value: "AAA", label: "Envase Lujo" },
  ],
  colorSwatches: ["#C9A15F", "#1A1A1D", "#F5F3EF", "#0B0B0C"],
  colorSwatchesLabel: "Presentaciones disponibles",
  ctaText: "Comprar Ahora",
  ctaHref: "#",
  whatsappCta: "Pedir por WhatsApp",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF essence, quiero información sobre la Colección Oro")}`,
  productImage: "/images/product-perfume.png",
  productImageAlt: "Perfume MIRF essence - Colección Oro",
  decorativeText: "MIRF",
};

// ----------------------------------------------------------------------------
// Color Palette (Catálogo de fragancias)
// ----------------------------------------------------------------------------
export const colorPaletteConfig = {
  sectionLabel: "NUESTRA COLECCIÓN",
  headingMain: "FRAGANCIAS",
  headingAccent: "SIGNATURE",
  colors: [
    {
      name: "Invictus",
      nameSecondary: "Paco Rabanne",
      color: "#C9A15F",
      description: "Notas marinas, pomelo, laurel y ámbar gris. Fresca y poderosa.",
      price: "Desde $79.900",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF, quiero información sobre Invictus")}`,
    },
    {
      name: "Good Girl",
      nameSecondary: "Carolina Herrera",
      color: "#1A1A1D",
      description: "Almendra, café, jazmín y haba tonka. Elegante y audaz.",
      price: "Desde $89.900",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF, quiero información sobre Good Girl")}`,
    },
    {
      name: "Yara",
      nameSecondary: "Lattafa",
      color: "#E5C98B",
      description: "Frutas tropicales, vainilla, musk y sándalo. Dulce y envolvente.",
      price: "Desde $69.900",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF, quiero información sobre Yara")}`,
    },
    {
      name: "9 PM",
      nameSecondary: "Afnan",
      color: "#2B2B2F",
      description: "Manzana, canela, vainilla y ámbar. Cálida y sofisticada.",
      price: "Desde $74.900",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF, quiero información sobre 9 PM")}`,
    },
    {
      name: "Sauvage",
      nameSecondary: "Dior",
      color: "#0B0B0C",
      description: "Bergamota, pimienta, lavanda y ámbar. Fresca y salvaje.",
      price: "Desde $94.900",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF, quiero información sobre Sauvage")}`,
    },
    {
      name: "Club de Nuit",
      nameSecondary: "Armaf",
      color: "#C9A15F",
      description: "Piña, bergamota, rosa y almizcle. Intensa y duradera.",
      price: "Desde $79.900",
      whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF, quiero información sobre Club de Nuit")}`,
    },
  ],
  bottomText: "Haz clic en cualquier fragancia para pedir por WhatsApp · Envíos a toda Venezuela",
  decorativeText: "COLLECTION",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy
// ----------------------------------------------------------------------------
export const finaleConfig = {
  sectionLabel: "FILOSOFÍA MIRF",
  headingMain: "LA ESENCIA",
  headingAccent: "DEL LUJO",
  tagline: "Creemos que el lujo no debe ser inalcanzable. Cada fragancia MIRF está diseñada para realzar tu presencia sin comprometer tu esencia. Nuestros perfumes combinan ingredientes premium con diseño exclusivo, a un precio que te permite multiplicar tu estilo.",
  features: [
    "Ingredientes premium seleccionados",
    "Diseño exclusivo tipo joya",
    "Precio justo para emprendedores",
    "Envíos a toda Colombia",
  ],
  ctaText: "Ver Colección",
  ctaHref: "#catalogo",
  whatsappCta: "Asesoría Personalizada",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola MIRF essence, me gustaría recibir asesoría personalizada para elegir mi fragancia")}`,
  image: "/images/brand-portrait.jpg",
  imageAlt: "MIRF essence - Elegancia y sofisticación",
  decorativeText: "LUXURY",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------
export const footerConfig = {
  logo: "MIRF",
  logoAccent: "essence",
  brandDescription: "Lujo accesible en cada gota. Fragancias premium diseñadas para emprendedores que entienden que el verdadero estilo está en los detalles.",
  socialLinks: [
    { platform: "instagram", href: "https://instagram.com/mirfessence", label: "Instagram" },
    { platform: "tiktok", href: "https://tiktok.com/@mirfessence", label: "TikTok" },
  ],
  linkSections: [
    {
      title: "Colección",
      links: ["Caballeros", "Damas", "Unisex", "Presentaciones AAA"],
    },
    {
      title: "Atención al Cliente",
      links: ["Envíos y Entregas", "Preguntas Frecuentes", "Mayoristas", "Contacto"],
    },
    {
      title: "MIRF",
      links: ["Sobre Nosotros", "Filosofía", "Catálogo", "Blog"],
    },
  ],
  contact: {
    address: "Barinas - Venezuela",
    phone: "+584125592798",
    email: "hola@mirfessence.com",
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