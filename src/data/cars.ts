// Import car images from assets
import audiQ3Img from '../assets/audi-q3.jpg';
import bmwX5Img from '../assets/bmw-x5.jpg';
import vwPoloImg from '../assets/vw-polo.jpg';
import vwTiguanImg from '../assets/vw-tiguan.jpg';
import vwTrocImg from '../assets/vw-troc.jpg';

export type RentalPlan = 'basic' | 'premium';

export interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  priceBasic: number;
  pricePremium: number;
  passengers: number;
  year: number;
  transmission: string;
}

export function getCarDailyPrice(car: Car, plan: RentalPlan): number {
  return plan === 'premium' ? car.pricePremium : car.priceBasic;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Audi Q3',
    category: 'Audi',
    image: audiQ3Img,
    priceBasic: 65,
    pricePremium: 85,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'BMW X5',
    category: 'BMW',
    image: bmwX5Img,
    priceBasic: 100,
    pricePremium: 120,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 3,
    name: 'Volkswagen Polo',
    category: 'Volkswagen',
    image: vwPoloImg,
    priceBasic: 30,
    pricePremium: 40,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 4,
    name: 'Volkswagen Tiguan',
    category: 'Volkswagen',
    image: vwTiguanImg,
    priceBasic: 60,
    pricePremium: 75,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 5,
    name: 'Volkswagen T-Roc',
    category: 'Volkswagen',
    image: vwTrocImg,
    priceBasic: 50,
    pricePremium: 65,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
];
