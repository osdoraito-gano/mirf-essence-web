const ProductInfoSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0B0B0C]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">
            Dos formas de llevar<br />la <span className="text-white">esencia</span> contigo
          </h2>
          <p className="font-body text-light/60 text-lg max-w-2xl mx-auto">
            Cada presentación incluye el mismo perfume de alta calidad. Tú decides cómo llevarlo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* AAA / 1.1 */}
          <div className="group relative bg-[#1A1A1D] border border-[#2B2B2F] rounded-2xl p-8 hover:border-gold/50 transition-all duration-500">
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              {/* Ícono de frasco de lujo */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A15F" strokeWidth="1.5">
                <path d="M8 10h8l-2 12H10L8 10z" />
                <rect x="10" y="4" width="4" height="6" rx="1" />
                <line x1="10" y1="10" x2="14" y2="10" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-gold mt-4 mb-4">Envases AAA / 1.1</h3>
            <p className="text-light/70 font-body leading-relaxed">
              Réplicas de lujo idénticas al diseño original. Misma calidad visual y olfativa, perfectas para regalo o para sentir la experiencia premium.
            </p>
            <ul className="mt-6 space-y-2 text-light/60 text-sm font-body">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Diseño fiel al original</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Materiales de alta calidad</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Ideal para ocasiones especiales</li>
            </ul>
          </div>

          {/* Cilindros */}
          <div className="group relative bg-[#1A1A1D] border border-[#2B2B2F] rounded-2xl p-8 hover:border-gold/50 transition-all duration-500">
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              {/* Ícono de cilindro */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A15F" strokeWidth="1.5">
                <rect x="6" y="4" width="12" height="16" rx="6" />
                <ellipse cx="12" cy="4" rx="6" ry="2" />
                <ellipse cx="12" cy="20" rx="6" ry="2" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-gold mt-4 mb-4">Cilindros 30/60/100 ml</h3>
            <p className="text-light/70 font-body leading-relaxed">
              Practicidad y elegancia minimalista. Disponibles en tres tamaños para que elijas el que mejor se adapta a tu día a día o a tu presupuesto.
            </p>
            <ul className="mt-6 space-y-2 text-light/60 text-sm font-body">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Fácil de transportar</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Diseño minimalista</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Misma fragancia premium</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-light/40 text-sm mt-12 font-accent italic">
          Cada presentación incluye el mismo perfume de alta calidad. Tú decides cómo llevarlo.
        </p>
      </div>
    </section>
  );
};

export default ProductInfoSection;