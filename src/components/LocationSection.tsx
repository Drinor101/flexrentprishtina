import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
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
          <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl h-[450px] lg:h-[500px] scroll-reveal border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.681138079858!2d-73.98784368459395!3d40.74844097932839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123"
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
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-gray-800 transition-all duration-300 group border border-gray-700 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <MapPin className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.address}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    123 Luxury Drive, Premium District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-gray-800 transition-all duration-300 group border border-gray-700 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Clock className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.hours}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {t.location.mondayFriday}<br />
                    {t.location.saturday}<br />
                    {t.location.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-gray-800 transition-all duration-300 group border border-gray-700 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Phone className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.phone}</h3>
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-gray-800 transition-all duration-300 group border border-gray-700 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-400/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Mail className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{t.location.email}</h3>
                  <a href="mailto:info@premiumcarrental.com" className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                    info@premiumcarrental.com
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
