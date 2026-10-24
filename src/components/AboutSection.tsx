import { useLanguage } from '../i18n/LanguageContext';
import { stagger } from '../lib/motion';
import poloGoldenHour from '../assets/social/polo-golden-hour.webp';
import bmwX5Interior from '../assets/social/bmw-x5-interior.webp';

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-ink overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Text */}
          <div className="lg:col-span-7">
            <h2 className="scroll-reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bone mb-5 sm:mb-6 tracking-tight">
              {t.about.title}
            </h2>
            <span
              className="gold-rule scroll-reveal !mx-0 mb-6 sm:mb-8 origin-left"
              data-reveal="line"
              style={stagger(150)}
            ></span>

            <p className="scroll-reveal text-lg sm:text-xl md:text-2xl text-gold-light mb-6 sm:mb-8 font-medium leading-snug" style={stagger(200)}>
              {t.about.subtitle}
            </p>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-bone/65 leading-relaxed font-light max-w-2xl">
              <p className="scroll-reveal" style={stagger(300)}>{t.about.description1}</p>
              <p className="scroll-reveal" style={stagger(400)}>{t.about.description2}</p>
            </div>
          </div>

          {/* Photos */}
          <div className="relative mx-auto w-full max-w-md pb-12 pr-12 lg:col-span-5 lg:max-w-none">
            <div className="scroll-reveal relative" data-reveal="right">
              <span className="absolute -bottom-3 -left-3 right-3 top-3 rounded-2xl border border-gold/40 lg:-bottom-4 lg:-left-4 lg:right-4 lg:top-4" aria-hidden="true"></span>
              <img
                src={poloGoldenHour}
                alt="Volkswagen Polo at golden hour"
                width={640}
                height={640}
                loading="lazy"
                decoding="async"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-black/60"
              />
            </div>
            <div
              className="scroll-reveal absolute bottom-0 right-0 w-1/2 sm:w-[45%]"
              data-reveal="scale"
              style={stagger(350)}
            >
              <img
                src={bmwX5Interior}
                alt="BMW X5 interior with tan leather seats"
                width={640}
                height={640}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-xl border-4 border-ink object-cover shadow-2xl shadow-black/70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
