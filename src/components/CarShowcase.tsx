import { useState } from 'react';
import { Users, Briefcase, Zap } from 'lucide-react';
import CarCard from './CarCard';
import { useLanguage } from '../i18n/LanguageContext';

// Import car images from assets - Grouped by car
// Car 1 - Mercedes S-Class
import car1Img1 from '../assets/0a9e038e-8852-483c-8848-f7360abfe368.jpg';
import car1Img2 from '../assets/0a9e038e-8852-483c-8848-f7360abfe368 (1).jpg';
import car1Img3 from '../assets/144b429d-6fb2-4a19-ba97-2d855cbcb756.jpg';
import car1Img4 from '../assets/1f3fc7e0-7d48-4cf8-8996-4842d2f8f4e6.jpg';

// Car 2 - BMW X7
import car2Img1 from '../assets/1fe7d105-1603-4fb9-ad01-3cc2c9dd1ab7.jpg';
import car2Img2 from '../assets/20bb27ff-6ca0-431a-a0bc-ea249ef981b7.jpg';
import car2Img3 from '../assets/30fadb0c-e574-4562-9ef3-6942e8a8e813.jpg';
import car2Img4 from '../assets/32031875-fa66-465d-99be-fd1537840d9e.jpg';

// Car 3 - Audi A8
import car3Img1 from '../assets/32f9b537-7dba-4474-9d74-2f4c1f94b61f.jpg';
import car3Img2 from '../assets/38593c86-68bd-401c-a918-373ecbcbeff5.jpg';
import car3Img3 from '../assets/38593c86-68bd-401c-a918-373ecbcbeff5 (1).jpg';
import car3Img4 from '../assets/3952e727-0ef7-49d2-80dd-1a409ebd2894.jpg';

// Car 4 - Porsche Cayenne
import car4Img1 from '../assets/3da429ad-df42-460e-9f3f-6f1176e08c63.jpg';
import car4Img2 from '../assets/3efca3e1-df22-4031-a04c-7568b141823a.jpg';
import car4Img3 from '../assets/3efca3e1-df22-4031-a04c-7568b141823a (1).jpg';
import car4Img4 from '../assets/3efca3e1-df22-4031-a04c-7568b141823a (2).jpg';

// Car 5 - Range Rover Sport
import car5Img1 from '../assets/4e4ae1a7-fac4-42fa-9f7b-3807ca941725.jpg';
import car5Img2 from '../assets/4e4ae1a7-fac4-42fa-9f7b-3807ca941725 (1).jpg';
import car5Img3 from '../assets/63256f77-d2f1-413f-8a2b-fecc711c7e2f.jpg';
import car5Img4 from '../assets/698db74f-3012-47ee-a81d-a175c0335dcd.jpg';

// Car 6 - Tesla Model S
import car6Img1 from '../assets/69d54a4c-d686-46ed-a14b-b881c0689e8a.jpg';
import car6Img2 from '../assets/69d54a4c-d686-46ed-a14b-b881c0689e8a (1).jpg';
import car6Img3 from '../assets/6a3f4052-245b-4a14-8a8c-e105b0fcc7f5.jpg';
import car6Img4 from '../assets/6a3f4052-245b-4a14-8a8c-e105b0fcc7f5 (1).jpg';

const cars = [
  {
    id: 1,
    name: 'Mercedes S-Class',
    category: 'Luxury Sedan',
    image: car1Img1,
    images: [car1Img1, car1Img2, car1Img3, car1Img4],
    price: 150,
    passengers: 4,
    bags: 3,
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'BMW X7',
    category: 'Premium SUV',
    image: car2Img1,
    images: [car2Img1, car2Img2, car2Img3, car2Img4],
    price: 180,
    passengers: 7,
    bags: 4,
    transmission: 'Automatic',
  },
  {
    id: 3,
    name: 'Audi A8',
    category: 'Executive',
    image: car3Img1,
    images: [car3Img1, car3Img2, car3Img3, car3Img4],
    price: 140,
    passengers: 5,
    bags: 3,
    transmission: 'Automatic',
  },
  {
    id: 4,
    name: 'Porsche Cayenne',
    category: 'Sport SUV',
    image: car4Img1,
    images: [car4Img1, car4Img2, car4Img3, car4Img4],
    price: 200,
    passengers: 5,
    bags: 3,
    transmission: 'Automatic',
  },
  {
    id: 5,
    name: 'Range Rover Sport',
    category: 'Luxury SUV',
    image: car5Img1,
    images: [car5Img1, car5Img2, car5Img3, car5Img4],
    price: 190,
    passengers: 5,
    bags: 4,
    transmission: 'Automatic',
  },
  {
    id: 6,
    name: 'Tesla Model S',
    category: 'Electric Luxury',
    image: car6Img1,
    images: [car6Img1, car6Img2, car6Img3, car6Img4],
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
