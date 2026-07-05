'use client';

import { Search, MapPin, Home, DollarSign, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('');

  return (
    <div className="relative w-full min-h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden pt-24">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&h=600&fit=crop)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Headline */}
        <div className="text-center mb-12">
          <p className="text-white text-sm font-medium mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-white rounded-full" />
            An tâm với 100% bất động sản xác thực tại Rever
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Lựa chọn căn nhà ưng ý của bạn
          </h1>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          {/* Tabs */}
          <div className="flex gap-8 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('buy')}
              className={`pb-3 font-semibold text-lg transition ${
                activeTab === 'buy'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mua nhà
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`pb-3 font-semibold text-lg transition ${
                activeTab === 'rent'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Thuê nhà
            </button>
          </div>

          {/* Search Input */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 mb-4">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <MapPin size={20} />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm nhà đất khu vực TP Hồ Chí Minh"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 md:ml-2">
              <Search size={20} />
              Tìm kiếm
            </button>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">Gợi ý:</span>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition flex items-center gap-2">
              <Home size={16} />
              Loại nhà đất
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition flex items-center gap-2">
              <DollarSign size={16} />
              Mức giá
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition flex items-center gap-2">
              <Maximize2 size={16} />
              Diện tích
            </button>
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-600 mt-4">
            Hiện có <span className="font-bold text-gray-900">177,207</span> nhà đất xác thực
          </p>
        </div>
      </div>
    </div>
  );
}
