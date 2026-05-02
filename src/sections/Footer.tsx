import { footerConfig } from '../config';

const Footer = () => {
  const { logo, logoAccent, brandDescription, socialLinks, linkSections, contact, legalLinks, copyrightText, whatsappCta, whatsappHref } = footerConfig;

  return (
    <footer className="bg-[#0B0B0C] border-t border-[#2B2B2F] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-display text-3xl text-gold">
            {logo}
            <span className="text-light/70 text-sm ml-1">{logoAccent}</span>
          </span>
          <p className="mt-4 text-light/70 max-w-md">{brandDescription}</p>

          {/* Redes sociales con Font Awesome */}
          <div className="flex gap-6 mt-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/40 hover:text-gold transition-colors text-2xl"
                aria-label={link.label}
              >
                {link.platform === 'instagram' && <i className="fab fa-instagram" />}
                {link.platform === 'tiktok' && <i className="fab fa-tiktok" />}
                {link.platform === 'twitter' && <i className="fab fa-twitter" />}
              </a>
            ))}
          </div>
        </div>

        {/* Columnas de enlaces */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {linkSections.map((section, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <h4 className="font-display text-gold/80 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-light/50 hover:text-gold transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Datos de contacto */}
        <div className="text-center text-light/50 text-sm space-y-2 mb-8">
          <p>{contact.address}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>

        {/* WhatsApp CTA y legales */}
        <div className="flex flex-col items-center gap-6">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-black font-body font-semibold px-6 py-2 rounded-full hover:bg-gold-light transition-all duration-300"
          >
            <i className="fab fa-whatsapp" /> {whatsappCta}
          </a>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-light/40">
            {legalLinks.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-light/30 text-xs">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;