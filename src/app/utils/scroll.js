export const scrollToSection = (e, sectionId) => {
  // 1. Previene el comportamiento por defecto del enlace
  e.preventDefault();

  // 2. Busca la sección en la página por su ID
  const section = document.getElementById(sectionId);

  if (section) {
    // 3. Ajusta el scroll para compensar el navbar fijo
    const offsetTop = section.offsetTop - 70; // 70px es el alto aprox. del navbar, ajústalo si es necesario
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};