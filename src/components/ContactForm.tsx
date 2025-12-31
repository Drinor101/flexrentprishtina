import { useState, useEffect } from 'react';
import { Mail, Phone, User, Calendar, MessageSquare, CheckCircle2, XCircle, Loader2, Car, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { cars } from '../data/cars';

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
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

    return rentalDays * selectedCar.price;
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
        setFormData({ name: '', email: '', phone: '', car: '', dateFrom: '', timeFrom: '', dateTo: '', timeTo: '', pickupLocation: '', message: '' });
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

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A0A0A] mb-6 sm:mb-8 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/70 max-w-2xl mx-auto leading-relaxed font-light">
              {t.contact.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14 shadow-xl border border-gray-200/50 scroll-reveal">
            {/* Success Message */}
            {status === 'success' && (
              <div className="bg-green-50/80 backdrop-blur-sm border-2 border-green-300/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium text-sm sm:text-base">{t.contact.success}</p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="bg-red-50/80 backdrop-blur-sm border-2 border-red-300/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 animate-fade-in">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-medium text-sm sm:text-base">{errorMessage || 'Failed to send message. Please try again.'}</p>
              </div>
            )}

            <div className="relative">
              <User className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="text"
                name="name"
                required
                placeholder={t.contact.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base placeholder-[#0A0A0A]/40 font-light hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="email"
                name="email"
                required
                placeholder={t.contact.emailLabel}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base placeholder-[#0A0A0A]/40 font-light hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="tel"
                name="phone"
                required
                placeholder={t.contact.phoneLabel}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base placeholder-[#0A0A0A]/40 font-light hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
            </div>

            <div className="relative">
              <Car className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <select
                name="car"
                required
                value={formData.car}
                onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base font-light hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50 appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-[#0A0A0A]/40">
                  {t.contact.carLabel}
                </option>
                {cars.map((car) => (
                  <option key={car.id} value={car.name} className="text-[#0A0A0A]">
                    {car.name} - €{car.price}/day
                  </option>
                ))}
              </select>
            </div>

            {/* Date From */}
            <div className="relative">
              <Calendar className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="date"
                name="dateFrom"
                required
                value={formData.dateFrom}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
              <label className="absolute -top-2.5 left-12 sm:left-14 bg-white px-2 text-xs sm:text-sm text-[#0A0A0A]/60 font-medium">
                {t.contact.dateFrom}
              </label>
            </div>

            {/* Time From */}
            <div className="relative">
              <Clock className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="time"
                name="timeFrom"
                required
                value={formData.timeFrom}
                onChange={(e) => setFormData({ ...formData, timeFrom: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
              <label className="absolute -top-2.5 left-12 sm:left-14 bg-white px-2 text-xs sm:text-sm text-[#0A0A0A]/60 font-medium">
                {t.contact.timeFrom}
              </label>
            </div>

            {/* Date To */}
            <div className="relative">
              <Calendar className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="date"
                name="dateTo"
                required
                value={formData.dateTo}
                min={formData.dateFrom || new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
              <label className="absolute -top-2.5 left-12 sm:left-14 bg-white px-2 text-xs sm:text-sm text-[#0A0A0A]/60 font-medium">
                {t.contact.dateTo}
              </label>
            </div>

            {/* Time To */}
            <div className="relative">
              <Clock className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="time"
                name="timeTo"
                required
                value={formData.timeTo}
                onChange={(e) => setFormData({ ...formData, timeTo: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 text-[#0A0A0A] text-sm sm:text-base hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
              <label className="absolute -top-2.5 left-12 sm:left-14 bg-white px-2 text-xs sm:text-sm text-[#0A0A0A]/60 font-medium">
                {t.contact.timeTo}
              </label>
            </div>

            {/* Price Calculation Display - Inside Form */}
            {formData.car && formData.dateFrom && formData.timeFrom && formData.dateTo && formData.timeTo && (
              <div className="bg-[#1E5BD7]/10 backdrop-blur-sm border-2 border-[#1E5BD7]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#0A0A0A]/70 text-sm sm:text-base font-medium">
                      Rental Period: <span className="text-[#0A0A0A] font-semibold">{calculateRentalDays()}</span> {calculateRentalDays() === 1 ? 'day' : 'days'}
                    </p>
                    {(() => {
                      const selectedCar = cars.find(car => car.name === formData.car);
                      return selectedCar ? (
                        <p className="text-[#0A0A0A]/70 text-sm sm:text-base font-medium">
                          Price per day: <span className="text-[#0A0A0A] font-semibold">€{selectedCar.price}</span>
                        </p>
                      ) : null;
                    })()}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0A0A0A] text-lg sm:text-2xl md:text-3xl font-bold">
                      Total: <span className="text-[#0A0A0A]">€{calculateTotalPrice().toFixed(2)}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Pickup Location */}
            <div className="relative">
              <MapPin className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <input
                type="text"
                name="pickupLocation"
                value={t.contact.pickupLocationAirport}
                disabled
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl text-[#0A0A0A] text-sm sm:text-base font-light bg-gray-50/50 opacity-70 cursor-not-allowed"
                readOnly
              />
              <label className="absolute -top-2.5 left-12 sm:left-14 bg-white px-2 text-xs sm:text-sm text-[#0A0A0A]/60 font-medium">
                {t.contact.pickupLocation}
              </label>
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 sm:left-5 top-5 sm:top-6 w-5 h-5 sm:w-6 sm:h-6 text-[#0A0A0A]/40" />
              <textarea
                name="message"
                required
                placeholder={t.contact.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status === 'loading'}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3.5 sm:py-4 md:py-5 border-2 border-gray-200/80 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#1E5BD7]/20 focus:border-[#1E5BD7] outline-none transition-all duration-300 resize-none text-[#0A0A0A] text-sm sm:text-base placeholder-[#0A0A0A]/40 font-light hover:border-[#0A2A66]/30 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50/50"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-[#0A2A66] to-[#12408C] hover:from-[#12408C] hover:to-[#1E5BD7] text-white font-bold py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#1E5BD7]/30 text-base sm:text-lg group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="flex items-center justify-center gap-2">
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
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
