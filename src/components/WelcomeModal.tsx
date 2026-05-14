import { X } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
  onNavigate: (view: string) => void;
}

const WelcomeModal = ({ onClose, onNavigate }: WelcomeModalProps) => {
  const handlePromoClick = () => {
    onNavigate('promos');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative bg-[#1A1A1D] border border-gold/30 rounded-2xl max-w-lg w-full shadow-gold-lg animate-slide-up overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gold/60 hover:text-gold transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative h-48 bg-gradient-to-b from-[#0B0B0C] to-[#1A1A1D] flex items-center justify-center">
          <div className="text-6xl text-gold/30">
            <i className="fas fa-spray-can-sparkles" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1A1A1D] to-transparent" />
        </div>

        <div className="p-8 pt-4 text-center">
          <span className="font-accent text-gold text-2xl italic">✨ Bienvenido a</span>
          <h2 className="font-display text-3xl md:text-4xl text-gold mt-3 mb-4">
            MIRF essence
          </h2>
          <p className="text-light/80 font-body mb-6">
            Descubre la nueva forma de vivir las fragancias. Lujo accesible, esencia única. 
            <strong className="text-gold"> Promoción especial de lanzamiento</strong> durante todo mayo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePromoClick}
              className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black font-display font-semibold rounded-full hover:bg-gold-light transition-all"
            >
              Ver Promociones
            </button>
            <a
              href={`https://wa.me/+584125592798?text=${encodeURIComponent("Hola MIRF essence, quiero conocer más sobre sus perfumes y promociones.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-outline-premium inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold font-display font-semibold rounded-full hover:bg-gold/10 transition-all"
            >
              <i className="fab fa-whatsapp" /> Contactar
            </a>
          </div>
          <p className="text-light/40 text-xs mt-6">
            *Promoción válida hasta el 31 de mayo de 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;