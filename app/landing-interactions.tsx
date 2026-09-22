'use client';

import { useEffect } from 'react';

export default function LandingInteractions() {
  useEffect(() => {
    const faqItems = Array.from(document.querySelectorAll<HTMLElement>('.faq-item'));
    const faqCleanups = faqItems.map((item) => {
      const button = item.querySelector<HTMLButtonElement>('.faq-q');
      const answer = item.querySelector<HTMLElement>('.faq-a');

      if (!button || !answer) return () => undefined;

      const handleClick = () => {
        const isOpen = item.classList.contains('open');

        faqItems.forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            const openAnswer = openItem.querySelector<HTMLElement>('.faq-a');
            if (openAnswer) openAnswer.style.maxHeight = '';
          }
        });

        item.classList.toggle('open', !isOpen);
        answer.style.maxHeight = isOpen ? '' : `${answer.scrollHeight}px`;
      };

      button.addEventListener('click', handleClick);
      return () => button.removeEventListener('click', handleClick);
    });

    const storeButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.store-badge'));
    const storeCleanups = storeButtons.map((button) => {
      const handleClick = () => alert("Bartr isn't published yet. Check back soon!");
      button.addEventListener('click', handleClick);
      return () => button.removeEventListener('click', handleClick);
    });

    const slides = Array.from(document.querySelectorAll<HTMLElement>('.slide'));
    const dotsWrap = document.querySelector<HTMLElement>('#phoneDots');
    let current = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const goTo = (index: number) => {
      if (!slides.length || !dotsWrap) return;
      slides[current]?.classList.remove('active');
      dotsWrap.children[current]?.classList.remove('active');
      current = index;
      slides[current]?.classList.add('active');
      dotsWrap.children[current]?.classList.add('active');
    };

    const resetTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => goTo((current + 1) % slides.length), 3600);
    };

    const dotCleanups: Array<() => void> = [];
    if (dotsWrap && slides.length) {
      slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show phone preview ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        const handleClick = () => {
          goTo(index);
          resetTimer();
        };
        dot.addEventListener('click', handleClick);
        dotsWrap.appendChild(dot);
        dotCleanups.push(() => dot.removeEventListener('click', handleClick));
      });
      resetTimer();
    }

    return () => {
      faqCleanups.forEach((cleanup) => cleanup());
      storeCleanups.forEach((cleanup) => cleanup());
      dotCleanups.forEach((cleanup) => cleanup());
      if (timer) clearInterval(timer);
      dotsWrap?.replaceChildren();
    };
  }, []);

  return null;
}