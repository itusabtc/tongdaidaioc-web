'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface DropdownState {
  [key: string]: boolean;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState<DropdownState>({
    mua: false,
    thue: false,
    duAn: false,
    chuyen: false,
    trang: false,
    coDong: false,
    veRever: false,
  });
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(dropdownRefs.current).forEach((key) => {
        if (
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key]!.contains(event.target as Node)
        ) {
          setDropdowns((prev) => ({ ...prev, [key]: false }));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (key: string) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    { label: 'Mua', key: 'mua' },
    { label: 'Thuê', key: 'thue' },
    { label: 'Dự án', key: 'duAn' },
    { label: 'Chuyên viên', key: 'chuyen' },
    { label: 'Trang tin', key: 'trang' },
    { label: 'Có công', key: 'coDong' },
    { label: 'Về Rever', key: 'veRever' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="w-10 h-10 border-2 border-white rounded flex items-center justify-center text-white font-bold text-xl">
              R
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 ml-8">
            {menuItems.map((item) => (
              <div
                key={item.key}
                ref={(el) => {
                  if (el) dropdownRefs.current[item.key] = el;
                }}
                className="relative group"
              >
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="text-white hover:text-gray-200 font-medium py-4 px-3 flex items-center gap-1 transition text-sm"
                >
                  {item.label}
                  <ChevronDown size={16} className="opacity-60" />
                </button>
                
                {/* Dropdown menu */}
                {dropdowns[item.key] && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-gray-900 border border-gray-700 rounded shadow-lg py-2 z-50">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition">
                      Option 1
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition">
                      Option 2
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="text-white hover:text-gray-200 font-medium transition text-sm"
            >
              Đăng nhập
            </Link>
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition text-sm">
              Kỳ gửi nhà đất
            </button>
            
            {/* Language Selector */}
            <div className="relative">
              <button className="border border-gray-600 text-white px-4 py-2 rounded hover:border-gray-400 transition text-sm flex items-center gap-1">
                VI
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-gray-700 py-4 bg-black/80">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className="w-full text-left text-gray-300 hover:text-white font-medium py-2 px-4 flex items-center justify-between transition"
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition ${dropdowns[item.key] ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdowns[item.key] && (
                    <div className="pl-4 py-2 space-y-1">
                      <Link href="#" className="block text-sm text-gray-400 hover:text-white py-1">
                        Option 1
                      </Link>
                      <Link href="#" className="block text-sm text-gray-400 hover:text-white py-1">
                        Option 2
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <Link href="#" className="block text-gray-300 hover:text-white font-medium py-2">
                  Đăng nhập
                </Link>
                <button className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
                  Kỳ gửi nhà đất
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
