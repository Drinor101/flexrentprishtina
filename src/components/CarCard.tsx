import { Users, Briefcase, Gauge } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  passengers: number;
  bags: number;
  transmission: string;
}

interface CarCardProps {
  car: Car;
  index: number;
}

function CarCard({ car, index }: CarCardProps) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-amber-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
          {car.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{car.name}</h3>

        <div className="flex items-center justify-between mb-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{car.passengers}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            <span>{car.bags}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-4xl font-bold text-gray-900">${car.price}</span>
            <span className="text-gray-600 ml-2">/day</span>
          </div>
          <a
            href="#contact"
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-block text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
