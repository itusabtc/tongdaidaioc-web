'use client';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: 'small' | 'medium' | 'large';
  cta?: {
    label: string;
    href: string;
  };
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=400&fit=crop',
  height = 'medium',
  cta,
}: HeroBannerProps) {
  const heightClasses = {
    small: 'h-[300px] md:h-[350px]',
    medium: 'h-[350px] md:h-[400px]',
    large: 'h-[400px] md:h-[500px]',
  };

  return (
    <div
      className={`relative w-full ${heightClasses[height]} bg-cover bg-center overflow-hidden -mt-16`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.75)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8 text-balance">
            {subtitle}
          </p>
        )}
        {cta && (
          <a
            href={cta.href}
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}
