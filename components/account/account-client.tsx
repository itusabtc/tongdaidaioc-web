'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Eye, Clock, AlertCircle } from 'lucide-react';

interface AccountClientProps {
  user: any;
  listings: any[];
}

export default function AccountClient({ user, listings }: AccountClientProps) {
  const savedListings = [
    { id: 1, title: 'Căn hộ cao cấp Bến Thành', price: '3 tỷ', saved: '2024-07-04' },
    { id: 2, title: 'Nhà phố Tây Hồ', price: '6.5 tỷ', saved: '2024-07-02' },
    { id: 3, title: 'Chung cư The Golden...', price: '2 tỷ', saved: '2024-06-30' },
  ];

  const tabs = [
    { id: 'listings', label: 'Tin đã đăng', count: listings.length },
    { id: 'saved', label: 'Tin đã lưu', count: 3 },
    { id: 'contacts', label: 'Liên hệ', count: 15 },
    { id: 'activity', label: 'Hoạt động', count: 24 },
  ];

  const [activeTab, setActiveTab] = useState('listings');

  return (
    <div className="flex-1 pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Tài khoản của tôi</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* User Info */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4" />
              <h3 className="font-bold text-primary text-center mb-1">
                {user.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                {user.type}
              </p>
              <p className="text-xs text-gray-500 text-center">
                Thành viên từ {new Date(user.joinDate).toLocaleDateString('vi-VN')}
              </p>
            </div>

            {/* Menu */}
            <div className="space-y-1">
              {[
                { icon: '📋', label: 'Thông tin cá nhân', href: '#' },
                { icon: '🔒', label: 'Bảo mật', href: '#' },
                { icon: '📧', label: 'Cài đặt email', href: '#' },
                { icon: '📱', label: 'Cài đặt thông báo', href: '#' },
                { icon: '❌', label: 'Đăng xuất', href: '/' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition flex items-center gap-2"
                >
                  <span>{item.icon}</span>
                  <span className="text-sm text-gray-700">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Alerts */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Hãy hoàn tất hồ sơ
                </h4>
                <p className="text-sm text-blue-800">
                  Hoàn tất hồ sơ để tăng độ tin tưởng và tiếp cận nhiều khách hàng hơn.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 whitespace-nowrap border-b-2 transition ${
                    activeTab === tab.id
                      ? 'border-accent text-primary font-semibold'
                      : 'border-transparent text-gray-600 hover:text-primary'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'listings' && (
              <div>
                {listings.length > 0 ? (
                  <div className="space-y-4">
                    {listings.map((listing) => (
                      <div
                        key={listing.id}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-primary mb-1">
                              {listing.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {listing.price}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                            {listing.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-xs text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            {listing.views} lượt xem
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {new Date(listing.date).toLocaleDateString('vi-VN')}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition text-sm">
                            Chỉnh sửa
                          </button>
                          <button className="px-3 py-1 border border-accent text-accent rounded hover:bg-accent hover:text-white transition text-sm">
                            Xóa
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">Bạn chưa đăng tin nào</p>
                    <Link
                      href="/dang-tin"
                      className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
                    >
                      Đăng tin ngay
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'saved' && (
              <div>
                {savedListings.length > 0 ? (
                  <div className="space-y-4">
                    {savedListings.map((listing) => (
                      <div
                        key={listing.id}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition flex justify-between items-start"
                      >
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {listing.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {listing.price}
                          </p>
                          <p className="text-xs text-gray-500">
                            Lưu từ {new Date(listing.saved).toLocaleDateString('vi-VN')}
                          </p>
                        </div>
                        <button className="text-accent">
                          <Heart size={20} fill="currentColor" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">Bạn chưa lưu tin nào</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  Bạn có 15 liên hệ từ các nhà môi giới
                </p>
                <p className="text-sm text-gray-500">
                  Liên hệ sẽ được cập nhật khi có khách hàng quan tâm
                </p>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="text-center py-12">
                <p className="text-gray-600">Xem lịch sử hoạt động của bạn</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
