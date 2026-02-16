import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import CarCard, { Car } from '../components/ui/CarCard';
import Select from '../components/ui/Select';
import { SwapIcon } from '../components/icons';
import { cars } from '../data/cars';

export default function Home() {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
  const [showAll, setShowAll] = useState(false);

  const popularCars = cars.slice(0, 4);
  const recommendationCars = cars.slice(4, 12);
  const displayedCars = showAll ? recommendationCars : recommendationCars.slice(0, 8);

  const locations = [
    { value: 'kota-semarang', label: 'Kota Semarang' },
    { value: 'jakarta', label: 'Jakarta' },
    { value: 'bandung', label: 'Bandung' },
    { value: 'surabaya', label: 'Surabaya' },
  ];

  const dates = [
    { value: '2024-07-20', label: '20 July 2024' },
    { value: '2024-07-21', label: '21 July 2024' },
    { value: '2024-07-22', label: '22 July 2024' },
  ];

  const times = [
    { value: '07:00', label: '07:00' },
    { value: '08:00', label: '08:00' },
    { value: '09:00', label: '09:00' },
    { value: '10:00', label: '10:00' },
  ];

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
    <div className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <div className="px-4 md:px-8 lg:px-16 pt-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Ad 1 */}
          <div className="bg-[#54A6FF] rounded-lg p-6 md:p-8 relative overflow-hidden min-h-[280px] md:min-h-[360px]">
            <div className="relative z-10 max-w-md">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                The Best Platform for Car Rental
              </h2>
              <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed">
                Ease of doing a car rental safely and reliably. Of course at a low price.
              </p>
              <Button variant="primary" className="bg-[#3563E9] hover:bg-[#2952CC]">
                Rental Car
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2">
              <img
                src="https://cdn.imagin.studio/getImage?customer=img&make=porsche&modelFamily=911&zoomType=fullscreen&angle=01"
                alt="Car"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Ad 2 */}
          <div className="bg-[#3563E9] rounded-lg p-6 md:p-8 relative overflow-hidden min-h-[280px] md:min-h-[360px]">
            <div className="relative z-10 max-w-md">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                Easy way to rent a car at a low price
              </h2>
              <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed">
                Providing cheap car rental services and safe and comfortable facilities.
              </p>
              <Button variant="secondary" className="bg-[#54A6FF] hover:bg-[#3B93E6]">
                Rental Car
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2">
              <img
                src="https://cdn.imagin.studio/getImage?customer=img&make=nissan&modelFamily=gt-r&zoomType=fullscreen&angle=01"
                alt="Car"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="px-4 md:px-8 lg:px-16 pb-8">
        <div className="max-w-7xl mx-auto">
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
      </div>

      {/* Popular Car Section */}
      <div className="px-4 md:px-8 lg:px-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-base text-[#90A3BF] font-semibold">Popular Car</h3>
            <button
              onClick={() => navigate('/category')}
              className="text-[#3563E9] font-semibold hover:underline text-base"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} onRentClick={handleRentClick} />
            ))}
          </div>
        </div>
      </div>

      {/* Recommendation Car Section */}
      <div className="px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-base text-[#90A3BF] font-semibold mb-5">Recommendation Car</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedCars.map((car) => (
              <CarCard key={car.id} car={car} onRentClick={handleRentClick} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show more car'}
            </Button>
            {!showAll && (
              <span className="ml-4 text-[#90A3BF] self-center text-sm">
                120 Car
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
