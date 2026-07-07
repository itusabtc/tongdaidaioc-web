'use client';

import { useState } from 'react';
import { MapPin, School, Hospital, Utensils, ShoppingBag } from 'lucide-react';

interface POI {
  id: string;
  name: string;
  distance: number;
  category: 'school' | 'hospital' | 'restaurant' | 'shopping' | 'other';
}

const tabs = [
  { id: 'map', label: 'Bản đồ', icon: MapPin },
  { id: 'school', label: 'Trường học', icon: School },
  { id: 'hospital', label: 'Bệnh viện', icon: Hospital },
  { id: 'restaurant', label: 'Ăn uống', icon: Utensils },
  { id: 'shopping', label: 'Mua sắm', icon: ShoppingBag },
];

const mockPOIs: Record<string, POI[]> = {
  school: [
    { id: '1', name: 'Trường Tiểu học Nguyễn Du', distance: 0.5, category: 'school' },
    { id: '2', name: 'Trường THCS Lê Quy Đôn', distance: 1.2, category: 'school' },
    { id: '3', name: 'Trường THPT Marie Curie', distance: 1.8, category: 'school' },
    { id: '4', name: 'Đại học Bách khoa TPHCM', distance: 2.5, category: 'school' },
    { id: '5', name: 'Trường Quốc tế Anh', distance: 3.0, category: 'school' },
  ],
  hospital: [
    { id: '1', name: 'Bệnh viện Nhân Ái', distance: 0.8, category: 'hospital' },
    { id: '2', name: 'Bệnh viện Từ Dũ', distance: 1.5, category: 'hospital' },
    { id: '3', name: 'Phòng khám Thu Cúc', distance: 2.0, category: 'hospital' },
    { id: '4', name: 'Bệnh viện Quốc tế Vinmec', distance: 3.2, category: 'hospital' },
  ],
  restaurant: [
    { id: '1', name: 'Phở Hòa', distance: 0.3, category: 'restaurant' },
    { id: '2', name: 'Bánh mì Hàng Mành', distance: 0.5, category: 'restaurant' },
    { id: '3', name: 'Nhà hàng Cơm Tấm', distance: 0.8, category: 'restaurant' },
    { id: '4', name: 'Nhà hàng Fusion', distance: 1.2, category: 'restaurant' },
    { id: '5', name: 'Quán cơm suất', distance: 1.5, category: 'restaurant' },
  ],
  shopping: [
    { id: '1', name: 'Siêu thị Co.opmart', distance: 0.6, category: 'shopping' },
    { id: '2', name: 'Saigon Square', distance: 1.0, category: 'shopping' },
    { id: '3', name: 'Tôn Đức Thắng Plaza', distance: 1.5, category: 'shopping' },
    { id: '4', name: 'The Icon 68', distance: 2.0, category: 'shopping' },
  ],
};

export default function ListingPoiTabs() {
  const [activeTab, setActiveTab] = useState('map');

  const pois = mockPOIs[activeTab] || [];

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition ${
                isActive
                  ? 'border-primary text-primary font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'map' ? (
          <div className="text-center py-8 text-gray-600">
            <MapPin size={32} className="mx-auto mb-2 opacity-50" />
            <p>Bản đồ sẽ hiển thị tại đây</p>
          </div>
        ) : pois.length > 0 ? (
          <div className="space-y-3">
            {pois.map((poi) => (
              <div
                key={poi.id}
                className="flex items-start justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition"
              >
                <div>
                  <p className="font-semibold text-gray-900">{poi.name}</p>
                  <p className="text-sm text-gray-600">{poi.distance} km</p>
                </div>
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Không có dữ liệu</p>
        )}
      </div>
    </div>
  );
}
