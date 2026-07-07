/** Chu kỳ thuê từ API (en) → nhãn tiếng Việt */
export function formatRentPeriod(period?: string | null): string | undefined {
  if (!period) return undefined;
  const labels: Record<string, string> = {
    month: 'tháng',
    year: 'năm',
    week: 'tuần',
    day: 'ngày',
  };
  return labels[period.toLowerCase()] ?? period;
}

/** Lấy excerpt plain text từ HTML mô tả */
export function htmlToPlainExcerpt(html: string, maxLength = 280): string {
  const plain = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength)}…`;
}

export function htmlPlainLength(html: string): number {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().length;
}
