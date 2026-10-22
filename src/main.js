import './styles/main.css';
import { header, footer } from './layout.js';
import { createRouter } from './router.js';
import { reveal } from './reveal.js';
import home from './pages/home.js';
import agenda from './pages/agenda.js';
import whyJoin from './pages/why-join.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
import notFound from './pages/not-found.js';

const app = document.getElementById('app');
app.innerHTML = `${header()}<main id="view" class="page-view"></main>${footer()}`;

const outlet = document.getElementById('view');
const menu = document.getElementById('menu');

const router = createRouter({
  outlet,
  notFound,
  routes: { '/': home, '/agenda': agenda, '/why-join': whyJoin, '/about': about, '/contact': contact },
  onRender(path) {
    for (const a of document.querySelectorAll('[data-nav]')) {
      a.classList.toggle('active', a.getAttribute('href') === path);
    }
    menu.checked = false;
    outlet.classList.remove('animate-page-in');
    void outlet.offsetWidth; // restart the enter animation
    outlet.classList.add('animate-page-in');
    reveal(outlet);
  },
});

router.start();
