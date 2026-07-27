import type { BlogFeedItem } from '@/lib/api';

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  source: string;
  excerpt?: string;
  href?: string;
  external?: boolean;
}

export const BLOG_PLACEHOLDER =
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop';

const CATEGORY_LABELS: Record<string, string> = {
  'bat-dong-san': 'Bất động sản',
  'kinh-te': 'Kinh tế',
};

export function mapBlogFeedToItems(feed: BlogFeedItem[]): BlogItem[] {
  return feed.map((item) => {
    const published = item.publishedAt ? new Date(item.publishedAt) : null;
    const date =
      published && !Number.isNaN(published.getTime())
        ? published.toLocaleDateString('vi-VN')
        : '';
    const catKey = (item.category || 'bat-dong-san').toLowerCase();
    return {
      id: item.id,
      title: item.title,
      date,
      image: item.imageUrl || BLOG_PLACEHOLDER,
      category: CATEGORY_LABELS[catKey] || item.category || 'Bất động sản',
      source: item.sourceName,
      excerpt: item.excerpt || undefined,
      href: item.sourceUrl,
      external: /^https?:\/\//i.test(item.sourceUrl),
    };
  });
}
