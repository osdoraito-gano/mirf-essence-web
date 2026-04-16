import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WhatsAppFloatProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppFloat = ({ phoneNumber, message = "Hola, estoy interesado en sus productos." }: WhatsAppFloatProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-green-500 text-black font-display font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:bg-green-400 hover:scale-105 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
