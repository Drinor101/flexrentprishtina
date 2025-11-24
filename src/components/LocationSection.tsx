import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.location.title}</h2>
          <p className="text-xl text-gray-400">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.681138079858!2d-73.98784368459395!3d40.74844097932839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.location.address}</h3>
                  <p className="text-gray-400">
                    123 Luxury Drive, Premium District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.location.hours}</h3>
                  <p className="text-gray-400">
                    {t.location.mondayFriday}<br />
                    {t.location.saturday}<br />
                    {t.location.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.location.phone}</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.location.email}</h3>
                  <p className="text-gray-400">info@premiumcarrental.com</p>
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
