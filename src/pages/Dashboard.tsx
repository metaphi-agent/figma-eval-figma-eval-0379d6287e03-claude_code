import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from '../components/ui/Select';
import { CarIcon } from '../components/icons';
import { cars } from '../data/cars';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('dashboard');

  const locations = [
    { value: 'kota-semarang', label: 'Kota Semarang' },
  ];

  const dates = [
    { value: '2024-07-20', label: '20 July 2022' },
  ];

  const times = [
    { value: '07:00', label: '07:00' },
  ];

  const recentTransactions = [
    { id: 1, car: cars[1], date: '20 July', price: 80.00 },
    { id: 2, car: cars[0], date: '19 July', price: 99.00 },
    { id: 3, car: cars[2], date: '18 July', price: 96.00 },
    { id: 4, car: cars[5], date: '17 July', price: 80.00 },
  ];

  const topCarRentals = [
    { name: 'Sport Car', value: 17439, percentage: 24, color: '#0D3559' },
    { name: 'SUV', value: 9478, percentage: 13, color: '#175D9C' },
    { name: 'Coupe', value: 18197, percentage: 25, color: '#2185DE' },
    { name: 'Hatchback', value: 12510, percentage: 17, color: '#63A9E8' },
    { name: 'MPV', value: 14406, percentage: 20, color: '#A6CEF2' },
  ];

  const total = topCarRentals.reduce((sum, item) => sum + item.value, 0);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'car-rent', label: 'Car Rent', icon: '🚗' },
    { id: 'insight', label: 'Insight', icon: '📊' },
    { id: 'reimburse', label: 'Reimburse', icon: '💰' },
    { id: 'inbox', label: 'Inbox', icon: '📬' },
    { id: 'calendar', label: 'Calender', icon: '📅' },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#C3D4E9]/30 flex flex-col">
        <div className="p-8">
          <h1 className="text-[#3563E9] text-2xl font-bold">MORENT</h1>
        </div>

        <nav className="flex-1 px-6">
          <p className="text-xs text-[#90A3BF] font-semibold mb-4 uppercase tracking-wider px-4">
            MAIN MENU
          </p>
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeNav === item.id
                    ? 'bg-[#3563E9] text-white'
                    : 'text-[#90A3BF] hover:bg-[#F6F7F9]'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <p className="text-xs text-[#90A3BF] font-semibold mb-4 mt-8 uppercase tracking-wider px-4">
            PREFERENCES
          </p>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#90A3BF] hover:bg-[#F6F7F9] transition-colors">
              <span className="text-xl">⚙️</span>
              <span className="font-medium">Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#90A3BF] hover:bg-[#F6F7F9] transition-colors">
              <span className="text-xl">ℹ️</span>
              <span className="font-medium">Help & Center</span>
            </button>
            <label className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#90A3BF] hover:bg-[#F6F7F9] transition-colors cursor-pointer">
              <span className="text-xl">🌙</span>
              <span className="font-medium">Dark Mode</span>
              <input type="checkbox" className="ml-auto" />
            </label>
          </div>
        </nav>

        <div className="p-6">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#90A3BF] hover:bg-[#F6F7F9] transition-colors"
          >
            <span className="text-xl">🚪</span>
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* Top Section - Map and Chart */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Details Rental - Map */}
            <div className="xl:col-span-2 bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold text-[#1A202C] mb-6">Details Rental</h2>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#A6CEF2] to-[#2185DE] rounded-lg h-64 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Car Details */}
              <div className="flex gap-4">
                <div className="w-32 h-20 bg-[#3563E9] rounded-lg flex items-center justify-center">
                  <img
                    src={cars[1].image}
                    alt="Nissan GT-R"
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#1A202C]">Nissan GT - R</h3>
                    <p className="text-[#90A3BF] text-sm">#9761</p>
                  </div>
                  <p className="text-[#90A3BF] text-sm">Sport Car</p>
                </div>
              </div>

              {/* Pick-Up & Drop-Off */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <input type="radio" checked readOnly className="w-4 h-4 accent-[#3563E9]" />
                    <label className="font-semibold text-[#1A202C]">Pick - Up</label>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Select label="Locations" options={locations} defaultValue="kota-semarang" />
                    <Select label="Date" options={dates} defaultValue="2024-07-20" />
                    <Select label="Time" options={times} defaultValue="07:00" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <input type="radio" checked readOnly className="w-4 h-4 accent-[#3563E9]" />
                    <label className="font-semibold text-[#1A202C]">Drop - Off</label>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Select label="Locations" options={locations} defaultValue="kota-semarang" />
                    <Select label="Date" options={dates} defaultValue="2024-07-20" />
                    <Select label="Time" options={times} defaultValue="07:00" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between p-4 bg-[#F6F7F9] rounded-lg">
                <div>
                  <p className="text-[#1A202C] font-bold text-lg mb-1">Total Rental Price</p>
                  <p className="text-[#90A3BF] text-xs">
                    Overall price and includes rental discount
                  </p>
                </div>
                <p className="text-[#1A202C] text-2xl font-bold">$80.00</p>
              </div>
            </div>

            {/* Top 5 Car Rental */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#1A202C]">Top 5 Car Rental</h2>
                <button className="text-[#90A3BF]">•••</button>
              </div>

              {/* Donut Chart */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  {topCarRentals.map((item, index) => {
                    const prevPercentages = topCarRentals
                      .slice(0, index)
                      .reduce((sum, i) => sum + i.percentage, 0);
                    const circumference = 2 * Math.PI * 70;
                    const offset = circumference - (item.percentage / 100) * circumference;
                    const rotation = (prevPercentages / 100) * 360;

                    return (
                      <circle
                        key={item.name}
                        cx="96"
                        cy="96"
                        r="70"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="28"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '96px 96px' }}
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-[#1A202C]">{total.toLocaleString()}</p>
                  <p className="text-sm text-[#90A3BF]">Rental Car</p>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                {topCarRentals.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-[#90A3BF] font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#1A202C]">
                      {item.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transaction */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#1A202C]">Recent Transaction</h2>
              <button
                onClick={() => navigate('/category')}
                className="text-[#3563E9] font-medium hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-4 pb-4 border-b last:border-0"
                >
                  <div className="w-28 h-16 bg-[#F6F7F9] rounded-lg flex items-center justify-center">
                    <img
                      src={transaction.car.image}
                      alt={transaction.car.name}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1A202C] mb-1">
                      {transaction.car.name}
                    </h4>
                    <p className="text-sm text-[#90A3BF]">{transaction.car.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#90A3BF] mb-1">{transaction.date}</p>
                    <p className="font-bold text-[#1A202C]">
                      ${transaction.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
