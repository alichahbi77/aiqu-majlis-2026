import { ICON } from '../icons.js';
import { cta, pageHero } from './_shared.js';

const caps = [
  ['Artificial Intelligence', 'ai'], ['Cloud Computing', 'cloud'], ['Cybersecurity', 'lock'], ['Data & Analytics', 'data'],
  ['Enterprise Applications', 'apps'], ['Digital Engineering', 'eng'], ['Managed IT Services', 'managed'], ['Financial Crime Compliance', 'crime', 'hl'],
];

const services = [
  ['Conferences & summits', 'event'], ['Executive roundtables & Majlis', 'exec'], ['Exhibitions & trade shows', 'apps'], ['Sponsorship & partnerships', 'govern'],
];

export default {
  title: 'About AIQU & Plexus Global · AIQU Executive Majlis 2026',
  description: 'About AIQU, host of the Executive Majlis, and Plexus Global, the organiser. Learn. Connect. Inspire.',
  render: () => `
${pageHero('About', 'Your technology partner <span class="grad-text">for an AI-driven world</span>', 'AIQU is a leading IT services, technology solutions and digital transformation partner for organisations across the GCC.', 'ai-person.jpg')}

    <section class="section">
      <div class="wrap split">
        <div class="split-img"><img src="/assets/img/ai-person.jpg" alt="“AI is in our name. It’s in everything we do.”" loading="lazy"></div>
        <div>
          <span class="eyebrow">08 · About the host</span>
          <h2>About <span class="blue">AIQU.</span></h2>
          <p>AIQU is a leading IT services, technology solutions and digital transformation partner, helping organisations across the GCC modernise operations, accelerate innovation and achieve measurable business outcomes.</p>
          <p>AIQU is strengthening its focus on <strong>Financial Crime Compliance</strong> as a strategic managed services domain, helping banks apply AI and technology to AML, sanctions, transaction monitoring and fraud operations, backed by specialised talent and deep regional knowledge.</p>
          <p style="font-weight:700;color:var(--text)">“AI is in our name. It’s in everything we do.”</p>
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="wrap">
        <div class="chips">
          ${caps.map(([t, ic, cls]) => `<div class="chip ${cls || ''}">${ICON[ic]}<span>${t.replace('&', '&amp;')}</span></div>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section dark glow">
      <div class="wrap">
        <div class="stats-dark" style="margin-top:0">
          <div><strong>800+</strong><span>Technology specialists</span></div>
          <div><strong>520+</strong><span>Clients across MENA</span></div>
          <div><strong>19+</strong><span>Years on the ground in KSA &amp; UAE</span></div>
          <div><strong>86.5</strong><span>NPS, top 1% global rating</span></div>
        </div>
        <span class="eyebrow">Trusted by leading organisations across the region</span>
        <div class="clients">
          <img src="/assets/img/client-emirates.png" alt="Emirates">
          <img src="/assets/img/client-ibm.png" alt="IBM">
          <img src="/assets/img/client-riyadh-air.png" alt="Riyadh Air">
          <img src="/assets/img/client-sabic.png" alt="SABIC">
          <img src="/assets/img/client-fab.png" alt="First Abu Dhabi Bank">
          <img src="/assets/img/client-riyad-bank.png" alt="Riyad Bank">
        </div>
        <p style="margin-top:2rem;color:#c4b9da"><a href="https://aiqusolutions.com" target="_blank" rel="noopener" style="color:#c4a0f5">aiqusolutions.com</a></p>
      </div>
    </section>

    <section class="section">
      <div class="wrap split">
        <div>
          <span class="eyebrow">09 · About the organiser</span>
          <h2>Learn. Connect. <span class="blue">Inspire.</span></h2>
          <p>Plexus Global is a premier international event management company headquartered in Dubai, specialising in the strategic design and execution of high-profile conferences, exhibitions, executive roundtables and Majlis gatherings for governments, multinational corporations and industry leaders.</p>
          <p>Our mission is to deliver impactful experiences that connect minds, spark opportunities and elevate industry excellence on a global stage.</p>
        </div>
        <div>
          <div class="photo-grid">
            <img src="/assets/img/room-wide.jpg" alt="A recent Plexus Global Majlis" loading="lazy">
            <img src="/assets/img/networking-1.jpg" alt="" loading="lazy">
            <img src="/assets/img/majlis-speaker.jpg" alt="" loading="lazy">
          </div>
          <p class="cap">A recent Plexus Global Majlis</p>
        </div>
      </div>
      <div class="wrap" style="margin-top:2.6rem">
        <div class="chips">
          ${services.map(([t, ic]) => `<div class="chip">${ICON[ic]}<span>${t.replace('&', '&amp;')}</span></div>`).join('\n          ')}
        </div>
        <div class="session" style="margin-top:2rem"><div class="session-body" style="display:flex;gap:2rem;align-items:center;flex-wrap:wrap;justify-content:space-between">
          <div style="max-width:56ch"><span class="eyebrow">Our technology platforms</span><p style="margin:0;color:var(--muted)">TechForge Global and CyberForge Global convene technology and cybersecurity leaders across the UAE, Saudi Arabia, Bahrain and beyond.</p></div>
          <div class="logo-chip" style="border:1px solid var(--line)"><img src="/assets/img/techforge-logo.png" alt="TechForge Global"><img src="/assets/img/cyberforge-logo.png" alt="CyberForge Global"></div>
        </div></div>
      </div>
    </section>
${cta()}
  `,
};
