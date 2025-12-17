import { Car, Phone, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Hero() {
  const { t } = useLanguage();

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

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative bg-white hover:bg-[#1E5BD7] text-[#0A2A66] hover:text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-full inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg shadow-2xl hover:shadow-[#1E5BD7]/50 transform hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#1E5BD7] to-[#12408C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">{t.hero.contactBtn}</span>
              <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 text-xl sm:text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
