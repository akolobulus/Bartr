'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type StorySlide = {
  title: string;
  body: string;
  src: string;
  alt: string;
};

// The section changes colour with the active step, so the story reads as a sequence of places.
export function StepStory({ slides }: { slides: StorySlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const nodes = stepRefs.current.filter((node): node is HTMLLIElement => node !== null);

    // The active step is the one whose box spans the viewport's center line. Steps are contiguous,
    // so exactly one step matches at a time. The observer only signals when that line crosses a step
    // boundary, and the geometry decides the result, so the order of observer entries does not matter.
    const pickActive = () => {
      const center = window.innerHeight / 2;
      const current = nodes.find((node) => {
        const rect = node.getBoundingClientRect();
        return rect.top <= center && rect.bottom > center;
      });
      if (current) setActiveIndex(Number(current.dataset.index));
    };

    const observer = new IntersectionObserver(pickActive, { rootMargin: '-49.5% 0px -49.5% 0px' });
    nodes.forEach((node) => observer.observe(node));
    pickActive();

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how" id="how" aria-labelledby="how-title" data-step={activeIndex}>
      <div className="container">
        <h2 className="h2 reveal" id="how-title">
          From request to rating, in five steps.
        </h2>
        <p className="lead reveal">The loop ride-hailing apps made familiar, applied to skilled work nearby.</p>

        <div className="story">
          <ol className="story-steps">
            {slides.map((slide, index) => (
              <li
                key={slide.title}
                data-index={index}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                className={cn('story-step', index === activeIndex && 'is-active')}
              >
                <h3>{slide.title}</h3>
                <p>{slide.body}</p>
                <div className="story-mobile">
                  <Image src={slide.src} alt={slide.alt} width={1080} height={2400} sizes="260px" />
                </div>
              </li>
            ))}
          </ol>

          <div className="story-stage" aria-hidden="true">
            <div className="story-phone">
              {slides.map((slide, index) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt=""
                  fill
                  sizes="290px"
                  className={cn('story-shot', index === activeIndex && 'is-active')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
