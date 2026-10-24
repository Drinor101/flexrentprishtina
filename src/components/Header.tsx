import { useEffect, useRef, useState } from 'react';
import { Car, Instagram, Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { INSTAGRAM_URL } from '../data/instagram';

// In document order, so the last one above the reading line is the active one.
// 'social' has no nav link (the Instagram icon covers it) but still ends the 'services' highlight.
const SECTION_IDS = ['about', 'cars', 'services', 'social', 'contact'];

function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const progressRef = useRef<HTMLSpanElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const links = [
    { id: 'about', label: t.footer.about },
    { id: 'cars', label: t.footer.fleet },
    { id: 'services', label: t.footer.servicesLink },
    { id: 'contact', label: t.footer.contactLink },
  ];

  // Header style, reading progress and active section, throttled to one update per frame
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0})`;
      }

      const readingLine = window.innerHeight * 0.4;
      let current = '';
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= readingLine) current = id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu with Escape (returning focus to its button) or when the layout switches to desktop
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onChange = () => desktop.matches && setMenuOpen(false);

    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  const iconButton =
    'flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-black/50 text-bone/80 backdrop-blur-md hover:border-gold hover:text-gold-light';

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        {t.a11y.skipToContent}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled || menuOpen
            ? 'border-gold/15 bg-ink/85 shadow-lg shadow-black/40 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Flex Rent Prishtina">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/50 bg-gold/10">
              <Car className="h-5 w-5 text-gold" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold text-bone">Flex Rent</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={iconButton}
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <LanguageSwitcher />
            <a href="#contact" className="btn-gold hidden px-5 py-2.5 text-sm xl:inline-flex">
              {t.cars.bookBtn}
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            className={`${iconButton} lg:hidden`}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="animate-fade-in-up max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 lg:hidden"
          >
            <nav aria-label="Primary" className="container mx-auto flex flex-col px-4 pb-6 pt-2 sm:px-6">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={`border-b border-white/10 py-4 font-display text-2xl font-semibold ${
                    activeId === link.id ? 'text-gold-light' : 'text-bone'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center justify-between gap-4 pb-5 pt-5">
                <LanguageSwitcher />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={iconButton}
                >
                  <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </div>

              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold w-full px-6 py-3.5">
                {t.cars.bookBtn}
              </a>
            </nav>
          </div>
        )}

        <span
          ref={progressRef}
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gradient-to-r from-gold-dark via-gold to-gold-light"
          style={{ transform: 'scaleX(0)' }}
        />
      </header>
    </>
  );
}

export default Header;
