'use client';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { scrollToSection } from '../utils/scroll'; // 1. Importa la función

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="navContainer">
        <a 
          href="#hero" 
          className="navLogo" 
          onClick={(e) => scrollToSection(e, 'hero')} // 2. Usa la función importada
        >
          Sandy 先生
        </a>
        <div className="navLinks">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>{t.nav.home}</a>
          <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')}>{t.nav.courses}</a>
          <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>{t.nav.gallery}</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>{t.nav.pricing}</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t.nav.contact}</a>
          <button onClick={toggleLanguage} className="langButton">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;