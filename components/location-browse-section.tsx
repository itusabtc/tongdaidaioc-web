'use client';

import Link from 'next/link';

const locations = {
  'Mua bán': [
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
  'Cho thuê': [
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
  'Theo loại nhà': [
    'Studio',
    'Căn hộ',
    'Nhà phố',
    'Biệt thự',
    'Đất nền',
    'Nhà mặt tiền',
    'Nhà trong ngõ',
    'Shophouse',
    'Penthouse',
    'Officetel',
  ],
  'Theo giá': [
    'Dưới 1 tỷ',
    '1 - 2 tỷ',
    '2 - 3 tỷ',
    '3 - 5 tỷ',
    'Trên 5 tỷ',
    'Dưới 10 triệu/tháng',
    '10 - 20 triệu/tháng',
    '20 - 30 triệu/tháng',
    '30 - 50 triệu/tháng',
    'Trên 50 triệu/tháng',
  ],
};

export default function LocationBrowseSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Xem nhà đất theo địa điểm
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(locations).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => {
                  let href = '#';
                  
                  if (category === 'Mua bán' || category === 'Cho thuê') {
                    // District links
                    const type = category === 'Mua bán' ? 'mua-ban' : 'cho-thue';
                    href = `/${type}?district=${item.toLowerCase().replace(/\s+/g, '-')}`;
                  } else if (category === 'Theo loại nhà') {
                    // Property type links
                    const typeMap: Record<string, string> = {
                      'Studio': 'studio',
                      'Căn hộ': 'can-ho',
                      'Nhà phố': 'nha-pho',
                      'Biệt thự': 'biet-thu',
                      'Đất nền': 'dat-nen',
                      'Nhà mặt tiền': 'nha-mat-tien',
                      'Nhà trong ngõ': 'nha-trong-ngo',
                      'Shophouse': 'shophouse',
                      'Penthouse': 'penthouse',
                      'Officetel': 'officetel',
                    };
                    href = `/mua-ban?type=${typeMap[item] || item.toLowerCase()}`;
                  }
                  
                  return (
                    <li key={item}>
                      <Link
                        href={href}
                        className="text-sm text-primary hover:text-accent transition"
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
