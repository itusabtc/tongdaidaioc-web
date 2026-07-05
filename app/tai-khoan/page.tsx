import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AccountClient from '@/components/account/account-client';

export const metadata: Metadata = {
  title: 'Tài khoản của tôi - TDDO',
  description: 'Quản lý tài khoản, tin đăng, tin đã lưu, và hoạt động của bạn trên TDDO.',
};

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <AccountClient />
      <Footer />
    </div>
  );
}
