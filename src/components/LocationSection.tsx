import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-[#0A2A66] via-[#12408C] to-[#0A2A66] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {t.location.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Map */}
          <div className="bg-[#0A2A66]/80 rounded-3xl overflow-hidden shadow-2xl h-[450px] lg:h-[500px] scroll-reveal border border-white/20">
            <iframe
              src="https://www.google.com/maps?q=Astrit+Suli+15+Prishtina+10000+Kosovo&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6 scroll-reveal">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20 hover:border-[#1E5BD7]/50 hover:shadow-xl hover:shadow-[#1E5BD7]/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.address}</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    no. 15 Astrit Suli<br />
                    Prishtina 10000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20 hover:border-[#1E5BD7]/50 hover:shadow-xl hover:shadow-[#1E5BD7]/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.hours}</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    {t.location.mondayFriday}<br />
                    {t.location.saturday}<br />
                    {t.location.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20 hover:border-[#1E5BD7]/50 hover:shadow-xl hover:shadow-[#1E5BD7]/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.phone}</h3>
                  <div className="space-y-2">
                    <a href="tel:+37745707005" className="block text-white/90 hover:text-[#1E5BD7] transition-colors text-lg">
                      +377 45 70 70 05
                    </a>
                    <a href="tel:+41799329445" className="block text-white/90 hover:text-[#1E5BD7] transition-colors text-lg">
                      +41 79 932 94 45
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20 hover:border-[#1E5BD7]/50 hover:shadow-xl hover:shadow-[#1E5BD7]/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.email}</h3>
                  <a href="mailto:info@flexrentprishtina.com" className="text-white/90 hover:text-[#1E5BD7] transition-colors text-lg">
                    info@flexrentprishtina.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
