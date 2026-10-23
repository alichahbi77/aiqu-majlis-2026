import { REGISTER_URL } from '../layout.js';
import { arrow, cta, pageHero } from './_shared.js';

const li = (time, kind, title, text = '', brk = false) =>
  `<li${brk ? ' class="break"' : ''}><time>${time}</time><div class="slot"><div><span class="kind">${kind}</span><h4>${title}</h4>${text ? `<p class="who">${text}</p>` : ''}</div></div></li>`;

export default {
  title: 'Agenda · AIQU Executive Majlis 2026',
  description: 'Agenda for the AIQU Executive Majlis: two executive panels, a closed-door Majlis conversation and a networking lunch. Tuesday, 24 November 2026, Dubai.',
  render: () => `
${pageHero('Agenda', 'Agenda <span class="grad-text">at a glance</span>', 'Tuesday, 24 November 2026 · 9:00 AM – 1:30 PM · Dubai. One morning, three conversations and a private lunch.', 'stage.jpg')}

    <section class="section">
      <div class="wrap agenda-wrap">
        <aside class="agenda-side">
          <h3>Tuesday,<br>24 November 2026</h3>
          <ul>
            <li><svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg> Dubai, UAE · venue to be announced</li>
            <li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> 9:00 AM – 1:30 PM</li>
            <li><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg> 2 panels · closed-door Majlis · lunch</li>
          </ul>
          <a href="${REGISTER_URL}" target="_blank" rel="noopener" class="btn btn-blue">Register Now ${arrow}</a>
        </aside>
        <ol class="timeline">
          ${li('9:00 – 9:40', 'Arrival', 'Executive Arrival, Coffee &amp; Networking', 'Private networking between invited banking leaders and AIQU leadership.', true)}
          ${li('9:40 – 10:00', 'Opening', 'Welcome &amp; Opening Perspective', 'Financial Crime Compliance in the Age of AI: opening remarks from AIQU.')}
          ${li('10:00 – 10:45', 'Executive Panel I', 'The AI Arms Race in Financial Crime: Are Banks Keeping Up with the Criminals?', 'AI-powered fraud, synthetic identities and the limits of traditional controls.')}
          ${li('10:45 – 11:00', 'Break', 'Coffee &amp; Executive Networking', '', true)}
          ${li('11:00 – 11:45', 'Executive Panel II', 'Beyond Detection: Can AI Transform Financial Crime Compliance from a Cost Centre into a Strategic Advantage?', 'AI, intelligent automation and managed services for measurable outcomes.')}
          ${li('11:45 – 12:30', 'Closed door · The Majlis conversation', 'The Future of AI-Enabled Compliance Operations', 'A moderated peer conversation on automation, regulation, human judgement and ROI.')}
          ${li('12:30 – 1:30', 'Lunch', 'Executive Networking Lunch', 'A relaxed private lunch for deeper one-to-one conversations with AIQU leadership.', true)}
        </ol>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="head">
          <div><span class="eyebrow">05 · The panels</span><h2>Two panels,<br>one <span class="blue">candid</span> room.</h2></div>
          <p>Speaking enquiries: info@plexusas.com</p>
        </div>

        <article class="session">
          <div class="session-head">
            <img src="/assets/img/pen2.jpg" alt="" aria-hidden="true">
            <div>
              <span class="kicker">Executive Panel I</span><span class="time-pill">10:00 – 10:45 AM</span>
              <h3>The AI Arms Race in Financial Crime</h3>
              <p>Are banks keeping up with the criminals?</p>
            </div>
          </div>
          <div class="session-body">
            <p><strong>Focus:</strong> exploring how AI-powered fraud, synthetic identities and increasingly sophisticated financial crime techniques are challenging traditional banking controls.</p>
            <ul>
              <li>The rise of AI-enabled fraud and sophisticated financial crime</li>
              <li>Are existing AML, sanctions screening and transaction monitoring systems keeping pace?</li>
              <li>The growing challenge of detecting synthetic identities and complex fraudulent transactions</li>
              <li>How banks can strengthen financial crime prevention without compromising customer experience</li>
            </ul>
          </div>
        </article>

        <article class="session">
          <div class="session-head">
            <img src="/assets/img/ics.jpg" alt="" aria-hidden="true">
            <div>
              <span class="kicker">Executive Panel II</span><span class="time-pill">11:00 – 11:45 AM</span>
              <h3>Beyond Detection</h3>
              <p>Can AI transform financial crime compliance from a cost centre into a strategic advantage?</p>
            </div>
          </div>
          <div class="session-body">
            <p><strong>Focus:</strong> exploring how banks can leverage AI, intelligent automation and managed services to modernise compliance operations, improve efficiency and deliver measurable business outcomes.</p>
            <ul>
              <li>Reducing false positives, investigation backlogs and operational costs through AI</li>
              <li>Moving from traditional compliance processes to intelligent, AI-enabled operations</li>
              <li>Balancing automation with regulatory expectations, explainability and human oversight</li>
              <li>Measuring ROI and identifying opportunities for technology and managed services partnerships</li>
            </ul>
          </div>
        </article>

        <div class="trio" style="margin-top:2rem">
          <div><small>The opportunity</small>Leaner, faster, more accurate compliance operations</div>
          <div><small>The threat</small>Financial crime that learns and adapts at machine speed</div>
          <div><small>The balance</small>Automation with governance and human judgement</div>
        </div>
      </div>
    </section>

    <section class="section dark glow">
      <div class="wrap">
        <span class="eyebrow">06 · The Majlis conversation</span>
        <span class="kicker">11:45 AM – 12:30 PM · Closed door</span>
        <p style="margin-top:.8rem;color:#c4b9da">The future of AI-enabled compliance operations</p>
        <h2 class="big-quote">“What will your compliance operation look like <span class="grad-text">by 2027?</span>”</h2>
        <ul class="arrow-list">
          <li>From traditional compliance operations to intelligent, technology-enabled managed services</li>
          <li>Balancing automation, regulatory expectations and human judgement</li>
          <li>Evaluating the ROI of AI investments in financial crime compliance</li>
          <li>Where banks and specialised technology partners can collaborate</li>
        </ul>
      </div>
    </section>
${cta()}
  `,
};
