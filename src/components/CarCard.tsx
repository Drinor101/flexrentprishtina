import { useState } from 'react';
import { Users, Calendar, Gauge } from 'lucide-react';
import CarCarousel from './CarCarousel';
import { useLanguage } from '../i18n/LanguageContext';

interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  images?: string[];
  price: number;
  passengers: number;
  year: number;
  transmission: string;
}

interface CarCardProps {
  car: Car;
  index: number;
}

function CarCard({ car, index }: CarCardProps) {
  const { t } = useLanguage();
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const carImages = car.images && car.images.length > 0 ? car.images : [car.image];

  return (
    <>
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100 scroll-reveal"
        style={{
          animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`,
        }}
      >
        <div className="relative overflow-hidden h-64 lg:h-72 cursor-pointer" onClick={() => setIsCarouselOpen(true)}>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-5 left-5 bg-[#0A2A66] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm">
            {car.category}
          </div>
          {carImages.length > 1 && (
            <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {carImages.length} {t.cars.photos}
            </div>
          )}
        </div>

      <div className="p-6 lg:p-8">
        <h3 className="text-2xl lg:text-3xl font-bold text-[#0A0A0A] mb-5 group-hover:text-[#1E5BD7] transition-colors">
          {car.name}
        </h3>

        <div className="flex items-center justify-between mb-8 text-[#0A0A0A]/70 pb-6 border-b border-gray-200">
          <div className="flex flex-col items-center gap-2">
            <Users className="w-6 h-6 text-[#0A2A66]" />
            <span className="text-sm font-semibold">{car.passengers} {car.passengers === 1 ? t.cars.passenger : t.cars.passengers}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Calendar className="w-6 h-6 text-[#0A2A66]" />
            <span className="text-sm font-semibold">{car.year}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Gauge className="w-6 h-6 text-[#0A2A66]" />
            <span className="text-sm font-semibold">{car.transmission}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-4xl lg:text-5xl font-extrabold text-[#0A0A0A]">${car.price}</span>
            <span className="text-[#0A0A0A]/70 ml-2 text-lg">/day</span>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#0A2A66] to-[#12408C] hover:from-[#12408C] hover:to-[#1E5BD7] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 group/btn"
          >
            <span>{t.cars.bookBtn}</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
      </div>
      <CarCarousel
        images={carImages}
        carName={car.name}
        isOpen={isCarouselOpen}
        onClose={() => setIsCarouselOpen(false)}
        initialIndex={0}
      />
    </>
  );
}

export default CarCard;
