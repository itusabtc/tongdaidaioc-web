import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Công cụ đánh giá - TDDO',
  description: 'Các công cụ giúp đánh giá bất động sản',
};

export default function CongCuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-primary mb-6">
            Công cụ đánh giá
          </h1>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700">
              Trang này đang được phát triển. Vui lòng quay lại sau!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
