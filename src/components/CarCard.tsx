import { Users, Calendar, Gauge } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
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

  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100 scroll-reveal flex flex-col"
      style={{
        animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`,
      }}
    >
      <div className="relative overflow-hidden h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A0A0A] mb-4 group-hover:text-[#1E5BD7] transition-colors">
          {car.name}
        </h3>

        <div className="flex items-center justify-between mb-5 sm:mb-6 text-[#0A0A0A]/70 pb-4 sm:pb-5 border-b border-gray-200">
          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A2A66]/10 flex items-center justify-center">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A2A66]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-center">{car.passengers} {car.passengers === 1 ? t.cars.passenger : t.cars.passengers}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A2A66]/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A2A66]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold">{car.year}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A2A66]/10 flex items-center justify-center">
              <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A2A66]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-center">{car.transmission}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mt-auto gap-4">
          <div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A]">€{car.price}</span>
            <span className="text-[#0A0A0A]/70 ml-2 text-base sm:text-lg">/day</span>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#0A2A66] to-[#12408C] hover:from-[#12408C] hover:to-[#1E5BD7] text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 group/btn w-full sm:w-auto justify-center"
          >
            <span>{t.cars.bookBtn}</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
