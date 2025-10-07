'use client';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

// Reemplaza estas URLs con las de tus imágenes reales para el carrusel
const carouselImages = [
  './assets/Galeria1.jpg',
  './assets/Galeria2.jpg',
  './assets/Galeria3.jpg',
  './assets/Galeria4.jpg',
  'https://source.unsplash.com/random/800x600/?language,classroom',
];

const PhotoCarousel = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery || { title: 'Galería de Fotos' }; // Fallback si no está en translations.js
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navegación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Cambia de imagen cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="photoCarouselSection">
      <div className="container">
        <h2>{t.title}</h2> {/* Título de la sección */}
        <div className="carouselWrapper">
          <button onClick={goToPrevious} className="carouselButton prevButton" aria-label="Imagen anterior">
            <FaChevronLeft />
          </button>
          <div className="carouselContent">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carouselItem ${index === currentIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden={index !== currentIndex}
              >
                {/* Puedes añadir un texto superpuesto si lo deseas */}
                {/* <div className="carouselCaption">Descripción de la imagen {index + 1}</div> */}
              </div>
            ))}
          </div>
          <button onClick={goToNext} className="carouselButton nextButton" aria-label="Siguiente imagen">
            <FaChevronRight />
          </button>
        </div>
        <div className="carouselDots">
          {carouselImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;