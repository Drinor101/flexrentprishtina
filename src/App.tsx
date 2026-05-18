import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CarShowcase from './components/CarShowcase';
import LocationSection from './components/LocationSection';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const revealElement = (el: Element) => {
      el.classList.add('revealed');
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
        }
      });
    }, observerOptions);

    const observeScrollReveals = () => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
      elements.forEach((el) => {
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          revealElement(el);
        }
      });
    };

    observeScrollReveals();
    // Re-check after layout settles (images, fonts) so below-the-fold sections still reveal
    const layoutTimer = window.setTimeout(observeScrollReveals, 100);

    // Enhanced smooth scroll with easing
    const smoothScrollTo = (targetPosition: number, duration: number = 1200) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Smooth scroll to anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor && anchor.hash) {
        e.preventDefault();
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerOffset = 80; // Offset for spacing
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          // Use custom smooth scroll with slower animation
          smoothScrollTo(offsetPosition, 1200);
        }
      }
    };

    // Add smooth scroll handler to all anchor links
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      window.clearTimeout(layoutTimer);
      observer.disconnect();
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero />
        <AboutSection />
        <CarShowcase />
        <LocationSection />
        <TeamSection />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
