import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AccountClient from '@/components/account/account-client';

export const metadata: Metadata = {
  title: 'Tài khoản của tôi - TDDO',
  description: 'Quản lý tài khoản, tin đăng, tin đã lưu, và hoạt động của bạn trên TDDO.',
};

export default function AccountPage() {
  // Mock user data - ideally from getMe() API
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0901234567',
    type: 'Người dùng',
    joinDate: '2024-01-15',
  };

  // Mock listings - ideally from getMyListings() API
  const listings = [
    {
      id: 1,
      title: 'Bán nhà 3 tầng Hoàn Kiếm',
      price: '5 tỷ',
      status: 'Đang bán',
      views: 2450,
      date: '2024-07-01',
    },
    {
      id: 2,
      title: 'Cho thuê căn hộ 2 phòng ngủ',
      price: '8 triệu/tháng',
      status: 'Đang cho thuê',
      views: 1280,
      date: '2024-06-28',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <AccountClient user={user} listings={listings} />
      <Footer />
    </div>
  );
}
