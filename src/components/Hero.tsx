import { useState, useEffect, useRef } from 'react';
import { Car, Phone, CheckCircle2, Mail, User, Calendar, Clock, ChevronDown, Gem, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { cars, getCarDailyPrice, type RentalPlan } from '../data/cars';
import { prefersReducedMotion, stagger } from '../lib/motion';
import BenefitsAccordion from './BenefitsAccordion';
import heroBg from '../assets/hero-bg.webp';

function Hero() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    rentalPlan: 'basic' as RentalPlan,
    dateFrom: '',
    timeFrom: '',
    dateTo: '',
    timeTo: '',
    pickupLocation: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const bgRef = useRef<HTMLImageElement>(null);

  // Slow parallax on the background photo while the hero is on screen
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = Math.min(window.scrollY, window.innerHeight);
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${offset * 0.18}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Set pickup location to airport on mount and when language changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, pickupLocation: t.contact.pickupLocationAirport }));
  }, [t.contact.pickupLocationAirport]);

  // Calculate rental days based on Excel formula
  // Formula: MAX(0, INT(H4)-INT(F4) + IF(I4 > TIME(13,30,0), 1, 0))
  // F4 = pickup date + time, H4 = return date + time, I4 = return time
  const calculateRentalDays = (): number => {
    if (!formData.dateFrom || !formData.timeFrom || !formData.dateTo || !formData.timeTo) {
      return 0;
    }

    // Combine date and time into Date objects
    const pickupDateTime = new Date(`${formData.dateFrom}T${formData.timeFrom}`);
    const returnDateTime = new Date(`${formData.dateTo}T${formData.timeTo}`);

    // INT(H4) - INT(F4): Calculate full days between dates
    const pickupDateOnly = new Date(pickupDateTime.getFullYear(), pickupDateTime.getMonth(), pickupDateTime.getDate());
    const returnDateOnly = new Date(returnDateTime.getFullYear(), returnDateTime.getMonth(), returnDateTime.getDate());

    const daysDifference = Math.floor((returnDateOnly.getTime() - pickupDateOnly.getTime()) / (1000 * 60 * 60 * 24));

    // Extract hours and minutes from return time (I4)
    const [returnHours, returnMinutes] = formData.timeTo.split(':').map(Number);
    const returnTimeInHours = returnHours + returnMinutes / 60;

    // IF(I4 > TIME(13,30,0), 1, 0): If return time is after 13:30, add 1 day
    const extraDay = returnTimeInHours > 13.5 ? 1 : 0;

    // MAX(0, ...): Ensure rental days is never negative
    return Math.max(0, daysDifference + extraDay);
  };

  // Calculate total price
  const calculateTotalPrice = (): number => {
    const rentalDays = calculateRentalDays();
    if (rentalDays === 0 || !formData.car) {
      return 0;
    }

    // Find selected car price
    const selectedCar = cars.find(car => car.name === formData.car);
    if (!selectedCar) {
      return 0;
    }

    return rentalDays * getCarDailyPrice(selectedCar, formData.rentalPlan);
  };

  // Formspree Configuration
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzqwqyq';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          car: formData.car,
          rentalPlan: formData.rentalPlan === 'premium' ? 'Flex Premium' : 'Flex Basic',
          dateFrom: formData.dateFrom,
          timeFrom: formData.timeFrom,
          dateTo: formData.dateTo,
          timeTo: formData.timeTo,
          pickupLocation: t.contact.pickupLocationAirport,
          message: formData.message,
          _subject: `New Rental Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', car: '', rentalPlan: 'basic', dateFrom: '', timeFrom: '', dateTo: '', timeTo: '', pickupLocation: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const benefits = [t.hero.benefit1, t.hero.benefit2, t.hero.benefit3, t.hero.benefit4, t.hero.benefit5];

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background Photo */}
      <div className="hero-zoom absolute inset-0">
        <img
          ref={bgRef}
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1280}
          height={960}
          decoding="async"
          className="h-full w-full object-cover will-change-transform"
        />
      </div>

      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(201,162,75,0.18),transparent_55%)] z-10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center pt-28 pb-16 sm:pt-32 lg:pt-24 min-h-[100svh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
            {/* Left - Brand & Benefits */}
            <div className="lg:col-span-7">
              <h1 className="fx-up font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-bone leading-[1.05] tracking-tight mb-5 sm:mb-6" style={stagger(0)}>
                {t.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="fx-up text-base sm:text-lg lg:text-xl text-bone/70 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10" style={stagger(120)}>
                {t.hero.subtitle}
              </p>

              {/* Benefits Card */}
              <div className="fx-up rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 sm:p-7" style={stagger(240)}>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-bone mb-2 sm:mb-3 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gold rounded-full flex-shrink-0"></span>
                  <span>{t.hero.whyChooseUs}</span>
                </h2>
                <BenefitsAccordion benefits={benefits} />
              </div>
            </div>

            {/* Right - Booking Form */}
            <div className="lg:col-span-5">
              <form onSubmit={handleSubmit} className="fx-up relative rounded-2xl border border-gold/25 bg-ink-soft/90 backdrop-blur-xl p-5 sm:p-7 shadow-2xl shadow-black/60" style={stagger(200)}>
                <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></span>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-4 bg-emerald-500/10 border border-emerald-500/40 rounded-lg p-3 sm:p-4 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="text-emerald-200 font-medium text-xs sm:text-sm">{t.contact.success}</p>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-4 bg-red-500/10 border border-red-500/40 rounded-lg p-3 sm:p-4 flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-200 font-medium text-xs sm:text-sm">{errorMessage || 'Failed to send message. Please try again.'}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative col-span-2">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70" />
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      aria-label={t.contact.name}
                      placeholder={t.contact.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={status === 'loading'}
                      className="field pl-10 pr-3 py-3"
                    />
                  </div>

                  <div className="relative col-span-2 sm:col-span-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70" />
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      aria-label={t.contact.emailLabel}
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === 'loading'}
                      className="field pl-10 pr-3 py-3"
                    />
                  </div>

                  <div className="relative col-span-2 sm:col-span-1">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      aria-label={t.contact.phoneLabel}
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={status === 'loading'}
                      className="field pl-10 pr-3 py-3"
                    />
                  </div>

                  <div className="relative col-span-2">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70" />
                    <select
                      name="car"
                      required
                      aria-label={t.contact.carLabel}
                      value={formData.car}
                      onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                      disabled={status === 'loading'}
                      className="field pl-10 pr-9 py-3 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>{t.contact.carLabel}</option>
                      {cars.map((car) => (
                        <option key={car.id} value={car.name}>
                          {car.name} — Basic €{car.priceBasic} · Premium €{car.pricePremium}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bone/50 pointer-events-none" />
                  </div>

                  <div className="relative col-span-2">
                    <Gem className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70" />
                    <select
                      name="rentalPlan"
                      required
                      aria-label="Flex Basic / Flex Premium"
                      value={formData.rentalPlan}
                      onChange={(e) => setFormData({ ...formData, rentalPlan: e.target.value as RentalPlan })}
                      disabled={status === 'loading'}
                      className="field pl-10 pr-9 py-3 appearance-none cursor-pointer"
                    >
                      <option value="basic">Flex Basic</option>
                      <option value="premium">Flex Premium</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bone/50 pointer-events-none" />
                  </div>

                  {/* Pickup - Date + Time */}
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="hero-dateFrom" className="block mb-1.5 text-[11px] font-medium uppercase tracking-wider text-gold/80">{t.contact.dateFrom}</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70 pointer-events-none" />
                      <input
                        type="date"
                        id="hero-dateFrom"
                        name="dateFrom"
                        required
                        value={formData.dateFrom}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
                        disabled={status === 'loading'}
                        className="field pl-10 pr-2 py-3"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="hero-timeFrom" className="block mb-1.5 text-[11px] font-medium uppercase tracking-wider text-gold/80">{t.contact.timeFrom}</label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70 pointer-events-none" />
                      <input
                        type="time"
                        id="hero-timeFrom"
                        name="timeFrom"
                        required
                        value={formData.timeFrom}
                        onChange={(e) => setFormData({ ...formData, timeFrom: e.target.value })}
                        disabled={status === 'loading'}
                        className="field pl-10 pr-2 py-3"
                      />
                    </div>
                  </div>

                  {/* Return - Date + Time */}
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="hero-dateTo" className="block mb-1.5 text-[11px] font-medium uppercase tracking-wider text-gold/80">{t.contact.dateTo}</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70 pointer-events-none" />
                      <input
                        type="date"
                        id="hero-dateTo"
                        name="dateTo"
                        required
                        value={formData.dateTo}
                        min={formData.dateFrom || new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
                        disabled={status === 'loading'}
                        className="field pl-10 pr-2 py-3"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="hero-timeTo" className="block mb-1.5 text-[11px] font-medium uppercase tracking-wider text-gold/80">{t.contact.timeTo}</label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70 pointer-events-none" />
                      <input
                        type="time"
                        id="hero-timeTo"
                        name="timeTo"
                        required
                        value={formData.timeTo}
                        onChange={(e) => setFormData({ ...formData, timeTo: e.target.value })}
                        disabled={status === 'loading'}
                        className="field pl-10 pr-2 py-3"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gold col-span-2 mt-1 px-8 py-3.5 text-sm sm:text-base group whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        {t.contact.submit}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Price Calculation Display - Below Form */}
              {formData.car && formData.dateFrom && formData.timeFrom && formData.dateTo && formData.timeTo && calculateRentalDays() > 0 && (
                <div className="rounded-2xl border border-gold/40 bg-gold/10 backdrop-blur-xl p-5 sm:p-6 mt-4 sm:mt-6 animate-fade-in-delay">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-bone/70 text-sm sm:text-base font-medium">
                        Rental Period: <span className="text-bone font-semibold">{calculateRentalDays()}</span> {calculateRentalDays() === 1 ? 'day' : 'days'}
                      </p>
                      {(() => {
                        const selectedCar = cars.find(car => car.name === formData.car);
                        return selectedCar ? (
                          <p className="text-bone/70 text-sm sm:text-base font-medium">
                            Price per day: <span className="text-bone font-semibold">€{getCarDailyPrice(selectedCar, formData.rentalPlan)}</span>
                            <span className="text-bone/60"> ({formData.rentalPlan === 'premium' ? 'Flex Premium' : 'Flex Basic'})</span>
                          </p>
                        ) : null;
                      })()}
                    </div>
                    <div className="flex items-center gap-2 pt-4 border-t border-gold/30">
                      <span className="text-bone text-xl sm:text-3xl font-bold whitespace-nowrap">
                        Total: <span className="text-gold-light">€{calculateTotalPrice().toFixed(2)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
