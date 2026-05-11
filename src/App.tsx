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

// ===== CONFIGURACIÓN DE CAMPAÑA =====
// Cambia 'campaign' por 'madres', 'enfermeria' o null para desactivar
const getActiveCampaign = (): 'madres' | 'enfermeria' | null => {
  const today = new Date();
  // Activar campaña de enfermería desde el 12 de mayo en adelante
  if (today >= new Date('2025-05-12')) {
    return 'enfermeria';
  }
  // Para el Día de las Madres (11 de mayo) ya pasó, así que no se activa.
  // Si quisiéramos usarla en otro momento, pondríamos la condición aquí.
  return null;
};

function App() {
  const [activeView, setActiveView] = useState<'home' | 'catalog' | 'promos' | 'about'>('home');
  const [modalClosed, setModalClosed] = useState(false);

  const campaign = getActiveCampaign();
  const showModal = campaign !== null && !modalClosed;

  const handleNavigate = useCallback((view: string) => {
    setActiveView(view as any);
  }, []);

  const handleCloseModal = () => setModalClosed(true);

  return (
    <div className="relative bg-[#0B0B0C] min-h-screen overflow-x-hidden">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar activeView={activeView} onNavigate={handleNavigate} />

      {/* Modal de campaña (controlado por fecha) */}
      {showModal && (
        <WelcomeModal
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}

      <main className="relative">
        {activeView === 'home' && (
          <>
            <HeroCinematic onNavigate={handleNavigate} onScrollTo={(id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} />
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