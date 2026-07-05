import FeaturedUtilitiesSection from '@/components/utilities/featured-utilities-section';
import MortgageSupportSection from '@/components/mortgage/mortgage-support-section';
import type { FeaturedUtility, MortgageArticle } from '@/lib/api';

interface ToolsAndMortgageSectionProps {
  utilities: FeaturedUtility[];
  articles: MortgageArticle[];
}

export default function ToolsAndMortgageSection({
  utilities,
  articles,
}: ToolsAndMortgageSectionProps) {
  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <FeaturedUtilitiesSection utilities={utilities} />
        <MortgageSupportSection articles={articles} />
      </div>
    </section>
  );
}
