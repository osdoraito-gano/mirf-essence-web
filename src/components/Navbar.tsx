interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

const Navbar = ({ activeView, onNavigate }: NavbarProps) => {
  const tabs = [
    { id: 'home', label: 'Inicio' },
    { id: 'catalog', label: 'Catálogo' },
    { id: 'promos', label: 'Promociones' },
    { id: 'about', label: 'Nosotros' },
  ];

  return (
    <header className="w-full bg-[#0B0B0C] border-b border-[#C9A15F]/30 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="MIRF essence"
            className="h-10 w-auto"
          />
          <span className="text-[#C9A15F] text-xl font-display tracking-wide">
            MIRF <span className="font-body italic text-[#E5C98B]">essence</span>
          </span>
        </div>

        {/* MENU TABS */}
        <nav className="hidden md:flex items-center gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative px-5 py-3 text-sm font-body tracking-wide transition-all duration-300 ${
                activeView === tab.id
                  ? 'text-[#C9A15F]'
                  : 'text-[#E5C98B]/70 hover:text-[#C9A15F]'
              }`}
            >
              {tab.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C9A15F] transition-all duration-300 rounded-full ${
                  activeView === tab.id ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </nav>

        {/* BOTÓN CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/584125592798?text=Hola%20MIRF%20essence,%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C9A15F] text-[#C9A15F] px-5 py-2 rounded-full hover:bg-[#C9A15F] hover:text-black transition-all duration-300 font-body text-sm"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;