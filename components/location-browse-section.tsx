'use client';

import Link from 'next/link';

const locations = {
  'Mua bán căn hộ': [
    'Quận 2',
    'Quận 7',
    'Quận 8',
    'Quận 9',
    'Quận 12',
    'Bình Tân',
    'Bình Thạnh',
    'Gò Vấp',
    'Thủ Đức',
    'Tân Phú',
  ],
  'Mua bán nhà phố': [
    'Gò Vấp',
    'Bình Thạnh',
    'Tân Bình',
    'Quận 8',
    'Bình Tân',
    'Quận 9',
    'Quận 1',
    'Bình Thạnh',
    'Bình Tân',
    'Tân Bình',
  ],
  'Dự án căn hộ': [
    'Quận 1',
    'Quận 2',
    'Quận 7',
    'Quận 8',
    'Quận 9',
    'Bình Tân',
    'Bình Thạnh',
    'Gò Vấp',
    'Thủ Đức',
    'Tân Phú',
  ],
  'Dự án nổi bật': [
    'Vinhomes Grand Park',
    'Akari City',
    'Picity High Park',
    'Vinhomes Central Park',
    'Lovera Vista',
    'Celadon City',
    'Q7 Saigon Riverside',
    'The Sun Avenue',
    'Westgate',
  ],
  'Dự án mới': [
    'Saigon South Residence',
    'Saigon Intela',
    'Kingdom 101',
    'Q7 Boulevard',
    'Soho Residence',
    'Sunrise Riverside',
    'Opal Skyline',
    'Ricca',
    'Safira Khang Điền',
  ],
};

export default function LocationBrowseSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Xem nhà đất theo địa điểm
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.entries(locations).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-teal-600 hover:text-teal-700 transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
