import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCookieConsent } from '../consent/CookieConsentContext';

function BackToTop() {
  const { t } = useLanguage();
  const { bannerOpen } = useCookieConsent();
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On phones the cookie banner spans the bottom edge, so stay out of its way
  const visible = past && !bannerOpen;

  return (
    <a
      href="#top"
      aria-label={t.a11y.backToTop}
      tabIndex={visible ? 0 : -1}
      className={`fixed z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ink/85 text-gold shadow-xl shadow-black/50 backdrop-blur-md hover:bg-gold hover:text-ink ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{
        bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
        right: 'max(1.5rem, env(safe-area-inset-right))',
      }}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

export default BackToTop;
