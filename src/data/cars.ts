// Import car images from assets
import audiQ3Img from '../assets/audi-q3.jpg';
import bmwX5Img from '../assets/bmw-x5.jpg';
import vwPoloImg from '../assets/vw-polo.jpg';
import vwTiguanImg from '../assets/vw-tiguan.jpg';
import vwTrocImg from '../assets/vw-troc.jpg';

export interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  passengers: number;
  year: number;
  transmission: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Audi Q3',
    category: 'Audi',
    image: audiQ3Img,
    price: 69,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'BMW X5',
    category: 'BMW',
    image: bmwX5Img,
    price: 99,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 3,
    name: 'Volkswagen Polo',
    category: 'Volkswagen',
    image: vwPoloImg,
    price: 39,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 4,
    name: 'Volkswagen Tiguan',
    category: 'Volkswagen',
    image: vwTiguanImg,
    price: 59,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
  {
    id: 5,
    name: 'Volkswagen T-Roc',
    category: 'Volkswagen',
    image: vwTrocImg,
    price: 49,
    passengers: 5,
    year: 2024,
    transmission: 'Automatic',
  },
];

