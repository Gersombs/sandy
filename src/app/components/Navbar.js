'use client';
import { useState } from 'react'; // 1. Importa useState
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { scrollToSection } from '../utils/scroll';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 2. Añade el estado para el menú

  const handleLinkClick = (e, sectionId) => {
    scrollToSection(e, sectionId);
    setIsMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };
  
  return (
    <nav className="navbar">
      <div className="navContainer">
        <a 
          href="#hero" 
          className="navLogo" 
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          Sandy 先生
        </a>

        {/* 3. Aplica una clase dinámica para mostrar/ocultar el menú */}
        <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>{t.nav.home}</a>
          <a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')}>{t.nav.courses}</a>
          <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')}>{t.nav.gallery}</a>
          <a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')}>{t.nav.pricing}</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>{t.nav.contact}</a>
          <button onClick={toggleLanguage} className="langButton">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* 4. Añade el botón de la hamburguesa */}
        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;