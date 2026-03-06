import { useState, useEffect, useCallback } from 'react';

export interface HeroBannerSlide {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
  backgroundAlt?: string;
}

export interface HeroBannerProps {
  slides: HeroBannerSlide[];
  autoPlayInterval?: number;
  className?: string;
}

export function HeroBanner({
  slides,
  autoPlayInterval = 5000,
  className = '',
}: HeroBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const slide = slides[activeIndex];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background image */}
      <div className="relative w-full h-[480px] sm:h-[560px] md:h-[640px]">
        <img
          src={slide.backgroundImage}
          alt={slide.backgroundAlt ?? slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay — stronger at the bottom where text sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="px-6 pb-14 sm:px-10 md:px-14 max-w-xl text-white text-center sm:text-left mx-auto sm:mx-0">
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-light tracking-widest uppercase mb-2 opacity-90">
              {slide.eyebrow}
            </p>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base font-light leading-relaxed mb-6 opacity-90">
              {slide.description}
            </p>

            {/* CTA Button */}
            <a
              href={slide.ctaHref}
              className="inline-block bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white border border-white/40 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-200"
            >
              {slide.ctaLabel}
            </a>
          </div>
        </div>

        {/* Pagination dots */}
        {slides.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-3 h-3 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
