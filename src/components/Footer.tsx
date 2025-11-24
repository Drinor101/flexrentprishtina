import { Car, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Car className="w-10 h-10 text-amber-400" />
                <div className="absolute inset-0 bg-amber-400/20 blur-xl"></div>
              </div>
              <span className="text-2xl font-bold">Flex Rent</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#cars" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.fleet}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.servicesLink}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.contactLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.services}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.dailyRentals}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.corporatePackages}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.airportTransfer}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-lg flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  {t.footer.chauffeurService}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-amber-400/50 group"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-amber-400/50 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-amber-400/50 group"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-amber-400/50 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-lg">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
