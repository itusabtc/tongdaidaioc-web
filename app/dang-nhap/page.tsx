'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { login, ApiError } from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      router.push(returnUrl);
    } catch (err: any) {
      setError(err.message || 'Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <div className="section-spacing">
          <div className="max-w-md mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Đăng nhập</h1>
              <p className="text-gray-600 mb-8">Nhập email và mật khẩu của bạn</p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                    Mật khẩu
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600">
                  Chưa có tài khoản?{' '}
                  <Link href="/dang-ky" className="text-primary hover:text-primary/90 font-semibold">
                    Đăng ký ngay
                  </Link>
                </p>
              </div>

              <div className="mt-6 text-center text-sm">
                <a href="#" className="text-primary hover:text-primary/90">
                  Quên mật khẩu?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
