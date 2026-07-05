'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <div className="section-spacing">
          <div className="max-w-md mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Đăng nhập</h1>
              <p className="text-gray-600 mb-8">Nhập email và mật khẩu của bạn</p>

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
                  className="w-full px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition"
                >
                  Đăng nhập
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
