'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ImageItem, PhoneCarousel } from '@/components/ui/phone-mockups-1-utils/phone-carousel';

const productImages: ImageItem[] = [
  { src: '/product-screenshots/screenshot_1.png', alt: 'Bartr home screen' },
  { src: '/product-screenshots/screenshot_2.png', alt: 'Bartr request screen' },
  { src: '/product-screenshots/screenshot_3.png', alt: 'Bartr vendor matches' },
  { src: '/product-screenshots/screenshot_4.png', alt: 'Bartr vendor profile' },
  { src: '/product-screenshots/screenshot_5.png', alt: 'Bartr payment options' },
  { src: '/product-screenshots/screenshot_7.png', alt: 'Bartr requests list' },
  { src: '/product-screenshots/screenshot_8.png', alt: 'Bartr account settings' },
  { src: '/product-screenshots/screenshot_9.png', alt: 'Bartr vendor tracking' },
  { src: '/product-screenshots/screenshot_10.png', alt: 'Bartr local map' },
  { src: '/product-screenshots/screenshot_11.png', alt: 'Bartr navigation menu' },
  { src: '/product-screenshots/screenshot_12.png', alt: 'Bartr voice assistant' },
  { src: '/product-screenshots/screenshot_13.png', alt: 'Bartr request summary' },
  { src: '/product-screenshots/screenshot_14.png', alt: 'Bartr matched vendors' },
  { src: '/product-screenshots/screenshot_15.png', alt: 'Bartr invite screen' },
  { src: '/product-screenshots/screenshot_16.png', alt: 'Bartr rating screen' },
];

export default function PhoneMockupBasic() {
  const [mount, setMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMount(document.getElementById('phoneCarouselMount'));
  }, []);

  return mount ? createPortal(<PhoneCarousel images={productImages} />, mount) : null;
}
