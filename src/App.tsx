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

function App() {
  const [activeView, setActiveView] = useState<'home' | 'catalog' | 'promos' | 'about'>('home')
  const [showWelcome, setShowWelcome] = useState(true)

  const handleNavigate = useCallback((view: string) => {
    setActiveView(view as any)
    if (view === 'home') {
      setShowWelcome(true) // Reactivar el modal al volver a inicio
    } else {
      setShowWelcome(false)
    }
  }, [])

  const handleCloseWelcome = useCallback(() => {
    setShowWelcome(false)
  }, [])

  return (
    <div className="relative bg-[#0B0B0C] min-h-screen overflow-x-hidden">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar activeView={activeView} onNavigate={handleNavigate} />
      
      {showWelcome && activeView === 'home' && (
        <WelcomeModal onClose={handleCloseWelcome} />
      )}

      <main className="relative">
        {/* Landing Page (Inicio) */}
        {activeView === 'home' && (
          <>
            <HeroCinematic />
            <ProductShowcase />
            <ColorPalette />
            <Finale />
          </>
        )}

        {/* Catálogo */}
        {activeView === 'catalog' && (
          <>
            <ProductInfoSection />
            <CatalogFull />
          </>
        )}

        {/* Promociones (en construcción) */}
        {activeView === 'promos' && (
          <section className="min-h-screen flex items-center justify-center text-center text-light/60 py-20">
            <div>
              <i className="fas fa-gift text-6xl text-gold/20 mb-6 block" />
              <h2 className="font-display text-3xl text-gold mb-4">Promociones</h2>
              <p className="font-body text-lg">Estamos preparando ofertas increíbles para ti.<br />¡Vuelve pronto!</p>
            </div>
          </section>
        )}

        {/* Nosotros (en construcción) */}
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
        phoneNumber="584125592798"
        message="Hola MIRF essence, estoy interesado en sus perfumes. Me gustaría recibir más información."
      />
    </div>
  )
}

export default App