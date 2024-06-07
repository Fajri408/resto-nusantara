import 'regenerator-runtime';
import '../styles/style.scss';
import App from './views/apps';
import registerServiceWorker from './utils/servicework-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#maincontent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

const app = new App({
  button: document.querySelector('#hamburger'),
  nav: document.querySelector('#navbar'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  registerServiceWorker();
});
