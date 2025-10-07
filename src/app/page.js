import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import PhotoCarousel from './components/PhotoCarousel'; 
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToQueryClient from './components/ScrollToQueryClient';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollToQueryClient />
      <Hero />
      <Courses />
      <PhotoCarousel />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}