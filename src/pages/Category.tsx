import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import CarCard, { Car } from '../components/ui/CarCard';
import Select from '../components/ui/Select';
import { SwapIcon } from '../components/icons';
import { cars } from '../data/cars';

export default function Category() {
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [showAll, setShowAll] = useState(false);

  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');

  const locations = [
    { value: 'kota-semarang', label: 'Kota Semarang' },
    { value: 'jakarta', label: 'Jakarta' },
  ];

  const dates = [{ value: '2024-07-20', label: '20 July 2024' }];
  const times = [{ value: '07:00', label: '07:00' }];

  const handleTypeToggle = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityToggle = (capacity: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
    );
  };

  const filteredCars = cars.filter((car) => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(car.type);
    const capacityMatch = selectedCapacities.length === 0 || selectedCapacities.includes(car.capacity);
    const priceMatch = car.price <= maxPrice;
    return typeMatch && capacityMatch && priceMatch;
  });

  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 9);

  const handleRentClick = (car: Car) => {
    navigate(`/detail/${car.id}`);
  };

  const handleSwapLocations = () => {
    const tempLocation = pickupLocation;
    const tempDate = pickupDate;
    const tempTime = pickupTime;
    setPickupLocation(dropoffLocation);
    setPickupDate(dropoffDate);
    setPickupTime(dropoffTime);
    setDropoffLocation(tempLocation);
    setDropoffDate(tempDate);
    setDropoffTime(tempTime);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 bg-white lg:bg-transparent p-6 lg:px-8 lg:pt-8">
          <div className="lg:sticky lg:top-6 space-y-8">
            {/* Type Filter */}
            <div>
              <h3 className="text-xs text-[#90A3BF] font-semibold mb-4 uppercase tracking-wider">TYPE</h3>
              <div className="space-y-3">
                {[
                  { label: 'Sport', count: 10 },
                  { label: 'SUV', count: 12 },
                  { label: 'MPV', count: 16 },
                  { label: 'Sedan', count: 20 },
                  { label: 'Coupe', count: 14 },
                  { label: 'Hatchback', count: 14 },
                ].map((type) => (
                  <label key={type.label} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type.label)}
                      onChange={() => handleTypeToggle(type.label)}
                      className="w-5 h-5 accent-[#3563E9] cursor-pointer"
                    />
                    <span className="text-[#596780] font-semibold text-lg group-hover:text-[#1A202C] transition-colors">
                      {type.label}
                    </span>
                    <span className="text-[#90A3BF] ml-auto">({type.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Capacity Filter */}
            <div>
              <h3 className="text-xs text-[#90A3BF] font-semibold mb-4 uppercase tracking-wider">CAPACITY</h3>
              <div className="space-y-3">
                {[
                  { label: '2 People', count: 10 },
                  { label: '4 People', count: 14 },
                  { label: '6 People', count: 12 },
                  { label: '8 or More', count: 16 },
                ].map((capacity) => (
                  <label key={capacity.label} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCapacities.includes(capacity.label)}
                      onChange={() => handleCapacityToggle(capacity.label)}
                      className="w-5 h-5 accent-[#3563E9] cursor-pointer"
                    />
                    <span className="text-[#596780] font-semibold text-lg group-hover:text-[#1A202C] transition-colors">
                      {capacity.label}
                    </span>
                    <span className="text-[#90A3BF] ml-auto">({capacity.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-xs text-[#90A3BF] font-semibold mb-4 uppercase tracking-wider">PRICE</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#C3D4E9] rounded-lg appearance-none cursor-pointer accent-[#3563E9]"
              />
              <p className="mt-3 text-[#1A202C] font-semibold text-lg">
                Max. ${maxPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 px-4 md:px-8 py-8">
          {/* Search Section */}
          <div className="mb-8">
            <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch">
              {/* Pick-Up */}
              <div className="flex-1 bg-white rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    id="pickup"
                    name="rental-type"
                    checked
                    readOnly
                    className="w-4 h-4 accent-[#3563E9]"
                  />
                  <label htmlFor="pickup" className="font-semibold text-[#1A202C]">
                    Pick - Up
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select
                    label="Locations"
                    options={locations}
                    placeholder="Select your city"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                  />
                  <Select
                    label="Date"
                    options={dates}
                    placeholder="Select your date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                  <Select
                    label="Time"
                    options={times}
                    placeholder="Select your time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex lg:items-center justify-center">
                <button
                  onClick={handleSwapLocations}
                  className="w-12 h-12 bg-[#3563E9] hover:bg-[#2952CC] rounded-lg flex items-center justify-center transition-colors shadow-md"
                  aria-label="Swap locations"
                >
                  <SwapIcon className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Drop-Off */}
              <div className="flex-1 bg-white rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    id="dropoff"
                    name="rental-type-2"
                    checked
                    readOnly
                    className="w-4 h-4 accent-[#3563E9]"
                  />
                  <label htmlFor="dropoff" className="font-semibold text-[#1A202C]">
                    Drop - Off
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select
                    label="Locations"
                    options={locations}
                    placeholder="Select your city"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                  />
                  <Select
                    label="Date"
                    options={dates}
                    placeholder="Select your date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                  />
                  <Select
                    label="Time"
                    options={times}
                    placeholder="Select your time"
                    value={dropoffTime}
                    onChange={(e) => setDropoffTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedCars.map((car) => (
              <CarCard key={car.id} car={car} onRentClick={handleRentClick} />
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show more car'}
            </Button>
            {!showAll && (
              <span className="text-[#90A3BF] text-sm">
                120 Car
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
