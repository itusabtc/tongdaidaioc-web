import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Chính sách bảo mật - TDDO',
  description: 'Chính sách bảo vệ dữ liệu cá nhân, cách TDDO sử dụng và bảo vệ thông tin của bạn.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Chính sách bảo mật
          </h1>
          <div className="text-sm text-gray-600 mb-8">
            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
          </div>

          <div className="prose prose-sm max-w-none">
            {[
              {
                title: '1. Giới thiệu',
                content: `
Chúng tôi cam kết bảo vệ quyền riêng tư và bảo mật dữ liệu cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ, và bảo vệ thông tin của bạn.

Vui lòng đọc kỹ chính sách này. Nếu bạn không đồng ý, vui lòng không sử dụng dịch vụ của chúng tôi.
                `,
              },
              {
                title: '2. Thông tin chúng tôi thu thập',
                content: `
Chúng tôi thu thập các loại thông tin sau:

Thông tin cá nhân:
• Tên, email, số điện thoại
• Địa chỉ, ngày sinh
• Ảnh hồ sơ cá nhân
• Thông tin thanh toán

Thông tin tài khoản:
• Tên đăng nhập, mật khẩu (mã hóa)
• Tin đăng, lịch sử tương tác
• Danh bạ khách hàng

Thông tin kỹ thuật:
• Địa chỉ IP, loại trình duyệt
• Hành động người dùng, thời gian truy cập
• Cookie và pixel tracking
                `,
              },
              {
                title: '3. Cách chúng tôi sử dụng thông tin',
                content: `
Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:

• Cung cấp và cải thiện dịch vụ
• Xác thực tài khoản và bảo mật
• Gửi thông báo, cập nhật, và hỗ trợ khách hàng
• Phân tích hành vi người dùng để tối ưu hóa trải nghiệm
• Tuân thủ các yêu cầu pháp lý
• Ngăn chặn gian lận và hoạt động trái phép
• Quảng cáo được cá nhân hóa (nếu bạn đồng ý)
                `,
              },
              {
                title: '4. Bảo vệ dữ liệu',
                content: `
Chúng tôi sử dụng các biện pháp bảo vệ sau:

• Mã hóa SSL/TLS cho các kết nối an toàn
• Mật khẩu được mã hóa bằng bcrypt
• Tường lửa và hệ thống phát hiện xâm nhập
• Kiểm toán nội bộ và kiểm tra bảo mật thường xuyên
• Giới hạn quyền truy cập dữ liệu chỉ cho nhân viên cần thiết

Tuy nhiên, không có phương pháp truyền dữ liệu qua internet 100% an toàn. Bạn sử dụng dịch vụ của chúng tôi với rủi ro của chính bạn.
                `,
              },
              {
                title: '5. Chia sẻ dữ liệu',
                content: `
Chúng tôi không bán hoặc chia sẻ dữ liệu cá nhân của bạn với bên thứ ba, ngoại trừ:

• Nhà cung cấp dịch vụ (thanh toán, email) - tuân theo NDA
• Các bộ phận thực thi pháp luật (khi bắt buộc)
• Các thực thể liên kết (nếu có sáp nhập/thâu tóm)
• Bạn bè hoặc người được chỉ định (nếu bạn chọn chia sẻ)
                `,
              },
              {
                title: '6. Quyền của bạn',
                content: `
Bạn có quyền:

• Truy cập dữ liệu cá nhân của bạn
• Sửa hoặc cập nhật thông tin không chính xác
• Xóa tài khoản và dữ liệu liên quan (theo quy định)
• Thu hồi sự đồng ý (ví dụ: từ chối email quảng cáo)
• Yêu cầu bản sao dữ liệu của bạn
• Nộp đơn khiếu nại nếu vi phạm

Để thực hiện các quyền này, liên hệ: privacy@tongdaidiaoc.vn
                `,
              },
              {
                title: '7. Cookie và Tracking',
                content: `
Chúng tôi sử dụng cookie và công nghệ tracking để:

• Nhớ tùy chọn của bạn
• Phân tích cách bạn sử dụng dịch vụ
• Quảng cáo được cá nhân hóa

Bạn có thể vô hiệu hóa cookie trong cài đặt trình duyệt, nhưng điều này có thể ảnh hưởng đến chức năng.

Chúng tôi không lưu trữ dữ liệu tài chính hoặc mật khẩu trong cookie.
                `,
              },
              {
                title: '8. Retenção de dados',
                content: `
Chúng tôi giữ lại dữ liệu của bạn:

• Trong suốt quá trình bạn sử dụng tài khoản
• Tối thiểu 7 năm sau khi đóng tài khoản (tuân theo luật)
• Lâu hơn nếu cần thiết cho mục đích pháp lý

Bạn có thể yêu cầu xóa dữ liệu sớm hơn, nhưng chúng tôi có thể giữ lại thông tin nhất định theo yêu cầu pháp lý.
                `,
              },
              {
                title: '9. Vi phạm dữ liệu',
                content: `
Nếu có vi phạm bảo mật ảnh hưởng đến dữ liệu cá nhân của bạn, chúng tôi sẽ:

• Điều tra ngay lập tức
• Thông báo cho bạn sớm nhất (trong 72 giờ)
• Cung cấp thông tin về việc xảy ra sự cố
• Khuyến nghị các bước bạn có thể thực hiện

Chúng tôi cũng sẽ thông báo cho các cơ quan chức năng nếu cần thiết.
                `,
              },
              {
                title: '10. Liên hệ',
                content: `
Nếu bạn có câu hỏi về chính sách bảo mật này, vui lòng liên hệ:

Email: privacy@tongdaidiaoc.vn
Viết thư: Tổng Đài Địa Ốc, Hà Nội, Việt Nam
Hotline: 1800 234 546

Chúng tôi sẽ phản hồi trong vòng 7 ngày làm việc.
                `,
              },
            ].map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-primary mb-2">
              Bạn hiểu chính sách bảo mật này?
            </h3>
            <p className="text-gray-600 mb-4">
              Nếu có bất kỳ câu hỏi hoặc lo ngại, vui lòng liên hệ với chúng tôi.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
