'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, LogOut, FileText } from 'lucide-react';
import { getMe, logout, ApiUser } from '@/lib/api';

export default function AuthMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<ApiUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const userData = await getMe();
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed');
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setIsOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed');
    }
  };

  if (loading) {
    return <div className="px-4 py-2 bg-gray-200 rounded animate-pulse w-32 h-10" />;
  }

  if (!user) {
    // Logged out state
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/dang-nhap"
          className="px-4 py-2 text-gray-700 hover:text-primary transition"
        >
          Đăng nhập
        </Link>
        <Link
          href="/dang-tin"
          className="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition"
        >
          Đăng tin miễn phí
        </Link>
      </div>
    );
  }

  // Logged in state
  const fullName = user.fullName || user.email || 'Người dùng';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary transition"
      >
        <span>Xin chào, {fullName.split(' ').pop()}</span>
        <ChevronDown size={18} className={`transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-900">{fullName}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <div className="p-2">
            <Link
              href="/tai-khoan"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              <FileText size={16} />
              <span>Tin của tôi</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded transition"
            >
              <LogOut size={16} />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
