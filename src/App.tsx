import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Hero from './components/Hero';
import CarShowcase from './components/CarShowcase';
import ContactForm from './components/ContactForm';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero />
        <CarShowcase />
        <LocationSection />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
