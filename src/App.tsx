import { useEffect, useLayoutEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { CookieConsentProvider } from './consent/CookieConsentContext';
import { prefersReducedMotion } from './lib/motion';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CarShowcase from './components/CarShowcase';
import SocialSection from './components/SocialSection';
import LocationSection from './components/LocationSection';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import BackToTop from './components/BackToTop';

function App() {
  // Sections stay fully visible until this point, so a failed script never leaves the page blank
  useLayoutEffect(() => {
    document.documentElement.classList.add('motion-ok');
    return () => document.documentElement.classList.remove('motion-ok');
  }, []);

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
          observer.unobserve(entry.target);
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

    // Pick up elements that mount later, such as car cards after changing the filter
    const root = document.getElementById('root');
    const mutationObserver = new MutationObserver(observeScrollReveals);
    if (root) mutationObserver.observe(root, { childList: true, subtree: true });

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

        // 'instant' stops the CSS smooth-scroll from restarting its own animation on every frame
        window.scrollTo({ top: startPosition + distance * easeInOutCubic(progress), behavior: 'instant' });

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
          const headerOffset = targetId === 'top' || targetId === 'main' ? 0 : 80; // Offset for the fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          if (prefersReducedMotion()) {
            window.scrollTo({ top: offsetPosition, behavior: 'instant' });
          } else {
            // Use custom smooth scroll with slower animation
            smoothScrollTo(offsetPosition, 1200);
          }

          // Move keyboard focus along with the view (skip link and in-page links)
          if (!targetElement.hasAttribute('tabindex')) targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      }
    };

    // Add smooth scroll handler to all anchor links
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      window.clearTimeout(layoutTimer);
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <div id="top" className="min-h-screen bg-ink">
          <Header />
          <main id="main" className="outline-none">
            <Hero />
            <AboutSection />
            <CarShowcase />
            <SocialSection />
            <LocationSection />
            <TeamSection />
            <ContactForm />
          </main>
          <Footer />
          <CookieBanner />
          <BackToTop />
        </div>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export default App;
