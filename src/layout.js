// Shared chrome rendered once; the router only swaps the contents of <main>.

export const REGISTER_URL = 'https://form.jotform.com/262933137989473';

const arrow = '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg>';

export const NAV = [
  { path: '/', label: 'Home' },
  { path: '/agenda', label: 'Agenda' },
  { path: '/why-join', label: 'Why Join' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export const header = () => `
  <header class="nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo"><img src="/assets/img/aiqu-logo-white.png" alt="AIQU, powered by TASC"></a>
      <input type="checkbox" id="menu" class="menu-toggle" aria-label="Toggle menu">
      <label for="menu" class="menu-icon"><span></span></label>
      <nav class="nav-links">
        ${NAV.map((l) => `<a href="${l.path}" data-nav>${l.label}</a>`).join('\n        ')}
        <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-white">Register Now ${arrow}</a>
      </nav>
    </div>
  </header>
`;

export const footer = () => `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <img src="/assets/img/aiqu-logo-white.png" alt="AIQU, powered by TASC" class="f-logo">
          <p class="about-text">AIQU Executive Majlis 2026 · Financial Crime Compliance in the Age of AI. An invitation-only conversation for senior banking and financial crime leaders.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            ${NAV.map((l) => `<li><a href="${l.path}">${l.label}</a></li>`).join('\n            ')}
          </ul>
        </div>
        <div>
          <h4>Event</h4>
          <ul>
            <li>Tuesday, 24 November 2026</li>
            <li>Dubai, UAE</li>
            <li><a href="${REGISTER_URL}" target="_blank" rel="noopener">Register Now</a></li>
          </ul>
        </div>
        <div>
          <h4>Registration &amp; enquiries</h4>
          <ul>
            <li><a href="tel:+971564010080">+971 56 401 0080</a></li>
            <li><a href="mailto:info@plexusas.com">info@plexusas.com</a></li>
          </ul>
          <div style="margin-top:1.2rem"><div class="socials">
            <a href="https://www.youtube.com/@PlexusEvents/videos" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24"><path class="fill" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/></svg></a>
            <a href="https://www.linkedin.com/company/plexus-events/posts/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path class="fill" d="M6.9 8.5H3.6V20h3.3zM5.2 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.4c0-3.1-1.7-5.1-4.4-5.1a3.8 3.8 0 0 0-3.4 1.9V8.5H9.4V20h3.3v-6c0-1.6.6-2.8 2.1-2.8s2 1.2 2 2.9V20h3.4z"/></svg></a>
            <a href="https://x.com/PLEXUSEVENTS" target="_blank" rel="noopener" aria-label="X"><svg viewBox="0 0 24 24"><path class="fill" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg></a>
          </div></div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 AIQU Executive Majlis · Dubai</p>
        <div class="orgs">
          <span>Organised by</span>
          <div class="logo-chip"><img src="/assets/img/plexus-logo.png" alt="Plexus Global" class="plx"></div>
          <span>Powered by</span>
          <div class="logo-chip"><img src="/assets/img/techforge-logo.png" alt="TechForge Global"><img src="/assets/img/cyberforge-logo.png" alt="CyberForge Global"></div>
        </div>
      </div>
    </div>
  </footer>
`;
