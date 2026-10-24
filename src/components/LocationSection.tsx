import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCookieConsent } from '../consent/CookieConsentContext';
import { stagger } from '../lib/motion';
import flexRentImage from '../assets/flex-rent-image.jpg';

const MAP_QUERY = 'Astrit+Suli+15+Prishtina+10000+Kosovo';

// "Monday - Friday: 8:00 AM - 8:00 PM" becomes a day column and a time column
function splitHours(line: string) {
  const separator = line.indexOf(': ');
  if (separator === -1) return { day: line, time: '' };
  return { day: line.slice(0, separator), time: line.slice(separator + 2) };
}

function LocationSection() {
  const { t } = useLanguage();
  const { status, accept } = useCookieConsent();

  const hours = [t.location.mondayFriday, t.location.saturday, t.location.sunday].map(splitHours);

  const rowClass = 'flex gap-4 p-5 group';
  const iconClass = 'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/20';
  const labelClass = 'mb-1.5 text-xs font-semibold uppercase tracking-widest text-gold/90';
  const linkClass = 'block font-light text-bone/85 hover:text-gold-light';

  return (
    <section id="location" className="relative overflow-hidden bg-ink-soft py-16 text-bone sm:py-20 lg:py-24">
      {/* Background Image */}
      <img
        src={flexRentImage}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink via-ink/90 to-ink" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Details */}
          <div className="lg:col-span-5">
            <h2 className="scroll-reveal font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl lg:text-5xl">
              {t.location.title}
            </h2>
            <span className="gold-rule scroll-reveal my-5 !mx-0 origin-left" data-reveal="line" style={stagger(100)}></span>
            <p className="scroll-reveal mb-7 text-base font-light leading-relaxed text-bone/65 sm:text-lg" style={stagger(150)}>
              {t.location.subtitle}
            </p>

            <div
              className="scroll-reveal divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm"
              style={stagger(200)}
            >
              <div className={rowClass}>
                <span className={iconClass}>
                  <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <h3 className={labelClass}>{t.location.address}</h3>
                  <p className="font-light leading-relaxed text-bone/85">
                    no. 15 Astrit Suli<br />
                    Prishtina 10000
                  </p>
                </div>
              </div>

              <div className={rowClass}>
                <span className={iconClass}>
                  <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className={labelClass}>{t.location.hours}</h3>
                  <dl className="space-y-1.5 text-sm sm:text-[15px]">
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex flex-wrap justify-between gap-x-4">
                        <dt className="font-light text-bone/65">{day}</dt>
                        <dd className="font-medium tabular-nums text-bone/90">{time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className={rowClass}>
                <span className={iconClass}>
                  <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <h3 className={labelClass}>{t.location.phone}</h3>
                  <a href="tel:+38345343430" className={`${linkClass} tabular-nums`}>
                    +383 45 343 430
                  </a>
                  <a href="tel:+41799329445" className={`${linkClass} tabular-nums`}>
                    +41 79 932 94 45
                  </a>
                </div>
              </div>

              <div className={rowClass}>
                <span className={iconClass}>
                  <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className={labelClass}>{t.location.email}</h3>
                  <a href="mailto:info@flexrentprishtina.com" className={`${linkClass} break-all`}>
                    info@flexrentprishtina.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map: stretches to the height of the details column on desktop */}
          <div
            className="scroll-reveal relative h-[340px] overflow-hidden rounded-2xl border border-gold/25 bg-ink shadow-2xl shadow-black/60 sm:h-[400px] lg:col-span-7 lg:h-auto lg:min-h-[480px]"
            data-reveal="right"
          >
            {status === 'accepted' ? (
              <iframe
                title={`${t.location.title}: ${t.location.address}`}
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(0.92)_contrast(0.9)] transition-[filter] duration-700 hover:[filter:grayscale(1)_invert(0.92)_contrast(1.1)_brightness(1.25)]"
              />
            ) : (
              // Google Maps sets cookies, so the embed only loads after the visitor accepts them
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[radial-gradient(ellipse_at_center,rgba(201,162,75,0.12),transparent_70%)] px-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-bone">{t.location.address}</p>
                  <p className="mt-1 font-light text-bone/70">no. 15 Astrit Suli, Prishtina 10000</p>
                </div>
                <p className="max-w-sm text-sm font-light leading-relaxed text-bone/60">{t.consent.mapBlocked}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={accept} className="btn-gold px-6 py-3 text-sm">
                    {t.consent.mapAccept}
                  </button>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-bone hover:border-gold hover:text-gold-light"
                  >
                    {t.consent.openInMaps}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
