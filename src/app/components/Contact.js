'use client';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <div className="contactContent">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
          <div className="contactLinks">
            <a href="mailto:tu-correo@ejemplo.com" aria-label="Enviar correo">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;