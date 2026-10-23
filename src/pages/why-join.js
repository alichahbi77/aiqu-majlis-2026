import { REGISTER_URL } from '../layout.js';
import { ICON } from '../icons.js';
import { arrow, cta, pageHero } from './_shared.js';

const delegates = [
  'Benchmark your approach with 10–15 peer heads of financial crime, AML and compliance.',
  'Candid, closed-door discussion: no exhibition and no sales presentations.',
  'Practical ways AI is cutting false positives and investigation backlogs.',
  'Insight into AI-enabled fraud and how peers are staying ahead of it.',
  'A frank view on governance, explainability and the ROI of AI in compliance.',
  'Private networking lunch with peers and AIQU leadership, done by 1:30 PM.',
];

const format = [
  ['10–15', 'Executives', 'exec', 'hl'], ['2', 'Executive panels', 'panel'], ['1', 'Closed-door Majlis conversation', 'govern'],
  ['Banking-focused', 'UAE banks & financial institutions', 'crime'], ['Invitation only', 'A curated guest list', 'lock'], ['Private lunch', 'One-to-one time', 'lunch', 'dk'],
];

export default {
  title: 'Why Join · AIQU Executive Majlis 2026',
  description: 'Why take a seat at the AIQU Executive Majlis: a closed-door peer conversation for 10–15 senior banking and financial crime leaders in Dubai.',
  render: () => `
${pageHero('Why Join', 'Why take a seat <span class="grad-text">at the Majlis</span>', 'A morning of candid peer conversation, not presentations. Quality of conversation, quality of audience and commercial relevance.', 'room-hero.jpg')}

    <section class="section">
      <div class="wrap">
        <div class="head">
          <div><span class="eyebrow">07 · For delegates</span><h2>What you take<br>away <span class="blue">from the room.</span></h2></div>
          <p>Limited to 10–15 executives, so every voice is heard.</p>
        </div>
        <div class="why-grid" style="grid-template-columns:repeat(2,1fr)">
          ${delegates.map((d, i) => `<article class="why-card" style="background:var(--card);border-color:var(--line);color:var(--text)"><strong style="color:var(--blue);font-size:1.4rem;font-weight:300;letter-spacing:-.02em">0${i + 1}</strong><p style="color:var(--text);font-size:1.02rem;margin-top:.5rem">${d}</p></article>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="head">
          <div><span class="eyebrow">The format</span><h2>Morning Majlis<br>+ <span class="blue">executive lunch.</span></h2></div>
        </div>
        <div class="chips" style="grid-template-columns:repeat(3,1fr)">
          ${format.map(([a, b, ic, cls]) => `<div class="chip ${cls || ''}">${ICON[ic]}<span><strong>${a}</strong><br><small style="font-weight:500;opacity:.8">${b.replace('&', '&amp;')}</small></span></div>`).join('\n          ')}
        </div>
        <div class="nope"><span>No exhibition</span><span>No passive audience</span><span>No sales presentations</span></div>
        <p style="margin-top:1.4rem;color:var(--muted)">The emphasis is on quality of conversation, quality of audience and commercial relevance.</p>
      </div>
    </section>

    <section class="section dark glow">
      <div class="wrap">
        <div class="split">
          <div>
            <span class="eyebrow">For speakers &amp; panellists</span>
            <h2>Shape the conversation <span class="grad-text">on stage.</span></h2>
            <ul class="arrow-list">
              <li>Join one of two panels on AI in financial crime compliance</li>
              <li>Share how your bank is using, or defending against, AI</li>
              <li>Speak to a room of senior banking decision-makers only</li>
              <li>Be recognised as a thought leader among regional peers</li>
            </ul>
            <p style="margin-top:1.6rem;color:#c4b9da">Speaking enquiries: <a href="mailto:info@plexusas.com" style="color:#c4a0f5">info@plexusas.com</a></p>
            <div class="hero-cta" style="margin-top:1.6rem"><a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-blue">Register now ${arrow}</a></div>
          </div>
          <div class="split-img"><img src="/assets/img/phone-photo.jpg" alt="A recent Plexus Global event" loading="lazy"></div>
        </div>
      </div>
    </section>
${cta()}
  `,
};
