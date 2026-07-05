'use client';

import { Suspense } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LoginClient from '@/components/auth/login-client';

function LoginPageContent() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Suspense fallback={<div className="section-spacing text-center">Đang tải...</div>}>
          <LoginClient />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}

export default function LoginPage() {
  return <LoginPageContent />;
}
