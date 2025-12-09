import { useLanguage } from '../i18n/LanguageContext';

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          {/* Title with Flag Emoji */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A0A0A] mb-4 sm:mb-6 tracking-tight">
            🏁 {t.about.title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/80 mb-6 sm:mb-8 font-medium">
            {t.about.subtitle}
          </p>

          {/* Description */}
          <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-[#0A0A0A]/70 leading-relaxed max-w-3xl mx-auto">
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

