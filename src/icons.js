// Small line icons used by the topic chips (24x24, stroke inherits currentColor).
const i = (d) => `<svg viewBox="0 0 24 24">${d}</svg>`;
export const ICON = {
  screen: i('<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.2-4.2"/>'),
  chart: i('<path d="M5 20V10M12 20V4M19 20v-7"/>'),
  sanction: i('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
  fraud: i('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 8v5M12 16v.5"/>'),
  backlog: i('<path d="M8 8l-4 4 4 4M16 8l4 4-4 4"/>'),
  invest: i('<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'),
  govern: i('<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.2"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M15 19c0-2 1.6-3.4 4-3.4"/>'),
  roi: i('<path d="M4 17l6-6 4 4 6-7"/><path d="M15 8h5v5"/>'),
  ai: i('<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>'),
  cloud: i('<path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1 .5 9.5z"/>'),
  lock: i('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
  data: i('<path d="M4 20h16"/><rect x="6" y="11" width="3" height="6"/><rect x="11" y="7" width="3" height="10"/><rect x="16" y="13" width="3" height="4"/>'),
  apps: i('<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>'),
  eng: i('<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3"/>'),
  managed: i('<rect x="4" y="5" width="16" height="6" rx="1.5"/><rect x="4" y="13" width="16" height="6" rx="1.5"/><path d="M8 8h.01M8 16h.01"/>'),
  crime: i('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>'),
  event: i('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  exec: i('<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/>'),
  panel: i('<rect x="3" y="5" width="18" height="11" rx="2"/><path d="M8 20h8M12 16v4"/>'),
  lunch: i('<path d="M6 3v8a2 2 0 0 0 2 2v8M10 3v6M18 3c-2 2-3 4-3 7h3v11"/>'),
};
