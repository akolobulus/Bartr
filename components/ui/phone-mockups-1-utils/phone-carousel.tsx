'use client';

import { useEffect, useState } from 'react';

export type ImageItem = {
  src: string;
  alt: string;
};

type PhoneCarouselProps = {
  images: ImageItem[];
  interval?: number;
};

export function PhoneCarousel({ images, interval = 3600 }: PhoneCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % images.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null;

  const visibleImages = [-1, 0, 1].map(
    (offset) => images[(current + offset + images.length) % images.length],
  );
  const phoneClasses = [
    'phone-carousel__phone phone-carousel__phone--left',
    'phone-carousel__phone phone-carousel__phone--center',
    'phone-carousel__phone phone-carousel__phone--right',
  ];

  return (
    <div className="phone-carousel" aria-label="Bartr product screenshots">
      <div className="phone-carousel__phones">
        {visibleImages.map((image, index) => (
          <div className={phoneClasses[index]} key={`${image.src}-${index}`}>
            <div className="phone-carousel__screen">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
      <div className="phone-carousel__dots" role="tablist" aria-label="Choose product screenshot">
        {images.map((image, index) => (
          <button
            aria-label={`Show ${image.alt}`}
            aria-selected={index === current}
            className={index === current ? 'active' : ''}
            key={image.src}
            onClick={() => setCurrent(index)}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
