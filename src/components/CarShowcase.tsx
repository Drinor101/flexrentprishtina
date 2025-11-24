import { useState } from 'react';
import { Users, Briefcase, Zap } from 'lucide-react';
import CarCard from './CarCard';
import { useLanguage } from '../i18n/LanguageContext';

const cars = [
  {
    id: 1,
    name: 'Mercedes S-Class',
    category: 'Luxury Sedan',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 150,
    passengers: 4,
    bags: 3,
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'BMW X7',
    category: 'Premium SUV',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 180,
    passengers: 7,
    bags: 4,
    transmission: 'Automatic',
  },
  {
    id: 3,
    name: 'Audi A8',
    category: 'Executive',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 140,
    passengers: 5,
    bags: 3,
    transmission: 'Automatic',
  },
  {
    id: 4,
    name: 'Porsche Cayenne',
    category: 'Sport SUV',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 200,
    passengers: 5,
    bags: 3,
    transmission: 'Automatic',
  },
  {
    id: 5,
    name: 'Range Rover Sport',
    category: 'Luxury SUV',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 190,
    passengers: 5,
    bags: 4,
    transmission: 'Automatic',
  },
  {
    id: 6,
    name: 'Tesla Model S',
    category: 'Electric Luxury',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 170,
    passengers: 5,
    bags: 2,
    transmission: 'Automatic',
  },
];

function CarShowcase() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredCars = filter === 'all'
    ? cars
    : cars.filter(car => car.category.toLowerCase().includes(filter));

  const filterLabels: Record<string, string> = {
    all: t.cars.allFilter,
    sedan: t.cars.sedanFilter,
    suv: t.cars.suvFilter,
    luxury: t.cars.luxuryFilter,
    electric: t.cars.electricFilter,
  };

  return (
    <section id="cars" className="py-24 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t.cars.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.cars.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 scroll-reveal">
          {['all', 'sedan', 'suv', 'luxury', 'electric'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-amber-400/50'
              }`}
            >
              {filterLabels[category]}
            </button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {filteredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 scroll-reveal">
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100 hover:border-amber-400/30">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <Users className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.cars.premiumService}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.cars.premiumServiceDesc}
            </p>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100 hover:border-amber-400/30">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <Briefcase className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.cars.businessReady}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.cars.businessReadyDesc}
            </p>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100 hover:border-amber-400/30">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <Zap className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.cars.quickBooking}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.cars.quickBookingDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarShowcase;
