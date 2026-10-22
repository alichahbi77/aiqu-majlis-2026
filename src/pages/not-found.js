import { arrow, pageHero } from './_shared.js';

export default {
  title: 'Page not found · AIQU Executive Majlis 2026',
  description: 'This page does not exist.',
  render: () => `
${pageHero('404', 'Page <span class="grad-text">not found</span>', 'The page you were looking for doesn’t exist or has moved.', 'purple-bg.jpg').replace('</p>\n      </div>', '</p>\n        <div class="hero-cta" style="margin-top:2rem"><a href="/" class="btn btn-blue">Back to home ' + arrow + '</a></div>\n      </div>')}
  `,
};
