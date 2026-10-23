import { REGISTER_URL } from '../layout.js';

export const arrow = '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg>';

export const cta = () => `
    <section class="section">
      <div class="wrap">
        <div class="cta-banner">
          <div class="bg" aria-hidden="true"><img src="/assets/img/purple-bg.jpg" alt=""></div>
          <div>
            <span class="eyebrow" style="color:var(--lavender)">Tuesday, 24 November 2026 · Dubai</span>
            <h2>From AI ambition to <span class="grad-text">compliance reality.</span></h2>
            <p>10–15 banking leaders · one room · one morning. Seats are limited and strictly by invitation.</p>
          </div>
          <div class="actions">
            <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-blue">Register now ${arrow}</a>
            <a href="/contact" class="btn btn-ghost">Contact us</a>
          </div>
        </div>
      </div>
    </section>
`;

export const pageHero = (crumb, title, text, img = 'audience.jpg') => `
    <section class="page-hero">
      <div class="bg" aria-hidden="true"><img src="/assets/img/${img}" alt=""></div>
      <div class="wrap">
        <div class="crumbs"><a href="/">Home</a><span>/</span><span>${crumb}</span></div>
        <h1>${title}</h1>
        <p>${text}</p>
      </div>
    </section>
`;
