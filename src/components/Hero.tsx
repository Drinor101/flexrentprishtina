import { Car, Phone, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md p-4 sm:p-6">
        <div className="container mx-auto flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center bg-no-repeat" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Logo & Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Car className="w-14 h-14 sm:w-16 sm:h-16 text-amber-400 drop-shadow-lg animate-float" />
                <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full"></div>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                {t.hero.title}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-10 leading-relaxed font-light max-w-3xl">
              {t.hero.subtitle}
            </p>

            {/* Benefits Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl mb-10 animate-fade-in-delay hover:bg-white/15 transition-all duration-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-amber-400 rounded-full"></span>
                {t.hero.whyChooseUs}
              </h2>
              <ul className="space-y-4 text-gray-100">
                <li className="flex items-start gap-4 group/item">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-lg sm:text-xl leading-relaxed">{t.hero.benefit1}</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-lg sm:text-xl leading-relaxed">{t.hero.benefit2}</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-lg sm:text-xl leading-relaxed">{t.hero.benefit3}</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative bg-amber-400 hover:bg-amber-500 text-black font-bold px-10 py-5 rounded-full inline-flex items-center gap-3 text-lg shadow-2xl hover:shadow-amber-400/50 transform hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Phone className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">{t.hero.contactBtn}</span>
              <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
