import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style-navbar.css';
import '../styles/dashboard.css';
import './views/templates/NavbarElement.js';
import './views/templates/NavbarAdminElement.js';
import './views/templates/SideBarElement.js';
import App from './views/app';

const app = new App({
  content: document.querySelector('#main-content')
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
