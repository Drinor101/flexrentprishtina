import { Car, Instagram, Phone, MapPin, Cookie } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCookieConsent } from '../consent/CookieConsentContext';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/instagram';

function Footer() {
  const { t } = useLanguage();
  const { openSettings } = useCookieConsent();

  const linkClass = 'text-bone/70 hover:text-gold-light transition-colors duration-300 text-base sm:text-lg flex items-center gap-2 group font-light';

  return (
    <footer className="relative bg-black text-bone pt-16 sm:pt-20 pb-10 border-t border-gold/20">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></span>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-lg border border-gold/50 bg-gold/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-gold" />
              </div>
              <span className="font-display text-2xl font-bold text-bone">Flex Rent</span>
            </div>
            <p className="text-bone/60 leading-relaxed text-base sm:text-lg font-light">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6 text-gold-light">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className={linkClass}>
                  <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#cars" className={linkClass}>
                  <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.fleet}
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.servicesLink}
                </a>
              </li>
              <li>
                <a href="#contact" className={linkClass}>
                  <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.contactLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6 text-gold-light">{t.location.phone}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+38345343430" className="text-bone/70 hover:text-gold-light transition-colors duration-300 text-base sm:text-lg flex items-start gap-3 group font-light">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-gold" />
                  <span>+383 45 343 430</span>
                </a>
              </li>
              <li>
                <a href="tel:+41799329445" className="text-bone/70 hover:text-gold-light transition-colors duration-300 text-base sm:text-lg flex items-start gap-3 group font-light">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-gold" />
                  <span>+41 79 932 94 45</span>
                </a>
              </li>
            </ul>

            <h4 className="font-display text-xl font-semibold mb-6 text-gold-light mt-8">{t.location.address}</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gold" />
              <p className="text-bone/70 text-base sm:text-lg leading-relaxed font-light">
                no. 15 Astrit Suli<br />
                Prishtina 10000
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6 text-gold-light">{t.footer.followUs}</h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-bone/80 hover:text-gold-light"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 group-hover:border-gold group-hover:bg-gold">
                <Instagram className="h-5 w-5 text-bone group-hover:text-ink" aria-hidden="true" />
              </span>
              <span className="text-base font-light sm:text-lg">{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-bone/50 text-sm sm:text-base font-light text-center sm:text-left">
            {t.footer.copyright.replace('2025', String(new Date().getFullYear()))}
          </p>
          <button
            type="button"
            onClick={openSettings}
            className="inline-flex items-center gap-2 text-sm font-light text-bone/50 hover:text-gold-light"
          >
            <Cookie className="h-4 w-4" aria-hidden="true" />
            {t.consent.settings}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
