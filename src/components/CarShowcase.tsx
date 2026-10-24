import { useState } from 'react';
import { Plane, Fuel, CreditCard } from 'lucide-react';
import CarCard from './CarCard';
import { useLanguage } from '../i18n/LanguageContext';
import { cars } from '../data/cars';
import { stagger } from '../lib/motion';

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
    filteredCars = [...filteredCars].sort((a, b) => a.priceBasic - b.priceBasic);
  }

  // Build filter options: 'all' + available brand categories
  const filterOptions = ['all', ...availableCategories.sort()];

  const features = [
    { icon: Plane, title: t.cars.vipAirportDelivery, description: t.cars.vipAirportDeliveryDesc },
    { icon: Fuel, title: t.cars.fullTank, description: t.cars.fullTankDesc },
    { icon: CreditCard, title: t.cars.paymentOnSite, description: t.cars.paymentOnSiteDesc },
  ];

  return (
    <section id="cars" className="pt-2 sm:pt-4 pb-16 sm:pb-20 lg:pb-24 bg-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons - Dynamically generated from actual car categories */}
        {filterOptions.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 scroll-reveal px-2">
            {filterOptions.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide border ${
                  filter === category
                    ? 'bg-gradient-to-br from-gold-light via-gold to-gold-dark text-ink border-transparent shadow-lg shadow-gold/20'
                    : 'bg-transparent text-bone/70 border-white/15 hover:border-gold/60 hover:text-gold-light'
                }`}
              >
                {category === 'all'
                  ? t.cars.allFilter || 'All'
                  : category}
              </button>
            ))}
          </div>
        )}

        {/* Car Grid - wraps and centers, so an incomplete last row never leaves a gap on one side */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredCars.map((car, index) => (
            <div key={car.id} className="flex w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]">
              <CarCard car={car} index={index} />
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="surface-card scroll-reveal p-6 sm:p-8 lg:p-10 text-center group"
              style={stagger(index * 120)}
            >
              <div className="w-16 h-16 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 group-hover:border-gold transition-all duration-300">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-bone mb-3">{title}</h3>
              <p className="text-sm sm:text-base text-bone/60 leading-relaxed font-light">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarShowcase;
