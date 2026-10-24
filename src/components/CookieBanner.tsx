import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCookieConsent } from '../consent/CookieConsentContext';

function CookieBanner() {
  const { t } = useLanguage();
  const { bannerOpen, accept, reject } = useCookieConsent();
  const [visible, setVisible] = useState(false);

  // Let the page settle first so the banner never competes with the first paint
  useEffect(() => {
    if (!bannerOpen) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => setVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, [bannerOpen]);

  if (!bannerOpen || !visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-0 animate-fade-in-up"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="relative rounded-2xl border border-gold/30 bg-ink-soft p-4 shadow-2xl shadow-black/80 sm:p-6">
        <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></span>

        <div className="mb-2 flex items-center gap-3 sm:mb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-gold/10 sm:h-9 sm:w-9">
            <Cookie className="h-4 w-4 text-gold" aria-hidden="true" />
          </span>
          <h2 id="cookie-title" className="font-display text-base font-semibold text-bone sm:text-lg">
            {t.consent.title}
          </h2>
        </div>

        <p id="cookie-description" className="mb-4 text-[13px] font-light leading-relaxed text-bone/70 sm:mb-5 sm:text-sm">
          {t.consent.description}
        </p>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-bone hover:border-gold hover:text-gold-light sm:py-2.5"
          >
            {t.consent.reject}
          </button>
          <button type="button" onClick={accept} className="btn-gold px-4 py-2 text-sm sm:py-2.5">
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
