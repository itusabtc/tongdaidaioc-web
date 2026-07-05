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
      label: 'Khiếu nại, phản hồi',
      value: '1800 234 560',
      href: 'tel:1800234560',
    },
    {
      icon: Mail,
      label: 'Hỗ trợ - Bộ phận kinh doanh',
      value: 'sales@tongdaidiaoc.vn',
      href: 'mailto:sales@tongdaidiaoc.vn',
    },
    {
      icon: Mail,
      label: 'Phòng dự án',
      value: 'projects@tongdaidiaoc.vn',
      href: 'mailto:projects@tongdaidiaoc.vn',
    },
    {
      icon: Mail,
      label: 'Chăm sóc khách hàng',
      value: 'support@tongdaidiaoc.vn',
      href: 'mailto:support@tongdaidiaoc.vn',
    },
  ];

  const buyLinks = [
    { label: 'Mua nhà riêng', href: '/mua-ban/nha-rieng' },
    { label: 'Mua căn hộ', href: '/mua-ban/can-ho' },
    { label: 'Mua đất', href: '/mua-ban/dat' },
    { label: 'Mua dự án', href: '/mua-ban/du-an' },
  ];

  const rentLinks = [
    { label: 'Cho thuê nhà', href: '/cho-thue/nha' },
    { label: 'Cho thuê căn hộ', href: '/cho-thue/can-ho' },
    { label: 'Cho thuê phòng', href: '/cho-thue/phong' },
    { label: 'Cho thuê mặt bằng', href: '/cho-thue/mat-bang' },
  ];

  const brokerLinks = [
    { label: 'Dành cho Môi giới', href: '/moi-gioi' },
    { label: 'Công cụ quản lý', href: '/moi-gioi/cong-cu' },
    { label: 'Hỗ trợ marketing', href: '/moi-gioi/marketing' },
    { label: 'Hướng dẫn sử dụng', href: '/moi-gioi/huong-dan' },
  ];

  const infoLinks = [
    { label: 'Blog & Tin tức', href: '/tin' },
    { label: 'Hướng dẫn mua nhà', href: '/tin?category=huong-dan' },
    { label: 'Tin thị trường', href: '/tin?category=thi-truong' },
    { label: 'Đánh giá dự án', href: '/tin?category=danh-gia' },
  ];

  const companyLinks = [
    { label: 'Về Tổng Đài Địa Ốc', href: '/ve-chung-toi' },
    { label: 'Tuyên dụng', href: '/tuyen-dung' },
    { label: 'Liên hệ', href: '/lien-he' },
    { label: 'Chính sách bảo mật', href: '/chinh-sach/bao-mat' },
    { label: 'Điều khoản sử dụng', href: '/chinh-sach/dieu-khoan' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                <Icon className="w-5 h-5 text-accent mb-3" />
                <p className="text-sm text-gray-300 mb-1">{item.label}</p>
                <Link
                  href={item.href}
                  className="text-accent font-semibold hover:opacity-80 transition text-sm"
                >
                  {item.value}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-8"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Mua */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Mua bán</h3>
            <ul className="space-y-2">
              {buyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thuê */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Cho thuê</h3>
            <ul className="space-y-2">
              {rentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Môi giới */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Môi giới</h3>
            <ul className="space-y-2">
              {brokerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tin tức */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Trang tin</h3>
            <ul className="space-y-2">
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Công ty */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Công ty</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-300 hover:text-accent transition"
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm">
                Copyright © {currentYear} Tổng Đài Địa Ốc. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Nền tảng bất động sán trực tuyến hàng đầu Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
