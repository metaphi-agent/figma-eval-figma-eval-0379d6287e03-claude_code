import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-[#C3D4E9]/30 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <button
              onClick={() => navigate('/')}
              className="text-[#3563E9] text-2xl font-bold mb-4 block"
            >
              MORENT
            </button>
            <p className="text-[#596780] text-sm leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-[#1A202C] font-semibold text-lg mb-6">About</h3>
            <ul className="space-y-3">
              {['How it works', 'Featured', 'Partnership', 'Bussiness Relation'].map((item) => (
                <li key={item}>
                  <button className="text-[#596780] hover:text-[#3563E9] transition-colors text-base">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-[#1A202C] font-semibold text-lg mb-6">Community</h3>
            <ul className="space-y-3">
              {['Events', 'Blog', 'Podcast', 'Invite a friend'].map((item) => (
                <li key={item}>
                  <button className="text-[#596780] hover:text-[#3563E9] transition-colors text-base">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-[#1A202C] font-semibold text-lg mb-6">Socials</h3>
            <ul className="space-y-3">
              {['Discord', 'Instagram', 'Twitter', 'Facebook'].map((item) => (
                <li key={item}>
                  <button className="text-[#596780] hover:text-[#3563E9] transition-colors text-base">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C3D4E9]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#1A202C] font-semibold text-base">
            ©2022 MORENT. All rights reserved
          </p>
          <div className="flex gap-8">
            <button className="text-[#1A202C] font-semibold hover:text-[#3563E9] transition-colors text-base">
              Privacy & Policy
            </button>
            <button className="text-[#1A202C] font-semibold hover:text-[#3563E9] transition-colors text-base">
              Terms & Condition
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
