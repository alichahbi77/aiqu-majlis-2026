import { REGISTER_URL } from '../layout.js';
import { arrow, pageHero } from './_shared.js';

export default {
  title: 'Register & Contact · AIQU Executive Majlis 2026',
  description: 'Register for the AIQU Executive Majlis, 24 November 2026, Dubai, or contact Arwa Chahbi at Plexus Global.',
  render: () => `
${pageHero('Contact', 'Register &amp; <span class="grad-text">Contact</span>', 'Confirm your seat at the AIQU Executive Majlis, or reach the organising team with any question.', 'room-hero.jpg')}

    <section class="section">
      <div class="wrap">
        <div class="contact-grid">
          <div class="panel dark-panel">
            <span class="eyebrow">Confirm your seat</span>
            <h2>Register now</h2>
            <p>Seats are limited to 10–15 executives and strictly by invitation. Register online to confirm your seat.</p>
            <ul class="detail-list">
              <li><span class="ic"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></span><div><small>Date</small>Tuesday, 24 November 2026</div></li>
              <li><span class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><div><small>Time</small>9:00 AM – 1:30 PM</div></li>
              <li><span class="ic"><svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg></span><div><small>Location</small>Dubai, UAE · venue to be announced</div></li>
            </ul>
            <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-blue" style="position:relative;z-index:1">Register now ${arrow}</a>
          </div>

          <div class="panel">
            <span class="eyebrow">Registration &amp; enquiries</span>
            <h2>Arwa Chahbi</h2>
            <p>Group Director, Plexus Global. For registration, speaking or partnership questions.</p>
            <ul class="detail-list">
              <li><span class="ic"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></span><div><small>Phone</small><a href="tel:+971564010080">+971 56 401 0080</a></div></li>
              <li><span class="ic"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span><div><small>Email</small><a href="mailto:info@plexusas.com">info@plexusas.com</a></div></li>
            </ul>
            <span class="eyebrow" style="margin-bottom:.8rem">Follow us</span>
            <div class="socials">
              <a href="https://www.youtube.com/@PlexusEvents/videos" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24"><path class="fill" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/></svg></a>
              <a href="https://www.linkedin.com/company/plexus-events/posts/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path class="fill" d="M6.9 8.5H3.6V20h3.3zM5.2 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.4c0-3.1-1.7-5.1-4.4-5.1a3.8 3.8 0 0 0-3.4 1.9V8.5H9.4V20h3.3v-6c0-1.6.6-2.8 2.1-2.8s2 1.2 2 2.9V20h3.4z"/></svg></a>
              <a href="https://x.com/PLEXUSEVENTS" target="_blank" rel="noopener" aria-label="X"><svg viewBox="0 0 24 24"><path class="fill" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};
