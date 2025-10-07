'use client';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { scrollToSection } from '../utils/scroll'; // 1. Importa la función

const Pricing = () => {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="pricingSection">
      <div className="container">
        <h2>{t.title}</h2>
        <div className="pricingGrid">
          <div className="priceCard">
            <h3>{t.english}</h3>
            <p>{t.englishDesc}</p>
            <a href="#contact" className="ctaButton" onClick={(e) => scrollToSection(e, 'contact')}>{t.contactBtn}</a>
          </div>
          <div className="priceCard">
            <h3>{t.japanese}</h3>
            <p>{t.japaneseDesc}</p>
            <a href="#contact" className="ctaButton" onClick={(e) => scrollToSection(e, 'contact')}>{t.contactBtn}</a>
          </div>
          <div className="priceCard">
            <h3>{t.spanish}</h3>
            <p>{t.spanishDesc}</p>
            <a href="#contact" className="ctaButton" onClick={(e) => scrollToSection(e, 'contact')}>{t.contactBtn}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;