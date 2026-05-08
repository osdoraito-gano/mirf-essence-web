const ProductInfoSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0B0B0C] relative overflow-hidden">
      {/* Líneas decorativas sutiles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden md:block" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-accent text-gold/60 text-lg italic">Elige tu presentación</span>
          <h2 className="font-display text-4xl md:text-5xl text-gold mt-2 mb-4">
            Dos formas de llevar<br />la <span className="text-white">esencia</span> contigo
          </h2>
          <p className="font-body text-light/60 text-lg max-w-2xl mx-auto">
            La misma fragancia premium. Tú decides cómo expresarla.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* AAA / 1.1 */}
          <div className="group relative bg-[#1A1A1D] border border-[#2B2B2F] rounded-2xl p-8 hover:border-gold/40 transition-all duration-500 overflow-hidden">
            {/* Brillo de fondo al hover */}
            <div className="absolute -inset-1 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A15F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 10h8l-2 12H10L8 10z" />
                  <rect x="10" y="4" width="4" height="6" rx="1" />
                  <line x1="10" y1="10" x2="14" y2="10" />
                  <circle cx="12" cy="18" r="1" fill="#C9A15F" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-gold mb-4">Envases AAA / 1.1</h3>
              <p className="text-light/70 font-body leading-relaxed mb-6">
                Réplicas de lujo idénticas al diseño original. Para quienes buscan la experiencia premium completa, desde el primer vistazo hasta la última gota.
              </p>
              <ul className="space-y-2 text-light/60 text-sm font-body">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Diseño fiel al original
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Materiales de alta calidad
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Ideal para regalo
                </li>
              </ul>
            </div>
          </div>

          {/* Cilindros */}
          <div className="group relative bg-[#1A1A1D] border border-[#2B2B2F] rounded-2xl p-8 hover:border-gold/40 transition-all duration-500 overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A15F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="12" height="16" rx="6" />
                  <ellipse cx="12" cy="4" rx="6" ry="2" />
                  <ellipse cx="12" cy="20" rx="6" ry="2" />
                  <line x1="12" y1="6" x2="12" y2="18" strokeDasharray="2 2" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-gold mb-4">Cilindros 30/60/100 ml</h3>
              <p className="text-light/70 font-body leading-relaxed mb-6">
                Practicidad minimalista sin renunciar a la elegancia. Tres tamaños para adaptarse a tu día a día, tu bolsillo y tu esencia.
              </p>
              <ul className="space-y-2 text-light/60 text-sm font-body">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Fácil de transportar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Diseño discreto y elegante
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> Misma esencia premium
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-light/30 text-sm mt-16 font-accent italic">
          Cada frasco contiene la misma fragancia de alta calidad. Tú eliges cómo quieres vivirla.
        </p>
      </div>
    </section>
  );
};

export default ProductInfoSection;