import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import { StarIcon } from '../components/icons';
import { cars } from '../data/cars';

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [agreedToMarketing, setAgreedToMarketing] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Sample car for rental summary
  const car = cars[1]; // Nissan GT-R

  const locations = [
    { value: '', label: 'Select your city' },
    { value: 'kota-semarang', label: 'Kota Semarang' },
  ];

  const dates = [
    { value: '', label: 'Select your date' },
    { value: '2024-07-20', label: '20 July 2024' },
  ];

  const times = [
    { value: '', label: 'Select your time' },
    { value: '07:00', label: '07:00' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to terms and conditions');
      return;
    }
    // Navigate to success page or dashboard
    alert('Payment successful!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Info */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1A202C] mb-1">Billing Info</h2>
                  <p className="text-[#90A3BF] text-sm">Please enter your billing info</p>
                </div>
                <p className="text-[#90A3BF] text-sm">Step 1 of 4</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name" placeholder="Your name" />
                <Input label="Phone Number" placeholder="Phone number" type="tel" />
                <Input label="Address" placeholder="Address" />
                <Input label="Town / City" placeholder="Town or city" />
              </form>
            </div>

            {/* Rental Info */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1A202C] mb-1">Rental Info</h2>
                  <p className="text-[#90A3BF] text-sm">Please select your rental date</p>
                </div>
                <p className="text-[#90A3BF] text-sm">Step 2 of 4</p>
              </div>

              <div className="space-y-6">
                {/* Pick-Up */}
                <div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select label="Locations" options={locations} placeholder="Select your city" />
                    <Select label="Date" options={dates} placeholder="Select your date" />
                    <Select label="Time" options={times} placeholder="Select your time" />
                  </div>
                </div>

                {/* Drop-Off */}
                <div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select label="Locations" options={locations} placeholder="Select your city" />
                    <Select label="Date" options={dates} placeholder="Select your date" />
                    <Select label="Time" options={times} placeholder="Select your time" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1A202C] mb-1">Payment Method</h2>
                  <p className="text-[#90A3BF] text-sm">Please enter your payment method</p>
                </div>
                <p className="text-[#90A3BF] text-sm">Step 3 of 4</p>
              </div>

              <div className="space-y-6">
                {/* Credit Card */}
                <div>
                  <div className="flex items-center justify-between bg-[#F6F7F9] rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                        className="w-4 h-4 accent-[#3563E9]"
                      />
                      <label htmlFor="credit-card" className="font-semibold text-[#1A202C]">
                        Credit Card
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20'%3E%3Crect fill='%231434CB' width='32' height='20' rx='2'/%3E%3Ccircle fill='%23EB001B' cx='12' cy='10' r='5'/%3E%3Ccircle fill='%23F79E1B' cx='20' cy='10' r='5'/%3E%3C/svg%3E" alt="Visa" className="h-6" />
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20'%3E%3Crect fill='%231434CB' width='32' height='20' rx='2'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='10' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EVISA%3C/text%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
                    </div>
                  </div>
                  {paymentMethod === 'credit-card' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Card Number" placeholder="Card number" />
                      <Input label="Expiration Date" placeholder="DD / MM / YY" />
                      <Input label="Card Holder" placeholder="Card holder" />
                      <Input label="CVC" placeholder="CVC" />
                    </div>
                  )}
                </div>

                {/* PayPal */}
                <div className="flex items-center justify-between bg-[#F6F7F9] rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment-method"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="w-4 h-4 accent-[#3563E9]"
                    />
                    <label htmlFor="paypal" className="font-semibold text-[#1A202C]">
                      PayPal
                    </label>
                  </div>
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='16'%3E%3Ctext x='0' y='12' fill='%23003087' font-size='12' font-weight='bold' font-family='Arial'%3EPayPal%3C/text%3E%3C/svg%3E" alt="PayPal" className="h-6" />
                </div>

                {/* Bitcoin */}
                <div className="flex items-center justify-between bg-[#F6F7F9] rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="bitcoin"
                      name="payment-method"
                      checked={paymentMethod === 'bitcoin'}
                      onChange={() => setPaymentMethod('bitcoin')}
                      className="w-4 h-4 accent-[#3563E9]"
                    />
                    <label htmlFor="bitcoin" className="font-semibold text-[#1A202C]">
                      Bitcoin
                    </label>
                  </div>
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='16'%3E%3Ctext x='0' y='12' fill='%23F7931A' font-size='12' font-weight='bold' font-family='Arial'%3EBitcoin%3C/text%3E%3C/svg%3E" alt="Bitcoin" className="h-6" />
                </div>
              </div>
            </div>

            {/* Confirmation */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1A202C] mb-1">Confirmation</h2>
                  <p className="text-[#90A3BF] text-sm">We are getting to the end. Just few clicks and your rental is ready!</p>
                </div>
                <p className="text-[#90A3BF] text-sm">Step 4 of 4</p>
              </div>

              <div className="space-y-4 mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreedToMarketing}
                    onChange={(e) => setAgreedToMarketing(e.target.checked)}
                    className="w-5 h-5 accent-[#3563E9] mt-0.5 cursor-pointer"
                  />
                  <span className="text-[#596780] leading-relaxed">
                    I agree with sending an Marketing and newsletter emails. No spam, promissed!
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-5 h-5 accent-[#3563E9] mt-0.5 cursor-pointer"
                  />
                  <span className="text-[#596780] leading-relaxed">
                    I agree with our terms and conditions and privacy policy.
                  </span>
                </label>
              </div>

              <Button
                className="w-full md:w-auto"
                size="lg"
                onClick={handleSubmit}
                disabled={!agreedToTerms}
              >
                Rent Now
              </Button>

              <div className="mt-8 flex items-start gap-3">
                <svg className="w-8 h-8 text-[#1A202C] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-[#1A202C] mb-1">All your data are safe</h3>
                  <p className="text-[#90A3BF] text-sm leading-relaxed">
                    We are using the most advanced security to provide you the best experience ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Rental Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-[#1A202C] mb-6">Rental Summary</h3>
              <p className="text-[#90A3BF] text-sm mb-6">
                Prices may change depending on the length of the rental and the price of your rental car.
              </p>

              <div className="flex gap-4 mb-6">
                <div className="w-32 h-24 bg-[#3563E9] rounded-lg flex items-center justify-center">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#1A202C] mb-2">{car.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <StarIcon key={i} filled className="w-4 h-4" />
                      ))}
                      <StarIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[#596780] text-sm">440+ Reviewer</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#90A3BF]">Subtotal</span>
                  <span className="text-[#1A202C] font-semibold">${car.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#90A3BF]">Tax</span>
                  <span className="text-[#1A202C] font-semibold">$0</span>
                </div>
              </div>

              <div className="mt-6 mb-6 p-4 bg-[#F6F7F9] rounded-lg flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Apply promo code"
                  className="bg-transparent outline-none text-[#1A202C] placeholder:text-[#90A3BF] flex-1"
                />
                <button className="text-[#3563E9] font-semibold hover:underline text-sm">
                  Apply now
                </button>
              </div>

              <div className="border-t pt-6 flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-[#1A202C]">Total Rental Price</p>
                  <p className="text-[#90A3BF] text-xs mt-1">
                    Overall price and includes rental discount
                  </p>
                </div>
                <p className="text-[#1A202C] text-2xl font-bold">
                  ${car.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
