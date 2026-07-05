'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AuthMenu from '@/components/auth/auth-menu';

interface DropdownState {
  [key: string]: boolean;
}

export default function Header() {
  const pathname = usePathname();
  const isSubPage = pathname !== '/';
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdowns, setDropdowns] = useState<DropdownState>({
    muaBan: false,
    choThue: false,
    chuNha: false,
    moiGioi: false,
    trangTin: false,
    chinhSach: false,
  });
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    {
      label: 'Mua',
      key: 'muaBan',
      subItems: [
        { label: 'Mua nhà riêng', href: '/mua-ban' },
        { label: 'Mua căn hộ', href: '/mua-ban' },
        { label: 'Mua đất', href: '/mua-ban' },
      ],
    },
    {
      label: 'Thuê',
      key: 'choThue',
      subItems: [
        { label: 'Cho thuê nhà', href: '/cho-thue' },
        { label: 'Cho thuê căn hộ', href: '/cho-thue' },
        { label: 'Cho thuê phòng', href: '/cho-thue' },
      ],
    },
    {
      label: 'Dành cho chủ nhà',
      key: 'chuNha',
      subItems: [
        { label: 'Đăng tin bất động sản', href: '/chu-nha/dang-tin' },
        { label: 'Quản lý tin đăng', href: '/chu-nha/quan-ly' },
        { label: 'Hỗ trợ bán nhà', href: '/chu-nha/ho-tro' },
        { label: 'Công cụ đánh giá', href: '/chu-nha/cong-cu' },
        { label: 'Hỏi đáp', href: '/chu-nha/hoi-dap' },
        { label: 'Blog chủ nhà', href: '/chu-nha/blog' },
      ],
    },
    {
      label: 'Dành cho Môi giới',
      key: 'moiGioi',
      subItems: [
        { label: 'Các công cụ', href: '/moi-gioi/cong-cu' },
        { label: 'Hỗ trợ marketing', href: '/moi-gioi/marketing' },
        { label: 'Cộng đồng', href: '/moi-gioi/community' },
      ],
    },
    {
      label: 'Tin tức',
      key: 'trangTin',
      subItems: [
        { label: 'Bài viết mới', href: '/tin-tuc' },
        { label: 'Hướng dẫn mua nhà', href: '/tin-tuc' },
      ],
    },
    {
      label: 'Chính sách',
      key: 'chinhSach',
      subItems: [
        { label: 'Điều khoản dịch vụ', href: '/chinh-sach/dieu-khoan' },
        { label: 'Chính sách bảo mật', href: '/chinh-sach/bao-mat' },
        { label: 'Liên hệ', href: '/lien-he' },
      ],
    },
  ];

  // On sub-pages, always use solid white background with dark text
  const bgClass = isSubPage || isScrolled ? 'bg-white shadow-md' : 'bg-transparent';
  const textClass = isSubPage || isScrolled ? 'text-gray-900' : 'text-white';
  const logoColorClass = isSubPage || isScrolled ? 'text-primary' : 'text-white';
  const hoverClass = isSubPage || isScrolled ? 'hover:text-primary' : 'hover:text-accent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/icons/property-icon.png"
              alt="TDDO Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 ml-8">
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
                  className={`${textClass} ${hoverClass} font-medium py-4 px-3 flex items-center gap-1 transition text-sm`}
                >
                  {item.label}
                  <ChevronDown size={16} className="opacity-60" />
                </button>

                {/* Dropdown menu */}
                {dropdowns[item.key] && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {item.subItems.map((subItem, idx) => (
                      <Link
                        key={idx}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-accent hover:bg-gray-50 transition"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <AuthMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${textClass}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`lg:hidden border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'} py-4 ${isScrolled ? 'bg-white' : 'bg-primary'}`}>
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className={`w-full text-left ${textClass} font-medium py-2 px-4 flex items-center justify-between transition`}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition ${dropdowns[item.key] ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdowns[item.key] && (
                    <div className="pl-4 py-2 space-y-1">
                      {item.subItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className={`block text-sm py-1 ${isScrolled ? 'text-gray-700 hover:text-accent' : 'text-gray-200 hover:text-accent'}`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className={`pt-4 ${isScrolled ? 'border-gray-200' : 'border-gray-400'} border-t space-y-2`}>
                <AuthMenu />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
