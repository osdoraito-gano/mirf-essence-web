const ProductInfoSection = () => {
  return (
    <section className="py-16 px-6 bg-[#0B0B0C]">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center text-gold mb-16">
          Dos formas de llevar<br />la <span className="text-white">esencia</span> contigo
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* AAA / 1.1 */}
          <div className="text-center md:text-left group">
            <div className="w-32 h-32 mx-auto md:mx-0 mb-6 rounded-full bg-[#1A1A1D] border border-gold/30 flex items-center justify-center group-hover:border-gold transition-all duration-500">
              {/* Icono de frasco de lujo (SVG simple) */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C9A15F" strokeWidth="1.5">
                <path d="M20 28h24l-4 26H24l-4-26z" />
                <rect x="26" y="12" width="12" height="16" rx="2" />
                <line x1="22" y1="28" x2="42" y2="28" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-gold mb-4">Envases AAA / 1.1</h3>
            <p className="text-light/70 font-body leading-relaxed">
              Réplicas de lujo idénticas al diseño original. Misma calidad visual y olfativa, perfectas para regalo o para sentir la experiencia premium.
            </p>
          </div>

          {/* Cilindros */}
          <div className="text-center md:text-left group">
            <div className="w-32 h-32 mx-auto md:mx-0 mb-6 rounded-full bg-[#1A1A1D] border border-gold/30 flex items-center justify-center group-hover:border-gold transition-all duration-500">
              {/* Icono de cilindro */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C9A15F" strokeWidth="1.5">
                <rect x="20" y="14" width="24" height="36" rx="12" />
                <ellipse cx="32" cy="14" rx="12" ry="4" />
                <ellipse cx="32" cy="50" rx="12" ry="4" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-gold mb-4">Cilindros 30/60/100 ml</h3>
            <p className="text-light/70 font-body leading-relaxed">
              Practicidad y elegancia minimalista. Disponibles en tres tamaños para que elijas el que mejor se adapta a tu día a día o a tu presupuesto.
            </p>
          </div>
        </div>

        <p className="text-center text-light/50 text-sm mt-16 font-accent italic">
          Cada presentación incluye el mismo perfume de alta calidad. Tú decides cómo llevarlo.
        </p>
      </div>
    </section>
  );
};

export default ProductInfoSection;