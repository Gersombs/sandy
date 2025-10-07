'use client';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="footer">
      <p>{t.copy}</p>
    </footer>
  );
};

export default Footer;