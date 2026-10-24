import { useState, useEffect } from 'react';
import { Mail, Phone, User, Calendar, MessageSquare, CheckCircle2, XCircle, Loader2, Car, Clock, MapPin, ChevronDown, Gem } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { cars, getCarDailyPrice, type RentalPlan } from '../data/cars';
import { stagger } from '../lib/motion';

function ContactForm() {
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
  // Formspree endpoint - form submissions will be sent to this URL
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
        // Reset success message after 5 seconds
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
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const iconClass = 'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/70 pointer-events-none';
  const inputClass = 'field pl-12 pr-4 py-3.5 sm:text-base font-light';
  const labelClass = 'absolute -top-2.5 left-11 bg-ink-soft px-2 text-xs font-medium uppercase tracking-wider text-gold/90';

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,75,0.10),transparent_60%)] pointer-events-none" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 scroll-reveal">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bone mb-5 tracking-tight">
              {t.contact.title}
            </h2>
            <span className="gold-rule scroll-reveal mb-5" data-reveal="line" style={stagger(150)}></span>
            <p className="text-base sm:text-lg text-bone/60 max-w-2xl mx-auto leading-relaxed font-light">
              {t.contact.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} data-reveal="scale" className="scroll-reveal relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 bg-ink-soft rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/60 border border-gold/20">
            <span className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></span>

            {/* Success Message */}
            {status === 'success' && (
              <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 animate-fade-in md:col-span-2">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-200 font-medium text-sm sm:text-base">{t.contact.success}</p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/40 rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 animate-fade-in md:col-span-2">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
                <p className="text-red-200 font-medium text-sm sm:text-base">{errorMessage || 'Failed to send message. Please try again.'}</p>
              </div>
            )}

            <div className="relative">
              <User className={iconClass} />
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
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Mail className={iconClass} />
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                aria-label={t.contact.emailLabel}
                placeholder={t.contact.emailLabel}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'loading'}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Phone className={iconClass} />
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                aria-label={t.contact.phoneLabel}
                placeholder={t.contact.phoneLabel}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={status === 'loading'}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Car className={iconClass} />
              <select
                name="car"
                required
                aria-label={t.contact.carLabel}
                value={formData.car}
                onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                disabled={status === 'loading'}
                className={`${inputClass} pr-12 appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  {t.contact.carLabel}
                </option>
                {cars.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name} — Basic €{car.priceBasic} · Premium €{car.pricePremium}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bone/50 pointer-events-none" />
            </div>

            <div className="relative">
              <Gem className={iconClass} />
              <select
                name="rentalPlan"
                required
                aria-label="Flex Basic / Flex Premium"
                value={formData.rentalPlan}
                onChange={(e) => setFormData({ ...formData, rentalPlan: e.target.value as RentalPlan })}
                disabled={status === 'loading'}
                className="field pl-12 pr-12 py-3.5 sm:text-base font-light appearance-none cursor-pointer"
              >
                <option value="basic">Flex Basic</option>
                <option value="premium">Flex Premium</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bone/50 pointer-events-none" />
            </div>

            {/* Pickup Location */}
            <div className="relative">
              <MapPin className={iconClass} />
              <div
                role="group"
                aria-label={t.contact.pickupLocation}
                aria-disabled="true"
                className={`${inputClass} flex min-h-[3.375rem] cursor-not-allowed items-center text-sm leading-snug opacity-70`}
              >
                {t.contact.pickupLocationAirport}
              </div>
              <label className={labelClass}>
                {t.contact.pickupLocation}
              </label>
            </div>

            {/* Date From */}
            <div className="relative">
              <Calendar className={iconClass} />
              <input
                type="date"
                id="contact-dateFrom"
                name="dateFrom"
                required
                value={formData.dateFrom}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
                disabled={status === 'loading'}
                className={inputClass}
              />
              <label htmlFor="contact-dateFrom" className={labelClass}>
                {t.contact.dateFrom}
              </label>
            </div>

            {/* Time From */}
            <div className="relative">
              <Clock className={iconClass} />
              <input
                type="time"
                id="contact-timeFrom"
                name="timeFrom"
                required
                value={formData.timeFrom}
                onChange={(e) => setFormData({ ...formData, timeFrom: e.target.value })}
                disabled={status === 'loading'}
                className={inputClass}
              />
              <label htmlFor="contact-timeFrom" className={labelClass}>
                {t.contact.timeFrom}
              </label>
            </div>

            {/* Date To */}
            <div className="relative">
              <Calendar className={iconClass} />
              <input
                type="date"
                id="contact-dateTo"
                name="dateTo"
                required
                value={formData.dateTo}
                min={formData.dateFrom || new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
                disabled={status === 'loading'}
                className={inputClass}
              />
              <label htmlFor="contact-dateTo" className={labelClass}>
                {t.contact.dateTo}
              </label>
            </div>

            {/* Time To */}
            <div className="relative">
              <Clock className={iconClass} />
              <input
                type="time"
                id="contact-timeTo"
                name="timeTo"
                required
                value={formData.timeTo}
                onChange={(e) => setFormData({ ...formData, timeTo: e.target.value })}
                disabled={status === 'loading'}
                className={inputClass}
              />
              <label htmlFor="contact-timeTo" className={labelClass}>
                {t.contact.timeTo}
              </label>
            </div>

            {/* Price Calculation Display - Inside Form */}
            {formData.car && formData.dateFrom && formData.timeFrom && formData.dateTo && formData.timeTo && (
              <div className="bg-gold/10 border border-gold/40 rounded-xl p-4 sm:p-5 md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
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
                  <div className="flex items-center gap-2">
                    <span className="text-bone text-lg sm:text-2xl md:text-3xl font-bold">
                      Total: <span className="text-gold-light">€{calculateTotalPrice().toFixed(2)}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="relative md:col-span-2">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gold/70 pointer-events-none" />
              <textarea
                name="message"
                required
                aria-label={t.contact.message}
                placeholder={t.contact.message}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status === 'loading'}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-gold md:col-span-2 w-full py-3.5 sm:py-4 text-base sm:text-lg group"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  {t.contact.submit}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
