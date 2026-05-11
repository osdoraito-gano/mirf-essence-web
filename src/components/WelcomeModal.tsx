import { X } from 'lucide-react';

type Campaign = 'madres' | 'enfermeria' | null;

interface WelcomeModalProps {
  onClose: () => void;
  onNavigate: (view: string) => void;
  campaign: Campaign;
}

const WelcomeModal = ({ onClose, onNavigate, campaign }: WelcomeModalProps) => {
  if (!campaign) return null;

  const isMadres = campaign === 'madres';

  const config = {
    icon: isMadres ? 'fa-gift' : 'fa-heartbeat',
    emoji: isMadres ? '🌸' : '💉',
    date: isMadres ? '11 de Mayo' : '12 de Mayo',
    title: isMadres ? '¡Feliz Día\nde las Madres!' : '¡Feliz Día de\nla Enfermería!',
    description: isMadres
      ? 'Sorprende a mamá con la esencia que merece. Fragancias AAA y cilíndricas con descuentos especiales por lanzamiento.'
      : 'Gracias por cuidar de todos con tanta dedicación. Mereces rodearte de la mejor esencia. Fragancias AAA y cilíndricas con descuentos especiales para ti.',
    whatsappMessage: isMadres
      ? 'Hola MIRF essence, vi la promoción del Día de las Madres y quiero recibir más información sobre los descuentos y cómo pedir.'
      : 'Hola MIRF essence, vi la promoción del Día de la Enfermería y quiero recibir más información.',
  };

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
            <i className={`fas ${config.icon}`} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1A1A1D] to-transparent" />
        </div>

        <div className="p-8 pt-4 text-center">
          <span className="font-accent text-gold text-2xl italic">
            {config.emoji} {config.date}
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-gold mt-3 mb-4 whitespace-pre-line">
            {config.title}
          </h2>
          <p className="text-light/80 font-body mb-6">
            {config.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePromoClick}
              className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black font-display font-semibold rounded-full hover:bg-gold-light transition-all"
            >
              Ver Promoción
            </button>
            <a
              href={`https://wa.me/+584125592798?text=${encodeURIComponent(config.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-outline-premium inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold font-display font-semibold rounded-full hover:bg-gold/10 transition-all"
            >
              <i className="fab fa-whatsapp" /> Pedir por WhatsApp
            </a>
          </div>
          <p className="text-light/40 text-xs mt-6">
            *Promoción válida el {config.date.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;