'use client';

import { Search, MapPin, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface QuickFilter {
  id: string;
  label: string;
}

interface HeroSearchProps {
  statsCount?: string;
}

const DISTRICT_SLUGS: Record<string, string> = {
  'Quận 1': 'quan-1',
  'Quận 7': 'quan-7',
  'Thủ Đức': 'thanh-pho-thu-duc',
  'Bình Thạnh': 'quan-binh-thanh',
};

export default function HeroSearch({ statsCount = '12,340' }: HeroSearchProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState<QuickFilter[]>([
    { id: '1', label: 'Quận 1' },
    { id: '2', label: 'Quận 7' },
    { id: '3', label: 'Thủ Đức' },
    { id: '4', label: 'Bình Thạnh' },
  ]);

  const removeFilter = (id: string) => {
    setFilters(filters.filter(f => f.id !== id));
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (location) searchParams.set('kw', location);
    searchParams.set('type', activeTab === 'buy' ? 'sale' : 'rent');
    router.push(`/tim-kiem?${searchParams.toString()}`);
  };

  const handleChipClick = (chip: QuickFilter) => {
    const searchParams = new URLSearchParams();
    searchParams.set('district', DISTRICT_SLUGS[chip.label] || chip.label.toLowerCase());
    searchParams.set('type', activeTab === 'buy' ? 'sale' : 'rent');
    router.push(`/tim-kiem?${searchParams.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleSearch();
    }
  };

  return (
    <div 
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-cover bg-center overflow-hidden -mt-16"
      style={{
        backgroundImage: 'url(/images/hero-bg-real-estate.png)',
      }}
    >
      {/* Dark Overlay with vertical stripes pattern */}
      <div className="absolute inset-0 bg-black/40" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Headline Section */}
          <div className="mb-8 md:mb-12">
            <p className="text-white text-xs md:text-sm font-medium mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white rounded-full" />
              An tâm với chất lượng bất động sản xác thực tại TDDO
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
              Trung tâm mua bán & Cho thuê bất động sản
            </h1>

            {/* Tabs */}
            <div className="flex gap-8 mt-8">
              <button
                onClick={() => setActiveTab('buy')}
                className={`pb-2 font-semibold text-base transition relative ${
                  activeTab === 'buy'
                    ? 'text-white border-b-2 border-[#F2922E]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Mua nhà
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`pb-2 font-semibold text-base transition relative ${
                  activeTab === 'rent'
                    ? 'text-white border-b-2 border-[#F2922E]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Thuê nhà
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-md shadow-2xl p-0 overflow-hidden mb-6">
            {/* Search Input Row */}
            <div className="flex items-center">
              <div className="flex-1 relative flex items-center">
                <Search className="absolute left-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Tìm kiếm nhà đất khu vực TP Hồ Chí Minh"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-12 pr-4 py-4 bg-white outline-none text-gray-800 placeholder-gray-500 text-sm md:text-base"
                />
              </div>
              <button 
                onClick={handleSearch}
                className="px-6 md:px-8 py-4 bg-[#F2922E] text-white font-bold hover:bg-[#e07d1f] transition whitespace-nowrap text-sm md:text-base"
              >
                Tìm kiếm
              </button>
            </div>
          </div>

          {/* Info and Quick Filters */}
          <div>
            <p className="text-white text-sm mb-3">
              Hiện có <span className="font-bold">{statsCount}</span> nhà đất xác thực
            </p>
            
            {/* Quick Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <span className="text-white text-sm font-medium">Gợi ý:</span>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleChipClick(filter)}
                  className="bg-transparent border border-white/40 rounded-full px-3 py-1.5 text-white text-sm font-medium hover:border-white/60 transition flex items-center gap-2 group"
                >
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
