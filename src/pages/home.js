import { REGISTER_URL } from '../layout.js';
import { ICON } from '../icons.js';
import { arrow, cta } from './_shared.js';

const topics = [
  ['AML Screening', 'screen', 'hl'], ['Transaction Monitoring', 'chart'], ['Sanctions Screening', 'sanction'], ['Fraud Detection', 'fraud'],
  ['False Positives & Backlogs', 'backlog'], ['Investigation Efficiency', 'invest'], ['Governance & Explainability', 'govern'], ['ROI of AI in Compliance', 'roi', 'dk'],
];

const audience = [
  'Heads of Financial Crime Compliance', 'Heads of AML', 'Heads of Sanctions Compliance',
  'Heads of Transaction Monitoring', 'Heads of Fraud Prevention', 'Chief Compliance Officers',
  'Chief Information Security Officers (CISOs)',
];

export default {
  title: 'AIQU Executive Majlis 2026 · Financial Crime Compliance in the Age of AI',
  description: 'An invitation-only Majlis for senior banking and financial crime leaders. Tuesday, 24 November 2026, Dubai. Hosted by AIQU, organised by Plexus Global.',
  render: () => `
    <section class="hero">
      <div class="hero-bg" aria-hidden="true"><img src="/assets/img/room-hero.jpg" alt=""></div>
      <div class="wrap hero-grid">
        <div>
          <span class="badge"><i></i> You are invited</span>
          <h1>AIQU Executive Majlis 2026. <span class="grad-text">Financial Crime Compliance in the Age of AI.</span></h1>
          <p class="tagline lead">Can AI help banks fight financial crime faster than criminals can evolve?</p>

          <div class="info-row">
            <div class="info-box">
              <div><span class="info-label">Date</span><span class="info-val">24 November</span><span class="info-sub">Tuesday, 2026</span></div>
              <div><span class="info-label">Location</span><span class="info-val">Dubai, UAE</span><span class="info-sub">Venue to be announced</span></div>
            </div>
            <div class="info-plain"><span class="info-label">Format</span><span class="info-val">10–15 senior banking &amp;<br>financial crime leaders</span></div>
          </div>

          <div class="hero-cta">
            <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-blue">Register Now ${arrow}</a>
            <a href="/agenda" class="btn btn-ghost">View Agenda ${arrow}</a>
          </div>
        </div>

        <div class="hero-host">
          <div class="host-item aiqu"><span>Hosted by</span><img src="/assets/img/aiqu-logo-white-v2.png" alt="AIQU, powered by TASC"></div>
        </div>
      </div>

      <div class="partners">
        <div class="wrap">
          <div class="partner"><span>Organised by</span><div class="logo-chip"><img src="/assets/img/plexus-logo-v2.png" alt="Plexus Global" class="plx"></div></div>
          <div class="partner"><span>Powered by</span><div class="logo-chip"><img src="/assets/img/techforge-logo-v2.png" alt="TechForge Global"><img src="/assets/img/cyberforge-logo-v2.png" alt="CyberForge Global"></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="head">
          <div><span class="eyebrow">01 · The invitation</span><h2>An invitation to join<br>the <span class="blue">conversation.</span></h2></div>
          <p>Artificial intelligence promises faster AML screening, sharper transaction monitoring and better fraud detection, while enabling more sophisticated financial crime at the same time.</p>
        </div>
        <div class="split">
          <div>
            <p>AIQU invites you to <strong>Financial Crime Compliance in the Age of AI</strong>, an exclusive, invitation-only Majlis bringing together senior banking and financial crime leaders from across the UAE for a candid conversation on using AI to improve compliance efficiency while managing the risks of increasingly intelligent financial crime.</p>
            <a href="/why-join" class="btn btn-outline">Why take a seat ${arrow}</a>
          </div>
          <div>
            <div class="photo-grid">
              <img src="/assets/img/audience.jpg" alt="A recent Plexus Global event" loading="lazy">
              <img src="/assets/img/phone.jpg" alt="" loading="lazy">
              <img src="/assets/img/pen.jpg" alt="" loading="lazy">
            </div>
            <p class="cap">A recent Plexus Global event</p>
          </div>
        </div>
        <div class="stat-row" style="margin-top:3rem">
          <div class="stat"><strong>10–15</strong><span>Senior financial crime leaders in the room</span></div>
          <div class="stat"><strong>2</strong><span>Executive panels on AI in financial crime compliance</span></div>
          <div class="stat"><strong>1</strong><span>Closed-door Majlis conversation, a candid peer discussion rather than presentations</span></div>
          <div class="stat"><strong>1:30 PM</strong><span>Done by lunchtime: a morning Majlis plus private networking lunch</span></div>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="session" style="margin-bottom:3rem">
          <div class="session-head" style="padding:clamp(2rem,5vw,4rem)">
            <img src="/assets/img/phone-photo.jpg" alt="" aria-hidden="true">
            <div>
              <span class="kicker">02 · The central theme</span>
              <h2 class="big-quote" style="max-width:26ch">Can AI help banks fight financial crime <span class="grad-text">faster than criminals can evolve?</span></h2>
              <p>AI can make compliance faster and sharper, but it is also arming criminals. The challenge is to capture one without falling behind the other.</p>
            </div>
          </div>
        </div>
        <div class="head">
          <div><span class="eyebrow">The conversation spans</span><h2>Eight topics,<br>one <span class="blue">room.</span></h2></div>
          <a href="/agenda" class="btn btn-outline">Full agenda ${arrow}</a>
        </div>
        <div class="chips">
          ${topics.map(([t, ic, cls]) => `<div class="chip ${cls || ''}">${ICON[ic]}<span>${t.replace('&', '&amp;')}</span></div>`).join('\n          ')}
        </div>
        <div class="trio">
          <div><small>Panel I</small>The AI arms race in financial crime</div>
          <div><small>Panel II</small>Beyond detection: compliance as a strategic advantage</div>
          <div><small>The Majlis conversation</small>The future of AI-enabled compliance operations</div>
        </div>
      </div>
    </section>

    <section class="section dark glow">
      <div class="wrap">
        <div class="head">
          <div><span class="eyebrow">03 · The audience</span><h2>Who should be<br>in the room?</h2></div>
          <p>10–15 senior decision-makers from leading UAE banks and financial institutions: leaders who own financial crime compliance challenges, budgets and operational outcomes.</p>
        </div>
        <div class="desk-card"><img src="/assets/img/desk.jpg" alt="" loading="lazy"><div><small>Banking-focused</small><b>Leading UAE banks &amp; financial institutions</b></div></div>
        <div class="attend-grid">
          ${audience.map((a, i) => `<div class="attend-item"><b>0${i + 1}</b>${a.replace('&', '&amp;')}</div>`).join('\n          ')}
        </div>
        <p style="margin-top:2rem;color:#c4b9da">Seats are limited and strictly by invitation only.</p>
        <div class="hero-cta" style="margin-top:1.4rem"><a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-blue">Register Now ${arrow}</a></div>
      </div>
    </section>
${cta()}
  `,
};
