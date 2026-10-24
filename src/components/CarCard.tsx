import { Users, Calendar, Gauge } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Car } from '../data/cars';
import { stagger } from '../lib/motion';

interface CarCardProps {
  car: Car;
  index: number;
}

function CarCard({ car, index }: CarCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className="surface-card w-full overflow-hidden shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-gold/10 transform hover:-translate-y-2 group scroll-reveal flex flex-col"
      style={stagger((index % 3) * 120)}
    >
      <div className="relative overflow-hidden aspect-[5/4] bg-black">
        <img
          src={car.image}
          alt={car.name}
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-x-0 -bottom-px h-24 bg-gradient-to-t from-ink-raised to-transparent"></div>
      </div>

      <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col">
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-bone mb-4 group-hover:text-gold-light transition-colors">
          {car.name}
        </h3>

        <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6 text-bone/70 py-4 border-y border-white/10">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{car.passengers} {car.passengers === 1 ? t.cars.passenger : t.cars.passengers}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-gold flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{car.transmission}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold text-bone/50 uppercase tracking-widest mb-1">Flex Basic</p>
            <p>
              <span className="text-2xl sm:text-3xl font-bold text-bone">€{car.priceBasic}</span>
              <span className="text-bone/50 ml-1 text-sm">/day</span>
            </p>
          </div>
          <div className="pl-4 border-l border-white/10">
            <p className="text-[11px] sm:text-xs font-semibold text-gold/80 uppercase tracking-widest mb-1">Flex Premium</p>
            <p>
              <span className="text-2xl sm:text-3xl font-bold text-gold-light">€{car.pricePremium}</span>
              <span className="text-bone/50 ml-1 text-sm">/day</span>
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="btn-gold px-6 py-3 text-sm sm:text-base group/btn w-full"
        >
          <span>{t.cars.bookBtn}</span>
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}

export default CarCard;
