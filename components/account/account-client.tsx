'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Heart, Eye, Clock, AlertCircle, LogOut } from 'lucide-react';
import { getMe, getMyListings, logout } from '@/lib/api';

export default function AccountClient() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('listings');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('tddo_token');
        if (!token) {
          router.push('/dang-nhap?returnUrl=/tai-khoan');
          return;
        }

        const [userData, myListings] = await Promise.all([
          getMe(),
          getMyListings(),
        ]);

        if (!userData) {
          router.push('/dang-nhap?returnUrl=/tai-khoan');
          return;
        }

        setUser(userData);
        setListings(Array.isArray(myListings) ? myListings : []);
      } catch (err: any) {
        setError(err.message || 'Lỗi tải dữ liệu');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed');
    }
  };

  const statusMap: Record<string, string> = {
    draft: 'Nháp',
    pending_review: 'Chờ duyệt',
    active: 'Đang hiển thị',
    expired: 'Hết hạn',
  };

  const tabs = [
    { id: 'listings', label: 'Tin đã đăng', count: listings.length },
    { id: 'saved', label: 'Tin đã lưu', count: 0 },
    { id: 'contacts', label: 'Liên hệ', count: 0 },
  ];

  if (loading) {
    return (
      <div className="flex-1 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex-1 pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Vui lòng đăng nhập</p>
          <Link href="/dang-nhap" className="text-primary font-semibold">
            Đăng nhập
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Tài khoản của tôi</h1>
        </div>
      </section>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-600 p-4 m-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* User Info */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {user.fullName?.charAt(0) || 'U'}
                </span>
              </div>
              <h3 className="font-bold text-primary text-center mb-1">
                {user.fullName || user.email}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4 break-all">
                {user.email}
              </p>
              <p className="text-xs text-gray-500 text-center">
                Thành viên từ {new Date(user.createdAt).toLocaleDateString('vi-VN')}
              </p>
            </div>

            {/* Menu */}
            <div className="space-y-1">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded hover:bg-red-50 transition flex items-center gap-2 text-red-600"
              >
                <LogOut size={16} />
                <span className="text-sm font-medium">Đăng xuất</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Info Banner */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Mẹo tối ưu hóa tin</h4>
                <p className="text-sm text-blue-800">
                  Thêm ảnh chất lượng cao, mô tả chi tiết sẽ giúp tin của bạn được nhiều người xem hơn.
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
                          <div className="flex-1">
                            <Link
                              href={`/tin/${listing.slug}`}
                              className="font-semibold text-primary hover:underline block mb-1"
                            >
                              {listing.title}
                            </Link>
                            <p className="text-sm text-gray-600">{listing.priceText}</p>
                          </div>
                          <span className={`px-3 py-1 text-xs font-semibold rounded whitespace-nowrap ml-4 ${
                            listing.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : listing.status === 'pending_review'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {statusMap[listing.status] || listing.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-xs text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            {listing.views || 0} lượt xem
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {new Date(listing.createdAt).toLocaleDateString('vi-VN')}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={`/tin/${listing.slug}`}
                            className="px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition text-sm"
                          >
                            Xem
                          </Link>
                          <button className="px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition text-sm">
                            Chỉnh sửa
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
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Tính năng sắp ra mắt</p>
                <p className="text-sm text-gray-500">Lưu lại các tin bất động sản yêu thích</p>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Chưa có liên hệ nào</p>
                <p className="text-sm text-gray-500">Liên hệ sẽ hiển thị khi có khách hàng quan tâm</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
