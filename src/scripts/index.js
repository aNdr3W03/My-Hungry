import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './views/component/nav-bar';
import './views/component/hero-image';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

// Footer Year Copyright
const since = 2023;
const nowYear = new Date().getFullYear();
const footerYear = (since === nowYear) ? (since) : (`${since}-${nowYear}`);
document.getElementById('footer-year').innerHTML = footerYear;
