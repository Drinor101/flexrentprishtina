import { Car, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-amber-400" />
              <span className="text-xl font-bold">Premium Rentals</span>
            </div>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.about}</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.fleet}</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.servicesLink}</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.contactLink}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.dailyRentals}</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.corporatePackages}</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.airportTransfer}</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">{t.footer.chauffeurService}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
