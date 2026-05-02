import Navbar from "./components/Navbar"
import CustomCursor from './components/CustomCursor'
import WhatsAppFloat from './components/WhatsAppFloat'

import HeroCinematic from './sections/HeroCinematic'
import ProductShowcase from './sections/ProductShowcase'
import ColorPalette from './sections/ColorPalette'
import Finale from './sections/Finale'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="relative bg-[#0B0B0C] min-h-screen overflow-x-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navbar premium */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        <HeroCinematic />
        <ProductShowcase />
        <ColorPalette />
        <Finale />
        <Footer />
      </main>

      {/* Floating WhatsApp */}
      <WhatsAppFloat
        phoneNumber="+584125592798"
        message="Hola MIRF essence, estoy interesado en sus perfumes. Me gustaría recibir más información."
      />
    </div>
  )
}

export default App