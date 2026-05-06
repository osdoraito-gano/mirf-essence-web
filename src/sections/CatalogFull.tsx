import { useState } from 'react';
import { catalogData } from '../data/catalogData';

const WHATSAPP_NUMBER = "573001234567"; // Reemplaza con el real

const CatalogFull = () => {
  const [activeTab, setActiveTab] = useState<'caballeros' | 'damas' | 'unisex'>('caballeros');

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="catalogo" className="py-20 px-6 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center text-gold mb-4">
          Nuestra <span className="text-white">Colección Completa</span>
        </h2>
        <p className="text-center text-light/60 font-body mb-12">
          Elige entre cientos de referencias. Todas con garantía de calidad y disponibles en AAA y cilindros.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['caballeros', 'damas', 'unisex'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-2 rounded-full font-body text-sm uppercase tracking-wider transition ${
                activeTab === tab ? 'bg-gold text-black' : 'bg-[#1A1A1D] text-light/60 hover:bg-gold/20'
              }`}
            >
              {tab === 'caballeros' ? 'Caballeros' : tab === 'damas' ? 'Damas' : 'Unisex'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {catalogData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="card-premium flex flex-col items-center text-center p-4 group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain mb-4 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback a imagen genérica si no hay archivo
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100x100/1A1A1D/C9A15F?text=Perfume';
                }}
              />
              <h3 className="font-display text-sm text-gold mt-2">{item.brand}</h3>
              <p className="font-body text-xs text-light/80 mt-1">{item.name}</p>
              <button
                onClick={() => handleWhatsApp(item.whatsappMessage)}
                className="mt-4 flex items-center gap-2 text-xs bg-gold/10 text-gold px-4 py-1.5 rounded-full hover:bg-gold hover:text-black transition-all font-body"
              >
                <i className="fab fa-whatsapp" /> Pedir
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogFull;