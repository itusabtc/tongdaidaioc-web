'use client';

import { Suspense } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import RegisterClient from '@/components/auth/register-client';

function RegisterPageContent() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Suspense fallback={<div className="section-spacing text-center">Đang tải...</div>}>
          <RegisterClient />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}

export default function RegisterPage() {
  return <RegisterPageContent />;
}
