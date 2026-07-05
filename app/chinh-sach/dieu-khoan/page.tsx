import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Điều khoản dịch vụ - TDDO',
  description: 'Điều khoản sử dụng nền tảng Tổng Đài Địa Ốc, quyền và trách vụ của người dùng.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Điều khoản dịch vụ
          </h1>
          <div className="text-sm text-gray-600 mb-8">
            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
          </div>

          <div className="prose prose-sm max-w-none">
            {/* Sections */}
            {[
              {
                title: '1. Điều khoản chung',
                content: `
Tổng Đài Địa Ốc (TDDO) là một nền tảng trực tuyến cung cấp dịch vụ mua bán, cho thuê bất động sán. Bằng cách sử dụng website hoặc ứng dụng của chúng tôi, bạn đồng ý tuân thủ các điều khoản này.

TDDO có quyền thay đổi hoặc cập nhật các điều khoản bất kỳ lúc nào. Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi có nghĩa là bạn chấp nhận các điều khoản mới.
                `,
              },
              {
                title: '2. Tài khoản người dùng',
                content: `
Bạn chịu trách nhiệm bảo mật tài khoản và mật khẩu của mình. TDDO không chịu trách nhiệm cho bất kỳ hoạt động trái phép nào trên tài khoản của bạn.

Bạn cam kết cung cấp thông tin chính xác, đầy đủ và hợp pháp khi đăng ký. Nếu có thay đổi, bạn phải cập nhật kịp thời.

TDDO có quyền đình chỉ hoặc xóa tài khoản nếu phát hiện hoạt động vi phạm các điều khoản này.
                `,
              },
              {
                title: '3. Nội dung tin đăng',
                content: `
Bạn cam kết rằng tất cả thông tin, hình ảnh, video trong tin đăng là chính xác, hợp pháp và không vi phạm quyền của bất kỳ bên thứ ba nào.

Bạn không được phép:
• Đăng nội dung giả mạo, gây hiểu lầm hoặc sai lệch
• Lạm dụng hệ thống bằng cách đăng tin trùng lặp
• Sử dụng nội dung có bản quyền mà không có sự cho phép
• Đăng nội dung bạo lực, tục tĩu hoặc có nội dung 18+

TDDO có quyền xóa hoặc che giấu bất kỳ nội dung nào vi phạm chính sách này.
                `,
              },
              {
                title: '4. Trách nhiệm của người dùng',
                content: `
Bạn chịu trách nhiệm hoàn toàn cho tất cả nội dung bạn đăng trên TDDO. TDDO không chịu trách nhiệm cho bất kỳ thiệt hại hoặc tranh chấp phát sinh từ nội dung này.

Bạn cam kết tuân thủ tất cả các luật pháp hiện hành, bao gồm luật về bảo vệ người tiêu dùng, luật bất động sán, và các luật khác.

Bạn không được sử dụng TDDO cho bất kỳ mục đích bất hợp pháp hoặc gây hại.
                `,
              },
              {
                title: '5. Quyền sở hữu trí tuệ',
                content: `
Tất cả nội dung, thiết kế, logo, và tài liệu trên TDDO là tài sản của TDDO hoặc các bên cấp phép. Bạn không được phép sao chép, phân phối, hoặc sử dụng các tài liệu này mà không có sự cho phép từ TDDO.

Nội dung bạn đăng trên TDDO, bạn vẫn giữ quyền sở hữu. Tuy nhiên, bạn cấp quyền cho TDDO sử dụng nội dung này để cung cấp dịch vụ và quảng bá.
                `,
              },
              {
                title: '6. Miễn trừ trách nhiệm',
                content: `
TDDO cung cấp dịch vụ "như có sẵn" mà không bảo đảm bất kỳ điều gì. TDDO không bảo đảm rằng dịch vụ sẽ không có lỗi, không bị gián đoạn, hoặc an toàn.

TDDO không chịu trách nhiệm cho:
• Bất kỳ tổn thất hoặc thiệt hại gián tiếp, ngẫu nhiên, hoặc đặc biệt
• Mất dữ liệu hoặc mất kiếp doanh số
• Bất kỳ tranh chấp giữa người dùng

Trách nhiệm tối đa của TDDO không vượt quá số tiền bạn thanh toán cho TDDO trong 12 tháng trước đó.
                `,
              },
              {
                title: '7. Chính sách thanh toán',
                content: `
Các gói quảng cáo và dịch vụ trả phí phải được thanh toán trước. TDDO chấp nhận các phương thức thanh toán sau:
• Chuyển khoản ngân hàng
• Thẻ tín dụng/ghi nợ
• Ví điện tử

Không hoàn tiền sau khi dịch vụ đã sử dụng trừ các trường hợp đặc biệt được TDDO chấp thuận.
                `,
              },
              {
                title: '8. Kết thúc dịch vụ',
                content: `
TDDO có quyền kết thúc hoặc tạm ngưng dịch vụ của bạn nếu:
• Bạn vi phạm các điều khoản này
• Hoạt động có dấu hiệu lạm dụng hệ thống
• Không thanh toán các khoản phí

Khi kết thúc, bạn mất quyền truy cập tài khoản và toàn bộ dữ liệu.
                `,
              },
              {
                title: '9. Tranh chấp và giải quyết',
                content: `
Bất kỳ tranh chấp phát sinh từ các điều khoản này sẽ được giải quyết thông qua:
1. Thương lượng giữa các bên (30 ngày)
2. Hòa giải (nếu cần thiết)
3. Xét xử tại tòa án có thẩm quyền

Các điều khoản này tuân theo luật pháp của Cộng hòa Xã hội Chủ nghĩa Việt Nam.
                `,
              },
              {
                title: '10. Liên hệ',
                content: `
Nếu bạn có bất kỳ câu hỏi hoặc lo ngại về các điều khoản này, vui lòng liên hệ:

Email: support@tongdaidiaoc.vn
Hotline: 1800 234 546
Website: tongdaidiaoc.vn
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
              Bạn đồng ý với các điều khoản này?
            </h3>
            <p className="text-gray-600 mb-4">
              Bằng cách sử dụng TDDO, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý tuân thủ tất cả các điều khoản này.
            </p>
            <div className="flex gap-4">
              <Link
                href="/dang-ky"
                className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Tôi đồng ý, đăng ký ngay
              </Link>
              <Link
                href="/"
                className="px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
              >
                Quay lại
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
