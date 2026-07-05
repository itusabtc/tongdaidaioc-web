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
    muaBan: false,
    choThue: false,
    duAn: false,
    moiGioi: false,
    trangTin: false,
    chinhSach: false,
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
    {
      label: 'Mua',
      key: 'muaBan',
      subItems: [
        { label: 'Mua nhà riêng', href: '/mua-ban/nha-rieng' },
        { label: 'Mua căn hộ', href: '/mua-ban/can-ho' },
        { label: 'Mua đất', href: '/mua-ban/dat' },
        { label: 'Mua dự án', href: '/mua-ban/du-an' },
      ],
    },
    {
      label: 'Thuê',
      key: 'choThue',
      subItems: [
        { label: 'Cho thuê nhà', href: '/cho-thue/nha' },
        { label: 'Cho thuê căn hộ', href: '/cho-thue/can-ho' },
        { label: 'Cho thuê phòng', href: '/cho-thue/phong' },
        { label: 'Cho thuê mặt bằng', href: '/cho-thue/mat-bang' },
      ],
    },
    {
      label: 'Dự án',
      key: 'duAn',
      subItems: [
        { label: 'Dự án mới', href: '/du-an' },
        { label: 'Dự án sắp ra mắt', href: '/du-an?status=coming' },
      ],
    },
    {
      label: 'Dành cho Môi giới',
      key: 'moiGioi',
      subItems: [
        { label: 'Các công cụ', href: '/moi-gioi/cong-cu' },
        { label: 'Hỗ trợ marketing', href: '/moi-gioi/marketing' },
        { label: 'Hướng dẫn sử dụng', href: '/moi-gioi/huong-dan' },
        { label: 'Cộng đồng môi giới', href: '/moi-gioi/community' },
      ],
    },
    {
      label: 'Trang tin',
      key: 'trangTin',
      subItems: [
        { label: 'Bài viết mới', href: '/tin' },
        { label: 'Hướng dẫn mua nhà', href: '/tin?category=huong-dan' },
        { label: 'Tin thị trường', href: '/tin?category=thi-truong' },
      ],
    },
    {
      label: 'Chính sách',
      key: 'chinhSach',
      subItems: [
        { label: 'Điều khoản dịch vụ', href: '/chinh-sach/dieu-khoan' },
        { label: 'Chính sách bảo mật', href: '/chinh-sach/bao-mat' },
        { label: 'Liên hệ hỗ trợ', href: '/lien-he' },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="text-white font-bold text-2xl">TDDO</div>
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
                  className="text-white hover:text-accent font-medium py-4 px-3 flex items-center gap-1 transition text-sm"
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
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/dang-nhap"
              className="text-white hover:text-gray-100 font-medium transition text-sm"
            >
              Đăng nhập
            </Link>
            <button className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition text-sm">
              Đăng tin miễn phí
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button className="border border-gray-300 text-white px-3 py-1.5 rounded hover:border-white transition text-xs flex items-center gap-1">
                VI
                <ChevronDown size={14} />
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
          <nav className="lg:hidden border-t border-gray-200 py-4 bg-primary">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className="w-full text-left text-white hover:text-accent font-medium py-2 px-4 flex items-center justify-between transition"
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
                          className="block text-sm text-gray-200 hover:text-accent py-1"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-400 space-y-2">
                <Link href="/dang-nhap" className="block text-white hover:text-accent font-medium py-2">
                  Đăng nhập
                </Link>
                <button className="w-full px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition">
                  Đăng tin miễn phí
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
