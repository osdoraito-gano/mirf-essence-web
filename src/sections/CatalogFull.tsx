import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { catalogData } from '../data/catalogData';

const WHATSAPP_NUMBER = "+584125592798";

const CatalogFull = () => {
  const [activeTab, setActiveTab] = useState<'caballeros' | 'damas' | 'unisex'>('caballeros');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPerfumes = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return catalogData[activeTab];
    return catalogData[activeTab].filter(
      (p) =>
        p.brand.toLowerCase().includes(term) ||
        p.name.toLowerCase().includes(term)
    );
  }, [activeTab, searchTerm]);

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="catalogo" className="py-20 px-6 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">
            Nuestra <span className="text-white">Colección Completa</span>
          </h2>
          <p className="font-body text-light/60 text-lg max-w-2xl mx-auto">
            Elige entre cientos de referencias. Todas con garantía de calidad y disponibles en AAA y cilindros.
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="relative max-w-md mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gold/50" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar perfume o marca..."
            className="w-full pl-11 pr-4 py-3 bg-[#1A1A1D] border border-[#2B2B2F] rounded-full text-light/80 font-body text-sm placeholder:text-light/30 focus:outline-none focus:border-gold/60 transition-colors duration-300"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['caballeros', 'damas', 'unisex'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as any);
                setSearchTerm('');
              }}
              className={`px-8 py-2 rounded-full font-body text-sm uppercase tracking-wider transition ${
                activeTab === tab
                  ? 'bg-gold text-black'
                  : 'bg-[#1A1A1D] text-light/60 hover:bg-gold/20'
              }`}
            >
              {tab === 'caballeros' ? 'Caballeros' : tab === 'damas' ? 'Damas' : 'Unisex'}
            </button>
          ))}
        </div>

        {/* Resultados */}
        {filteredPerfumes.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-accent text-2xl text-gold/40 italic">
              No encontramos "{searchTerm}"
            </p>
            <p className="font-body text-light/40 mt-2 text-sm">
              Prueba con otro nombre o marca
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPerfumes.map((item, idx) => (
              <div
                key={idx}
                className="card-premium flex flex-col items-center text-center p-4 group"
              >
                <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/100x100/1A1A1D/C9A15F?text=Perfume';
                    }}
                  />
                </div>
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
        )}
      </div>
    </section>
  );
};

export default CatalogFull;