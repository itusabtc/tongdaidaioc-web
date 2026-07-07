'use client';

import { useState } from 'react';
import { MessageCircle, Phone, AlertCircle } from 'lucide-react';

interface ContactSidebarProps {
  priceText: string;
  sourceType?: 'chinhchu' | 'moigioi';
  isOwnerVerified?: boolean;
  contactName?: string;
  contactPhone?: string;
  rentPeriod?: string | null;
}

export default function ListingContactSidebar({
  priceText,
  sourceType,
  isOwnerVerified,
  contactName,
  contactPhone,
  rentPeriod,
}: ContactSidebarProps) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  return (
    <div className="sticky top-24 space-y-4">
      {/* Price Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <p className="text-4xl font-bold text-primary">{priceText}</p>
        {rentPeriod && (
          <p className="text-gray-600 text-sm mt-1">/ {rentPeriod}</p>
        )}

        {/* Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {sourceType === 'chinhchu' && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
              Chính chủ
            </span>
          )}
          {sourceType === 'moigioi' && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
              Môi giới
            </span>
          )}
          {isOwnerVerified && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
              Chủ nhà xác nhận
            </span>
          )}
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3">Liên hệ người bán</h4>
        <p className="font-semibold text-gray-900">{contactName || 'Liên hệ'}</p>
        <p className="text-gray-600 text-sm">{contactPhone || 'N/A'}</p>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          {contactPhone && (
            <>
              <a
                href={`https://zalo.me/${contactPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-100 text-blue-700 font-semibold rounded hover:bg-blue-200 transition"
              >
                <MessageCircle size={18} />
                <span>Zalo</span>
              </a>
              <a
                href={`tel:${contactPhone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
              >
                <Phone size={18} />
                <span>Gọi ngay</span>
              </a>
            </>
          )}
        </div>
      </div>

      {/* Contact Form */}
      <button
        onClick={() => setShowContactForm(!showContactForm)}
        className="w-full px-4 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition"
      >
        Liên hệ lại tôi
      </button>

      {showContactForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
          <input
            type="text"
            placeholder="Tên của bạn"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Tin nhắn"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary resize-none h-24"
          />
          <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition text-sm">
            Gửi
          </button>
        </div>
      )}

      {/* Safety Tips */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <div className="flex gap-2 mb-2">
          <AlertCircle size={18} className="text-yellow-700 flex-shrink-0 mt-0.5" />
          <h4 className="font-bold text-yellow-900 text-sm">Mẹo an toàn</h4>
        </div>
        <ul className="text-xs text-yellow-800 space-y-1 ml-6">
          <li>Không gửi tiền trước</li>
          <li>Kiểm tra pháp lý</li>
          <li>Gặp trực tiếp</li>
          <li>Yêu cầu giấy tờ hợp lệ</li>
        </ul>
      </div>
    </div>
  );
}
