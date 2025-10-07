'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';
import { scrollToSection } from '../utils/scroll';

// Usar imágenes locales en public/
const backgroundImages = [
  '/assets/Hero1.jpg',
  '/assets/Hero2.jpg',
  '/assets/Hero3.jpg',
];

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <section id="hero" className="heroSection">
      <div className="heroBackground">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`heroImage ${index === currentImageIndex ? 'active' : ''}`}
          >
            <Image src={img} alt={`Background ${index + 1}`} fill style={{ objectFit: 'cover' }} priority={index === 0} />
          </div>
        ))}
      </div>
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <a 
          href="#pricing" 
          className="ctaButton"
          onClick={(e) => scrollToSection(e, 'pricing')}
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;