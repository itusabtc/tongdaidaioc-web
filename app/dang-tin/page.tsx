'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';

type Step = 1 | 2 | 3;

export default function PostListingPage() {
  const [step, setStep] = useState<Step>(1);
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    listingType: 'sale',
    propertyType: 'apartment',
    price: '',
    area: '',
    bedrooms: '',
    district: '',
    description: '',
  });
  const [aiDescription, setAiDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Mock image handling
    setImages([...images, `image-${Date.now()}`]);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateAIDescription = async () => {
    setLoading(true);
    // Mock AI description generation (2s delay)
    await new Promise(r => setTimeout(r, 2000));
    setAiDescription(
      `${formData.propertyType === 'apartment' ? 'Căn hộ' : 'Nhà'} đẹp tại ${formData.district}, diện tích ${formData.area}m². ` +
      `${formData.bedrooms} phòng ngủ, giá ${formData.price}. Thích hợp cho gia đình trẻ hoặc nhà đầu tư. ` +
      `Tài sản pháp lý rõ ràng, sẵn sàng giao dịch ngay.`
    );
    setLoading(false);
  };

  const handleSubmit = () => {
    alert('Tin đăng của bạn đã được gửi lên! Chúng tôi sẽ duyệt trong 24h.');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <div className="section-spacing">
          <div className="max-w-4xl mx-auto">
            {/* Progress */}
            <div className="mb-12">
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        i <= step ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    >
                      {i}
                    </div>
                    {i < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          i < step ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <span className={step >= 1 ? 'text-primary font-semibold' : 'text-gray-500'}>
                  Ảnh
                </span>
                <span className={step >= 2 ? 'text-primary font-semibold' : 'text-gray-500'}>
                  Thông tin
                </span>
                <span className={step >= 3 ? 'text-primary font-semibold' : 'text-gray-500'}>
                  Xác nhận
                </span>
              </div>
            </div>

            {/* Step 1: Upload Images */}
            {step === 1 && (
              <div className="bg-white rounded-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Bước 1: Tải ảnh bất động sản</h2>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleImageDrop}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-primary transition"
                >
                  <div className="text-4xl mb-4">📸</div>
                  <p className="text-gray-900 font-semibold mb-2">Kéo ảnh vào đây</p>
                  <p className="text-gray-600 text-sm">hoặc click để chọn từ máy tính</p>
                  <p className="text-gray-500 text-xs mt-4">Tối thiểu 3 ảnh, định dạng JPG/PNG</p>
                </div>

                {images.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                      Đã tải {images.length} ảnh
                    </p>
                    <div className="grid grid-cols-4 gap-3">
                      {images.map((img, i) => (
                        <div key={i} className="bg-gray-100 rounded h-24 flex items-center justify-center">
                          📷
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    disabled={images.length < 3}
                    className="flex-1 px-4 py-3 bg-primary text-white font-bold rounded-lg disabled:opacity-50 hover:bg-primary/90 transition"
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Form Info */}
            {step === 2 && (
              <div className="bg-white rounded-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Bước 2: Thông tin bất động sán</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Loại tin</label>
                      <select
                        name="listingType"
                        value={formData.listingType}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="sale">Bán</option>
                        <option value="rent">Cho thuê</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Loại BĐS</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="apartment">Căn hộ</option>
                        <option value="house">Nhà phố</option>
                        <option value="land">Đất nền</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Giá</label>
                      <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleFormChange}
                        placeholder="VD: 3.5 tỷ"
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Diện tích (m²)</label>
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleFormChange}
                        placeholder="VD: 85"
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phòng ngủ</label>
                      <input
                        type="text"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleFormChange}
                        placeholder="VD: 2"
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Quận/Huyện</label>
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="">Chọn quận</option>
                        <option value="q1">Quận 1</option>
                        <option value="q2">Quận 2</option>
                        <option value="q7">Quận 7</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Mô tả</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleFormChange}
                      placeholder="Nhập mô tả..."
                      className="w-full border border-gray-300 rounded p-2 h-32"
                    />
                    <button
                      onClick={generateAIDescription}
                      disabled={loading}
                      className="mt-2 px-4 py-2 text-sm bg-accent text-white rounded hover:bg-[#e07d1f] disabled:opacity-50 transition"
                    >
                      ✨ {loading ? 'Đang viết...' : 'AI viết mô tả'}
                    </button>
                    {aiDescription && (
                      <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                        <p className="font-semibold mb-1">Mô tả AI:</p>
                        <p>{aiDescription}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition"
                  >
                    Quay lại
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 px-4 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition"
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="bg-white rounded-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Bước 3: Xác nhận tin đăng</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Ảnh đã tải</span>
                    <span className="font-semibold">{images.length} ảnh</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Loại tin</span>
                    <span className="font-semibold">
                      {formData.listingType === 'sale' ? 'Bán' : 'Cho thuê'}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Giá</span>
                    <span className="font-semibold text-accent text-lg">{formData.price}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Địa chỉ</span>
                    <span className="font-semibold">{formData.district}</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-4 py-3 bg-accent text-white font-bold rounded-lg hover:bg-[#e07d1f] transition"
                  >
                    Đăng tin
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
