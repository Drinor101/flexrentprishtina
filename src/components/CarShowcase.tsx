import { useState } from 'react';
import { Plane, Fuel, CreditCard } from 'lucide-react';
import CarCard from './CarCard';
import { useLanguage } from '../i18n/LanguageContext';
import { cars } from '../data/cars';

function CarShowcase() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  // Get unique brand categories from actual cars
  const availableCategories = Array.from(new Set(cars.map(car => car.category)));
  
  let filteredCars = filter === 'all'
    ? cars
    : cars.filter(car => car.category === filter);

  // Automatically sort by price (low to high) when "all" filter is selected
  if (filter === 'all') {
    filteredCars = [...filteredCars].sort((a, b) => a.price - b.price);
  }

  // Build filter options: 'all' + available brand categories
  const filterOptions = ['all', ...availableCategories.sort()];

  return (
    <section id="cars" className="pt-12 sm:pt-16 pb-24 sm:pb-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons - Dynamically generated from actual car categories */}
        {filterOptions.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 scroll-reveal px-2">
            {filterOptions.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-[#0A2A66] text-white shadow-lg shadow-[#0A2A66]/30 scale-105'
                    : 'bg-white text-[#0A0A0A] hover:bg-gray-50 border-2 border-gray-200 hover:border-[#1E5BD7]/50'
                }`}
              >
                {category === 'all' 
                  ? t.cars.allFilter || 'All'
                  : category}
              </button>
            ))}
          </div>
        )}

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-24">
          {filteredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 scroll-reveal">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100 hover:border-[#1E5BD7]/30">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0A2A66]/10 to-[#12408C]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <Plane className="w-10 h-10 text-[#0A2A66]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-3">{t.cars.vipAirportDelivery}</h3>
            <p className="text-sm sm:text-base text-[#0A0A0A]/70 leading-relaxed">
              {t.cars.vipAirportDeliveryDesc}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100 hover:border-[#1E5BD7]/30">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0A2A66]/10 to-[#12408C]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <Fuel className="w-10 h-10 text-[#0A2A66]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-3">{t.cars.fullTank}</h3>
            <p className="text-sm sm:text-base text-[#0A0A0A]/70 leading-relaxed">
              {t.cars.fullTankDesc}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100 hover:border-[#1E5BD7]/30">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0A2A66]/10 to-[#12408C]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <CreditCard className="w-10 h-10 text-[#0A2A66]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-3">{t.cars.paymentOnSite}</h3>
            <p className="text-sm sm:text-base text-[#0A0A0A]/70 leading-relaxed">
              {t.cars.paymentOnSiteDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarShowcase;
