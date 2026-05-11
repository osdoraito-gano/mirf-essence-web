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
          <section className="min-h-screen flex items-center justify-center text-center text-light/60 py-20">
            <div>
              <i className="fas fa-gift text-6xl text-gold/20 mb-6 block" />
              <h2 className="font-display text-3xl text-gold mb-4">Promociones</h2>
              <p className="font-body text-lg">Estamos preparando ofertas increíbles para ti.<br />¡Vuelve pronto!</p>
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