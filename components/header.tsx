'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
            <span className="text-xl font-bold text-gray-900">Rever</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-red-600 font-medium transition">
              Mua bán
            </Link>
            <Link href="#" className="text-gray-700 hover:text-red-600 font-medium transition">
              Cho thuê
            </Link>
            <Link href="#" className="text-gray-700 hover:text-red-600 font-medium transition">
              Dự án
            </Link>
            <Link href="#" className="text-gray-700 hover:text-red-600 font-medium transition">
              Tin tức
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Đăng tin
            </button>
            <Link href="#" className="text-gray-700 hover:text-red-600 font-medium transition">
              Đăng nhập
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <Link href="#" className="text-gray-700 hover:text-red-600 font-medium">
                Mua bán
              </Link>
              <Link href="#" className="text-gray-700 hover:text-red-600 font-medium">
                Cho thuê
              </Link>
              <Link href="#" className="text-gray-700 hover:text-red-600 font-medium">
                Dự án
              </Link>
              <Link href="#" className="text-gray-700 hover:text-red-600 font-medium">
                Tin tức
              </Link>
              <button className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition mt-2">
                Đăng tin
              </button>
              <Link href="#" className="text-gray-700 hover:text-red-600 font-medium">
                Đăng nhập
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
