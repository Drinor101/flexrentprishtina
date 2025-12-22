import { useState, useEffect } from 'react';
import { Car, Phone, CheckCircle2, Mail, User, Calendar, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { cars } from '../data/cars';

function Hero() {
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

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-[#0A2A66]/90 to-transparent backdrop-blur-md p-4 sm:p-6 min-h-[72px] flex items-center">
        <div className="container mx-auto flex justify-end w-full">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A66]/90 via-[#0A2A66]/70 to-[#12408C]/80 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center bg-no-repeat" />

      {/* Content */}
      <div className="relative z-20 flex items-start sm:items-center pt-28 pb-12 sm:pt-20 md:pt-24 lg:pt-28 sm:pb-8 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Logo & Title */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8 relative z-10">
              <div className="relative flex-shrink-0">
                <Car className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white drop-shadow-2xl animate-float" />
                <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full"></div>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                {t.hero.title}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-4 sm:mb-10 leading-relaxed font-light max-w-3xl">
              {t.hero.subtitle}
            </p>

            {/* Benefits Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-white/20 shadow-2xl mb-6 sm:mb-10 animate-fade-in-delay hover:bg-white/15 transition-all duration-500">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="w-1 h-5 sm:h-8 bg-[#1E5BD7] rounded-full flex-shrink-0"></span>
                <span>{t.hero.whyChooseUs}</span>
              </h2>
              <ul className="space-y-2.5 sm:space-y-4 text-white">
                <li className="flex items-start gap-2.5 sm:gap-4 group/item">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#1E5BD7] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs sm:text-lg md:text-xl leading-relaxed">{t.hero.benefit1}</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-4 group/item">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#1E5BD7] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs sm:text-lg md:text-xl leading-relaxed">{t.hero.benefit2}</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-4 group/item">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#1E5BD7] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs sm:text-lg md:text-xl leading-relaxed">{t.hero.benefit3}</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-4 group/item">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#1E5BD7] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs sm:text-lg md:text-xl leading-relaxed">{t.hero.benefit4}</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-4 group/item">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#1E5BD7] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs sm:text-lg md:text-xl leading-relaxed">{t.hero.benefit5}</span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl space-y-3 sm:space-y-4 animate-fade-in-delay">
              {/* Success Message */}
              {status === 'success' && (
                <div className="bg-green-500/90 backdrop-blur-sm border-2 border-green-300 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <p className="text-white font-medium text-xs sm:text-sm">{t.contact.success}</p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-500/90 backdrop-blur-sm border-2 border-red-300 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <p className="text-white font-medium text-xs sm:text-sm">{errorMessage || 'Failed to send message. Please try again.'}</p>
                </div>
              )}

              <div className="space-y-3 sm:space-y-4">
                {/* First Row */}
                <div className="flex flex-wrap gap-2 sm:gap-3 items-end">
                  <div className="relative flex-1 min-w-[120px]">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={t.contact.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={status === 'loading'}
                      className="w-full pl-10 pr-3 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm placeholder-white/60 bg-white/10 backdrop-blur-sm disabled:opacity-50"
                    />
                  </div>

                  <div className="relative flex-1 min-w-[120px]">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === 'loading'}
                      className="w-full pl-10 pr-3 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm placeholder-white/60 bg-white/10 backdrop-blur-sm disabled:opacity-50"
                    />
                  </div>

                  <div className="relative flex-1 min-w-[120px]">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={status === 'loading'}
                      className="w-full pl-10 pr-3 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm placeholder-white/60 bg-white/10 backdrop-blur-sm disabled:opacity-50"
                    />
                  </div>

                  <div className="relative flex-1 min-w-[140px]">
                    <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                    <select
                      name="car"
                      required
                      value={formData.car}
                      onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                      disabled={status === 'loading'}
                      className="w-full pl-10 pr-3 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm bg-white/10 backdrop-blur-sm disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-800 bg-white">{t.contact.carLabel}</option>
                      {cars.map((car) => (
                        <option key={car.id} value={car.name} className="text-gray-800 bg-white">
                          {car.name} - €{car.price}/day
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Second Row - Date From + Time From, Date To + Time To */}
                <div className="space-y-2 sm:space-y-0 sm:flex sm:flex-row sm:flex-wrap sm:gap-2 sm:gap-3 sm:items-end">
                  <div className="flex gap-2 w-full sm:flex-1 sm:min-w-[200px]">
                    <div className="relative flex-[2] min-w-0">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                      <input
                        type="date"
                        name="dateFrom"
                        required
                        value={formData.dateFrom}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
                        disabled={status === 'loading'}
                        className="w-full pl-10 pr-3 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm bg-white/10 backdrop-blur-sm disabled:opacity-50"
                      />
                    </div>
                    <div className="relative flex-1 min-w-[90px]">
                      <input
                        type="time"
                        name="timeFrom"
                        required
                        value={formData.timeFrom}
                        onChange={(e) => setFormData({ ...formData, timeFrom: e.target.value })}
                        disabled={status === 'loading'}
                        className="w-full pl-3 pr-2 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm bg-white/10 backdrop-blur-sm disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 w-full sm:flex-1 sm:min-w-[200px]">
                    <div className="relative flex-[2] min-w-0">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                      <input
                        type="date"
                        name="dateTo"
                        required
                        value={formData.dateTo}
                        min={formData.dateFrom || new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
                        disabled={status === 'loading'}
                        className="w-full pl-10 pr-3 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm bg-white/10 backdrop-blur-sm disabled:opacity-50"
                      />
                    </div>
                    <div className="relative flex-1 min-w-[90px]">
                      <input
                        type="time"
                        name="timeTo"
                        required
                        value={formData.timeTo}
                        onChange={(e) => setFormData({ ...formData, timeTo: e.target.value })}
                        disabled={status === 'loading'}
                        className="w-full pl-3 pr-2 py-2.5 sm:py-3 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white outline-none transition-all text-white text-sm bg-white/10 backdrop-blur-sm disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto bg-white hover:bg-[#1E5BD7] text-[#0A2A66] hover:text-white font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#1E5BD7]/30 text-sm sm:text-base group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center gap-2">
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
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
