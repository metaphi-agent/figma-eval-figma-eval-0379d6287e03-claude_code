import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import CarCard from '../components/ui/CarCard';
import { StarIcon } from '../components/icons';
import { cars, reviews } from '../data/cars';

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const car = cars.find((c) => c.id === Number(id));
  const recentCars = cars.slice(0, 3);
  const recommendationCars = cars.slice(4, 7);

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A202C] mb-4">Car not found</h1>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </div>
    );
  }

  const images = [car.image, car.image, car.image];
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
        {/* Sidebar Filters (same as Category page - could be extracted as component) */}
        <aside className="w-full lg:w-72 bg-white lg:bg-transparent p-6 lg:px-8 lg:pt-8 hidden lg:block">
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
                defaultValue="100"
                className="w-full h-2 bg-[#C3D4E9] rounded-lg appearance-none cursor-pointer accent-[#3563E9]"
              />
              <p className="mt-3 text-[#1A202C] font-semibold text-lg">
                Max. $100.00
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 px-4 md:px-8 py-8 space-y-8">
          {/* Car Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images & Description */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image */}
              <div className="bg-[#54A6FF] rounded-lg p-6 relative overflow-hidden min-h-[280px] md:min-h-[360px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={images[selectedImage]}
                    alt={car.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="relative z-10">
                  <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                    Sports car with the best design and acceleration
                  </h2>
                  <p className="text-white/90 text-sm md:text-base max-w-md">
                    Safety and comfort while driving a futuristic and elegant sports car
                  </p>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-white rounded-lg p-4 hover:ring-2 hover:ring-[#3563E9] transition-all ${
                      selectedImage === index ? 'ring-2 ring-[#3563E9]' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${car.name} view ${index + 1}`}
                      className="w-full h-20 object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg p-6">
                <p className="text-[#596780] leading-relaxed">
                  NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                </p>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#90A3BF] text-sm mb-1">Type Car</p>
                    <p className="text-[#596780] font-semibold">{car.type}</p>
                  </div>
                  <div>
                    <p className="text-[#90A3BF] text-sm mb-1">Capacity</p>
                    <p className="text-[#596780] font-semibold">{car.capacity}</p>
                  </div>
                  <div>
                    <p className="text-[#90A3BF] text-sm mb-1">Steering</p>
                    <p className="text-[#596780] font-semibold">{car.steering}</p>
                  </div>
                  <div>
                    <p className="text-[#90A3BF] text-sm mb-1">Gasoline</p>
                    <p className="text-[#596780] font-semibold">{car.gasoline}</p>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-[#1A202C]">Reviews</h3>
                    <span className="bg-[#3563E9] text-white text-sm font-bold px-3 py-1 rounded">
                      {reviews.length}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {displayedReviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b last:border-0">
                      <div className="flex gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-bold text-[#1A202C]">{review.name}</h4>
                              <p className="text-sm text-[#90A3BF]">{review.role}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-[#90A3BF] mb-1">{review.date}</p>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    filled={i < review.rating}
                                    className="w-4 h-4"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-[#596780] text-sm leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {reviews.length > 2 && (
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="mt-4 text-[#90A3BF] hover:text-[#3563E9] text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    {showAllReviews ? 'Show Less' : `Show All ${reviews.length}`}
                    <svg
                      className={`w-4 h-4 transition-transform ${showAllReviews ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column - Rental Summary */}
            <div>
              <div className="bg-white rounded-lg p-6 sticky top-6">
                <h3 className="text-lg font-bold text-[#1A202C] mb-6">{car.name}</h3>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <StarIcon key={i} filled className="w-5 h-5" />
                    ))}
                    <StarIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[#596780] text-sm">440+ Reviewer</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#90A3BF]">Subtotal</span>
                    <span className="text-[#1A202C] font-semibold">${car.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#90A3BF]">Tax</span>
                    <span className="text-[#1A202C] font-semibold">$0</span>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-[#F6F7F9] rounded-lg">
                  <input
                    type="text"
                    placeholder="Apply promo code"
                    className="w-full bg-transparent outline-none text-[#1A202C] placeholder:text-[#90A3BF]"
                  />
                  <button className="mt-2 text-[#3563E9] font-semibold hover:underline text-sm">
                    Apply now
                  </button>
                </div>

                <div className="flex items-baseline justify-between mb-6 pb-6 border-b">
                  <div>
                    <p className="text-[#1A202C] text-xl font-bold">
                      Total Rental Price
                    </p>
                    <p className="text-[#90A3BF] text-xs mt-1">
                      Overall price and includes rental discount
                    </p>
                  </div>
                  <p className="text-[#1A202C] text-2xl font-bold">
                    ${car.price.toFixed(2)}
                  </p>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => navigate('/payment')}
                >
                  Rent Now
                </Button>
              </div>
            </div>
          </div>

          {/* Recent Car Section */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-base text-[#90A3BF] font-semibold">Recent Car</h3>
              <button
                onClick={() => navigate('/category')}
                className="text-[#3563E9] font-semibold hover:underline text-base"
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentCars.map((c) => (
                <CarCard
                  key={c.id}
                  car={c}
                  onRentClick={(car) => navigate(`/detail/${car.id}`)}
                />
              ))}
            </div>
          </div>

          {/* Recommendation Car Section */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-base text-[#90A3BF] font-semibold">Recommendation Car</h3>
              <button
                onClick={() => navigate('/category')}
                className="text-[#3563E9] font-semibold hover:underline text-base"
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recommendationCars.map((c) => (
                <CarCard
                  key={c.id}
                  car={c}
                  onRentClick={(car) => navigate(`/detail/${car.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
