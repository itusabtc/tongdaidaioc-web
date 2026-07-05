'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import React from 'react';

// Social media icons using simple SVG components
const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 002.856-10.86 10.002 10.002 0 01-2.8.856 4.996 4.996 0 00-8.688 4.572 14.05 14.05 0 01-10.175-5.144 4.993 4.993 0 001.548 6.659 4.977 4.977 0 01-2.264-.567v.061a4.996 4.996 0 004.002 4.898 4.996 4.996 0 01-2.228.085 4.997 4.997 0 004.644 3.461A10.025 10.025 0 012.476 21.552a14.028 14.028 0 007.694 2.25c9.232 0 14.271-7.694 14.271-14.371 0-.219-.005-.438-.015-.654a10.002 10.002 0 002.457-2.548z" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.665 1.199-1.61 2.925-1.61 2.135 0 3.735 1.39 3.735 4.38v5.616zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.707 1.965-1.707 1.194 0 1.917.756 1.948 1.707 0 .946-.754 1.704-1.998 1.704zm1.946 11.019H3.39V9.684h3.893v10.768zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2.17" y="2.17" width="19.66" height="19.66" rx="4.58" ry="4.58" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.62" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18.5" cy="5.5" r="0.87" fill="currentColor" />
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactItems = [
    {
      icon: Phone,
      label: 'Hotline miễn phí (24/7)',
      value: '1800 234 546',
      href: 'tel:1800234546',
    },
    {
      icon: Phone,
      label: 'Khiếu nại, phản hồi (miễn phí)',
      value: '1800 234 560',
      href: 'tel:1800234560',
    },
    {
      icon: Mail,
      label: 'Bộ phận kinh doanh',
      value: 'Sales@rever.vn',
      href: 'mailto:Sales@rever.vn',
    },
    {
      icon: Mail,
      label: 'Phòng dự án',
      value: 'phongduan@rever.vn',
      href: 'mailto:phongduan@rever.vn',
    },
    {
      icon: Mail,
      label: 'Chăm sóc khách hàng',
      value: 'support@rever.vn',
      href: 'mailto:support@rever.vn',
    },
  ];

  const companyLinks = [
    { label: 'Về Rever', href: '#' },
    { label: 'Tuyên dụng', href: '#' },
    { label: 'Đối ngũ', href: '#' },
    { label: 'Liên hệ', href: '#' },
    { label: 'Chính sách bảo mật', href: '#' },
    { label: 'Điều khoản sử dụng', href: '#' },
  ];

  const serviceLinks = [
    { label: 'Kỳ gửi nhà đất', href: '#' },
    { label: 'Mua với Rever', href: '#' },
    { label: 'Thuê với Rever', href: '#' },
    { label: 'Rever Academy', href: '#' },
    { label: 'Rever Agents', href: '#' },
    { label: 'Quy trình dịch vụ', href: '#' },
  ];

  const infoLinks = [
    { label: 'Tin tức thị trường', href: '#' },
    { label: 'Cập nhật sản phẩm', href: '#' },
    { label: 'Kiến thức cho mọi người', href: '#' },
  ];

  const appLinks = [
    { label: 'Rever trên iOS', href: '#' },
    { label: 'Rever trên Android', href: '#' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Contact Section */}
      <div className="border-b border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-start gap-3 group"
                >
                  <Icon size={24} className="text-cyan-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                    <p className="text-cyan-500 font-semibold hover:text-cyan-400 transition">
                      {item.value}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-b border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">REVER</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ REVER
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex gap-2">
                  <MapPin size={16} className="flex-shrink-0 text-cyan-500 mt-0.5" />
                  <p>MST: 0313817128 - Số KHĐT TP Hồ Chí Minh cấp ngày 20/05/2016</p>
                </div>
                <div className="flex gap-2">
                  <MapPin size={16} className="flex-shrink-0 text-cyan-500 mt-0.5" />
                  <p>Số 5-7, Đường B4, Phường An Lạc Dông, TP Thủ Đức, TP Hồ Chí Minh</p>
                </div>
                <div className="flex gap-2">
                  <Phone size={16} className="flex-shrink-0 text-cyan-500 mt-0.5" />
                  <p>08 6970 2321 - 1800 234 546</p>
                </div>
                <div className="flex gap-2">
                  <Mail size={16} className="flex-shrink-0 text-cyan-500 mt-0.5" />
                  <p>support@rever.vn</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="inline-block bg-blue-600 rounded-full p-3 border-4 border-blue-400">
                  <div className="text-center">
                    <div className="text-white font-bold text-xs">ĐÃ THÔNG BÁO</div>
                    <div className="text-white font-bold text-xs">BỘ CÔNG THƯƠNG</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold mb-4">CÔNG TY</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-500 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h4 className="font-bold mb-4">DỊCH VỤ</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-500 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Links */}
            <div>
              <h4 className="font-bold mb-4">THÔNG TIN</h4>
              <ul className="space-y-2">
                {infoLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-500 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Links */}
            <div>
              <h4 className="font-bold mb-4">ỨNG DỤNG</h4>
              <ul className="space-y-2">
                {appLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-500 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} - Rever. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Đánh giá</span>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="text-gray-400 hover:text-cyan-500 transition"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
