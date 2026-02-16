import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, NotificationIcon, SettingIcon, FilterIcon } from '../icons';

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/category');
    }
  };

  return (
    <header className="bg-white border-b border-[#C3D4E9]/30 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-24 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="text-[#3563E9] text-2xl md:text-3xl font-bold flex-shrink-0"
        >
          MORENT
        </button>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg">
          <div className="relative w-full">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#596780]" />
            <input
              type="text"
              placeholder="Search something here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-white border border-[#C3D4E9]/30 rounded-full text-[#1A202C] placeholder:text-[#90A3BF] focus:outline-none focus:border-[#3563E9] transition-colors"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#596780] hover:text-[#3563E9] transition-colors"
              aria-label="Filter"
            >
              <FilterIcon />
            </button>
          </div>
        </form>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            className="w-11 h-11 rounded-full border border-[#C3D4E9]/30 flex items-center justify-center hover:bg-[#F6F7F9] transition-colors text-[#596780]"
            aria-label="Favorites"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="w-11 h-11 rounded-full border border-[#C3D4E9]/30 flex items-center justify-center hover:bg-[#F6F7F9] transition-colors text-[#596780] relative"
            aria-label="Notifications"
          >
            <NotificationIcon badge={true} />
          </button>

          <button
            className="w-11 h-11 rounded-full border border-[#C3D4E9]/30 flex items-center justify-center hover:bg-[#F6F7F9] transition-colors text-[#596780]"
            aria-label="Settings"
          >
            <SettingIcon />
          </button>

          <button
            onClick={() => navigate('/dashboard')}
            className="w-11 h-11 rounded-full border border-[#C3D4E9]/30 flex items-center justify-center hover:bg-[#F6F7F9] transition-colors overflow-hidden"
            aria-label="Profile"
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <form onSubmit={handleSearch} className="md:hidden px-4 pb-4">
        <div className="relative w-full">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#596780]" />
          <input
            type="text"
            placeholder="Search something here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 bg-white border border-[#C3D4E9]/30 rounded-full text-[#1A202C] placeholder:text-[#90A3BF] focus:outline-none focus:border-[#3563E9] transition-colors"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#596780] hover:text-[#3563E9] transition-colors"
            aria-label="Filter"
          >
            <FilterIcon />
          </button>
        </div>
      </form>
    </header>
  );
}
