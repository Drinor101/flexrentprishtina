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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.cars.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.cars.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'sedan', 'suv', 'luxury', 'electric'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-amber-400 text-black shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filterLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.cars.premiumService}</h3>
            <p className="text-gray-600">
              {t.cars.premiumServiceDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.cars.businessReady}</h3>
            <p className="text-gray-600">
              {t.cars.businessReadyDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.cars.quickBooking}</h3>
            <p className="text-gray-600">
              {t.cars.quickBookingDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarShowcase;
