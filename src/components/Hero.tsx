import { Car, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30 bg-black/40 backdrop-blur-sm p-4">
        <div className="container mx-auto flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://images.pexels.com/lib/api/pexels-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-12 h-12 text-amber-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {t.hero.title}
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8 animate-fade-in-delay">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t.hero.whyChooseUs}
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2"></span>
                  <span>{t.hero.benefit1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2"></span>
                  <span>{t.hero.benefit2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2"></span>
                  <span>{t.hero.benefit3}</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="group bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              {t.hero.contactBtn}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
