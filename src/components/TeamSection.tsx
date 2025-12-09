import { useLanguage } from '../i18n/LanguageContext';
import beharCard from '../assets/cartoline-behar.jpg';
import donatCard from '../assets/cartoline-donat.jpg';

function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 sm:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A0A0A] mb-6 sm:mb-8 tracking-tight">
            {t.team.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/70 max-w-3xl mx-auto leading-relaxed font-light">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto scroll-reveal">
          {/* Behar Card */}
          <div className="group">
            <div className="bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50">
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <img 
                  src={beharCard} 
                  alt="Behar Abdullahu - Manager" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Donat Card */}
          <div className="group">
            <div className="bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50">
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <img 
                  src={donatCard} 
                  alt="Donat Breznica - Manager" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

