export interface Perfume {
  brand: string;
  name: string;
  image: string;
  whatsappMessage: string;
}

export const catalogData: Record<'caballeros' | 'damas' | 'unisex', Perfume[]> = {
  caballeros: [
    { brand: "Paco Rabanne", name: "INVICTUS", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero Invictus" },
    { brand: "Paco Rabanne", name: "ONE MILLION", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero One Million" },
    { brand: "Carolina Herrera", name: "212 SEXY", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero 212 Sexy" },
    // ... añade el resto de tus perfumes de caballero
  ],
  damas: [
    { brand: "Bulgari", name: "OMNIA CORAL", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero Omnia Coral" },
    { brand: "Lancôme", name: "LA VIE EST BELLE", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero La Vie Est Belle" },
    { brand: "Carolina Herrera", name: "GOOD GIRL", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero Good Girl" },
    // ... añade el resto de tus perfumes de dama
  ],
  unisex: [
    { brand: "Armaf", name: "CLUB DE NUIT SILLAGE", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero Club de Nuit Sillage" },
    { brand: "Lattafa", name: "KHAMRAH", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero Khamrah" },
    { brand: "Orientica", name: "ROYAL", image: "/images/perfume-placeholder.png", whatsappMessage: "Hola MIRF, quiero Royal" },
    // ... añade el resto de tus perfumes unisex
  ],
};