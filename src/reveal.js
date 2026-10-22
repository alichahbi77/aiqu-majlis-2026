// Scroll-reveal: elements start hidden and play Tailwind's `animate-fade-up`
// (defined in main.css) as they enter the viewport, staggered among siblings.

const TARGETS = [
  '.hero-grid > div > *', '.host-item', '.partner',
  '.page-hero .wrap > *',
  '.head', '.stat', '.focus', '.speaker', '.attend-item',
  '.agenda-side', '.timeline li',
  '.split > *', '.fact-list li', '.plat', '.why-card',
  '.panel', '.map', '.cta-banner', '.chip', '.session', '.trio > div', '.stats-dark > div',
].join(',');

const HIDDEN = 'opacity-0';
const SHOWN = 'animate-fade-up';

let observer;

export function reveal(root) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      target.classList.replace(HIDDEN, SHOWN);
      observer.unobserve(target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  for (const el of root.querySelectorAll(TARGETS)) {
    const index = [...el.parentElement.children].indexOf(el);
    el.style.animationDelay = `${Math.min(index, 8) * 70}ms`;
    // anything already on screen animates in now rather than waiting on the observer
    if (el.getBoundingClientRect().top < innerHeight) {
      el.classList.add(SHOWN);
      continue;
    }
    el.classList.add(HIDDEN);
    observer.observe(el);
  }
}
