import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    titleLine1: 'TU DEFINES',
    titleLine2: 'TU ESENCIA',
    subtitle: 'Fragancias exclusivas que reflejan tu estilo',
    ctaText: 'Descubrir',
    ctaAction: 'catalog', // Redirige a la vista Catálogo
    image: '/images/hero-slide1.png',
  },
  {
    id: 2,
    titleLine1: 'ENCUENTRA',
    titleLine2: 'TU AROMA',
    subtitle: 'Cada fragancia está diseñada para una ocasión especial',
    ctaText: 'Explorar Notas',
    ctaAction: 'palette', // Scroll a Fragancias Signature
    image: '/images/hero-slide2.png',
  },
  {
    id: 3,
    titleLine1: 'EXPRESA',
    titleLine2: 'TU PODER',
    subtitle: 'Porque el lujo no es un precio, es una actitud',
    ctaText: 'Ver Colección',
    ctaAction: 'products', // Scroll a Producto Destacado
    image: '/images/hero-slide3.png',
  },
];

const PARTICLES = Array.from({ length: 25 });

interface HeroCinematicProps {
  onNavigate: (view: string) => void;      // Para cambiar de vista (catalog, home…)
  onScrollTo: (id: string) => void;        // Para scrolls dentro de la misma landing page
}

const HeroCinematic = ({ onNavigate, onScrollTo }: HeroCinematicProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateSlide = useCallback((index: number) => {
    if (isAnimating || index === activeSlide) return;
    setIsAnimating(true);

    const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });
    tl.to(titleRef.current, { opacity: 0, y: -30, duration: 0.3, ease: 'power2.in' })
      .to(imageRef.current, { opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in' }, '<')
      .add(() => setActiveSlide(index))
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to(imageRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }, '<');
  }, [isAnimating, activeSlide]);

  const goToNext = useCallback(() => {
    const next = (activeSlide + 1) % SLIDES.length;
    animateSlide(next);
  }, [activeSlide, animateSlide]);

  const goToPrev = useCallback(() => {
    const prev = (activeSlide - 1 + SLIDES.length) % SLIDES.length;
    animateSlide(prev);
  }, [activeSlide, animateSlide]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4');
  }, []);

  useEffect(() => {
    if (isPaused || isAnimating) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => goToNext(), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused, isAnimating, goToNext]);

  const handleButtonClick = (action: string) => {
    if (action === 'catalog') {
      onNavigate('catalog');
    } else if (action === 'palette') {
      onScrollTo('palette');
    } else if (action === 'products') {
      onScrollTo('products');
    } else if (action === 'finale') {
      onScrollTo('finale');
    }
  };

  const currentSlide = SLIDES[activeSlide];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0B0B0C] overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Partículas doradas */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div ref={titleRef} className="text-center md:text-left">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-gold block">{currentSlide.titleLine1}</span>
            <span className="text-white block">{currentSlide.titleLine2}</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl mb-8 max-w-md">{currentSlide.subtitle}</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleButtonClick(currentSlide.ctaAction)}
              className="btn-premium inline-flex items-center gap-2 px-8 py-3 bg-gold text-black font-display font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
            >
              {currentSlide.ctaText}
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleButtonClick('finale')}
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold font-display font-semibold rounded-full hover:bg-gold/10 transition-all duration-300"
            >
              Conócenos
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            ref={imageRef}
            src={currentSlide.image}
            alt={`MIRF essence - ${currentSlide.titleLine2}`}
            className="max-h-[500px] object-contain drop-shadow-gold-lg animate-float"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gold/20 blur-xl rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6 z-20">
        <button onClick={() => { goToPrev(); setIsPaused(true); setTimeout(() => setIsPaused(false), 3000); }} className="text-gold/60 hover:text-gold transition-colors p-2" aria-label="Slide anterior">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { animateSlide(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 3000); }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-gold scale-125' : 'bg-gold/30 hover:bg-gold/60'}`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={() => { goToNext(); setIsPaused(true); setTimeout(() => setIsPaused(false), 3000); }} className="text-gold/60 hover:text-gold transition-colors p-2" aria-label="Siguiente slide">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroCinematic;