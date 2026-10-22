// Minimal History API router: intercepts same-origin links and swaps <main>.

export function createRouter({ routes, notFound, outlet, onRender }) {
  const normalize = (p) => {
    // old static URLs (/agenda.html, /index.html) keep working
    p = p.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    return p.length > 1 ? p.replace(/\/+$/, '') : p;
  };

  let current = null;

  async function render(path, { scroll = true } = {}) {
    const page = routes[path] || notFound;
    const same = page === current;
    current = page;

    if (!same && outlet.childElementCount) {
      outlet.classList.add('page-leave');
      await new Promise((r) => setTimeout(r, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180));
    }

    outlet.innerHTML = page.render();
    outlet.classList.remove('page-leave');
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    if (scroll) window.scrollTo({ top: 0, behavior: 'instant' });
    onRender?.(path, page);
  }

  function navigate(to) {
    const url = new URL(to, location.origin);
    const path = normalize(url.pathname);
    if (path === normalize(location.pathname) && url.hash) {
      document.querySelector(url.hash)?.scrollIntoView();
      return;
    }
    history.pushState({}, '', path + url.search + url.hash);
    render(path);
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    e.preventDefault();
    navigate(url.pathname + url.search + url.hash);
  });

  window.addEventListener('popstate', () => render(normalize(location.pathname), { scroll: false }));

  return {
    navigate,
    start() {
      const path = normalize(location.pathname);
      if (path !== location.pathname) history.replaceState({}, '', path + location.search + location.hash);
      render(path);
    },
  };
}
