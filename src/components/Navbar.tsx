

const Navbar = () => {
  return (
    <header className="w-full bg-[#0B0B0C] border-b border-[#C9A15F]/30 backdrop-blur">
      
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

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-10 text-[#E5C98B] font-body text-sm tracking-wide">

          <a href="#" className="hover:text-[#C9A15F] transition">
            Inicio
          </a>

          <a href="#" className="hover:text-[#C9A15F] transition">
            Catálogo
          </a>

          <a href="#" className="hover:text-[#C9A15F] transition">
            Promociones
          </a>

          <a href="#" className="hover:text-[#C9A15F] transition">
            Nosotros
          </a>

        </nav>

        {/* BOTÓN CTA */}
        <div className="hidden md:block">

          <a
            href="#"
            className="border border-[#C9A15F] text-[#C9A15F] px-5 py-2 rounded hover:bg-[#C9A15F] hover:text-black transition"
          >
            Contacto
          </a>

        </div>

      </div>

    </header>
  );
};

export default Navbar;
