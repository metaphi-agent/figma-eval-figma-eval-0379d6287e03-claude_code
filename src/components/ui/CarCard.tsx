import { useState } from 'react';
import { HeartIcon, GasStationIcon, ProfileIcon } from '../icons';
import Button from './Button';

export interface Car {
  id: number;
  name: string;
  type: string;
  image: string;
  gasoline: string;
  steering: string;
  capacity: string;
  price: number;
  originalPrice?: number;
}

interface CarCardProps {
  car: Car;
  onRentClick?: (car: Car) => void;
}

export default function CarCard({ car, onRentClick }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-[#1A202C]">{car.name}</h3>
          <p className="text-sm text-[#90A3BF] font-medium">{car.type}</p>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="p-1 hover:scale-110 transition-transform"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <HeartIcon filled={isFavorite} className="w-6 h-6" />
        </button>
      </div>

      {/* Car Image */}
      <div className="relative h-32 mb-6 flex items-center justify-center">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Specifications */}
      <div className="flex items-center gap-4 mb-6 text-[#90A3BF]">
        <div className="flex items-center gap-1.5">
          <GasStationIcon className="w-5 h-5" />
          <span className="text-sm font-medium">{car.gasoline}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-medium">{car.steering}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ProfileIcon className="w-5 h-5" />
          <span className="text-sm font-medium">{car.capacity}</span>
        </div>
      </div>

      {/* Price and Button */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-[#1A202C]">
            ${car.price.toFixed(2)}/
            <span className="text-sm text-[#90A3BF] font-medium">day</span>
          </p>
          {car.originalPrice && (
            <p className="text-sm text-[#90A3BF] line-through">
              ${car.originalPrice.toFixed(2)}
            </p>
          )}
        </div>
        <Button
          size="md"
          onClick={() => onRentClick?.(car)}
        >
          Rent Now
        </Button>
      </div>
    </div>
  );
}
