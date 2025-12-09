import { Car, Facebook, Instagram, Twitter, Linkedin, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-[#0A2A66] via-[#12408C] to-[#0A2A66] text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Car className="w-10 h-10 text-white" />
                <div className="absolute inset-0 bg-white/20 blur-xl"></div>
              </div>
              <span className="text-2xl font-bold">Flex Rent</span>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-[#1E5BD7] transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#1E5BD7] group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#cars" className="text-white/80 hover:text-[#1E5BD7] transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#1E5BD7] group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.fleet}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#1E5BD7] transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#1E5BD7] group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.servicesLink}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#1E5BD7] transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-[#1E5BD7] group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.contactLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.location.phone}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+37745707005" className="text-white/80 hover:text-[#1E5BD7] transition-colors duration-300 text-lg flex items-start gap-3 group">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-[#1E5BD7]" />
                  <span>+377 45 70 70 05</span>
                </a>
              </li>
              <li>
                <a href="tel:+41799329445" className="text-white/80 hover:text-[#1E5BD7] transition-colors duration-300 text-lg flex items-start gap-3 group">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-[#1E5BD7]" />
                  <span>+41 79 932 94 45</span>
                </a>
              </li>
            </ul>
            
            <h4 className="text-xl font-bold mb-6 text-white mt-8">{t.location.address}</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#1E5BD7]" />
              <p className="text-white/80 text-lg leading-relaxed">
                no. 15 Astrit Suli<br />
                Prishtina 10000
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-[#1E5BD7] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-[#1E5BD7]/50 group"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/flexrentprishtina/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#1E5BD7] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-[#1E5BD7]/50 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-[#1E5BD7] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-[#1E5BD7]/50 group"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-[#1E5BD7] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-[#1E5BD7]/50 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-lg">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
