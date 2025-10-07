'use client';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';


const Courses = () => {
  const { language } = useLanguage();
  const t = translations[language].courses;
  const coursesData = t.items || [];
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="courses" className="coursesSection">
      <div className="container">
        <h2>{t.title}</h2>
        <div className="coursesGrid">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`courseCard ${expandedCard === course.id ? 'expanded' : ''}`}
              onClick={() => handleCardClick(course.id)}
            >
              <h3>{course.title}</h3>
              <div className="courseInfo">
                <p><strong>Fecha:</strong> {course.date}</p>
                <p>{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;