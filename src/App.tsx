import { useState, useCallback } from 'react'
import Navbar from "./components/Navbar"
import CustomCursor from './components/CustomCursor'
import WhatsAppFloat from './components/WhatsAppFloat'
import WelcomeModal from './components/WelcomeModal'

import HeroCinematic from './sections/HeroCinematic'
import ProductInfoSection from './sections/ProductInfoSection'
import ProductShowcase from './sections/ProductShowcase'
import ColorPalette from './sections/ColorPalette'
import CatalogFull from './sections/CatalogFull'
import Finale from './sections/Finale'
import Footer from './sections/Footer'


// Función original (se usará cuando no quieras forzar)
const getActiveCampaign = (): 'madres' | 'enfermeria' | null => {
  // Si hay una campaña forzada, la devuelve directamente

  
  const today = new Date();
  if (today >= new Date('2025-05-12')) {
    return 'enfermeria';
  }
  return null;
};

function App() {
  const [activeView, setActiveView] = useState<'home' | 'catalog' | 'promos' | 'about'>('home');
  const [modalClosed, setModalClosed] = useState(false);

  const campaign = getActiveCampaign();
  const showModal = campaign !== null && !modalClosed;

  const handleNavigate = useCallback((view: string) => {
    setActiveView(view as any);
    // Al navegar a 'home' mostramos el modal de nuevo si la campaña está activa
    if (view === 'home') {
      setModalClosed(false);
    }
  }, []);

  const handleCloseModal = () => setModalClosed(true);

  return (
    <div className="relative bg-[#0B0B0C] min-h-screen overflow-x-hidden">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar activeView={activeView} onNavigate={handleNavigate} />

      {/* Modal de campaña (controlado por FORCE_CAMPAIGN o fecha) */}
      {showModal && (
        <WelcomeModal
          campaign={campaign}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}

      <main className="relative">
        {activeView === 'home' && (
          <>
            <HeroCinematic onNavigate={handleNavigate} onScrollTo={(id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} />
            <ProductShowcase />
            <ColorPalette />
            <Finale />
          </>
        )}

        {activeView === 'catalog' && (
          <>
            <ProductInfoSection />
            <CatalogFull />
          </>

        )}
        {activeView === 'promos' && (
          <section id="promos" className="min-h-screen bg-[#0B0B0C] py-16 px-6">
            <div className="max-w-3xl mx-auto">
              
              {/* Fecha y título */}
              <div className="text-center mb-12">
                <span className="font-accent text-gold/80 text-xl italic">12 de Mayo</span>
                <h2 className="font-display text-4xl md:text-5xl text-gold mt-2 mb-4">
                  Día Internacional<br />de los Enfermeros
                </h2>
                <p className="font-body text-light/70 text-lg max-w-xl mx-auto">
                  Gracias por cuidar, inspirar y transformar vidas cada día.
                </p>
              </div>

              {/* Tarjeta de la oferta */}
              <div className="bg-[#1A1A1D] border border-gold/30 rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden">
                {/* Brillo decorativo */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="font-display text-2xl md:text-3xl text-white text-center mb-8">
                    Aprovecha la compra de tu perfume favorito<br />en presentación de <span className="text-gold">30 ml</span>
                  </h3>
                  
                  {/* Precio único */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-[#0B0B0C] rounded-xl p-8 text-center border border-gold/40 max-w-xs w-full">
                      <span className="font-accent text-gold/60 text-sm italic">Por solo</span>
                      <p className="font-display text-6xl md:text-7xl text-gold mt-2">$9</p>
                      <p className="font-body text-light/50 text-sm mt-2">cada 30 ml</p>
                    </div>
                  </div>

                  <p className="text-center font-body text-light/40 text-xs mb-8">
                    *Esencia en referencias seleccionadas · Promoción válida solo el 12 de mayo
                  </p>

                  {/* Botón CTA */}
                  <div className="text-center">
                    <a
                      href={`https://wa.me/+584125592798?text=${encodeURIComponent("Hola MIRF essence, quiero aprovechar la promoción del Día de la Enfermería. Deseo información sobre los perfumes disponibles a $9.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-display font-semibold rounded-full hover:bg-gold-light transition-all text-lg"
                    >
                      <i className="fab fa-whatsapp" /> Pedir por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Pie de página de la sección */}
              <p className="text-center text-light/30 text-xs font-body">
                Promoción válida el 12 de mayo de 2025 · mirfessence.com
              </p>
            </div>
          </section>
        )}
      

        {activeView === 'about' && (
          <section className="min-h-screen flex items-center justify-center text-center text-light/60 py-20">
            <div>
              <i className="fas fa-users text-6xl text-gold/20 mb-6 block" />
              <h2 className="font-display text-3xl text-gold mb-4">Sobre Nosotros</h2>
              <p className="font-body text-lg">Conoce más sobre MIRF essence.<br />Sección en construcción.</p>
            </div>
          </section>
        )}

        <Footer />
      </main>

      <WhatsAppFloat
        phoneNumber="+584125592798"
        message="Hola MIRF essence, estoy interesado en sus perfumes. Me gustaría recibir más información."
      />
    </div>
  )
}

export default App