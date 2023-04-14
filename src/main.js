// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
import { check } from './components/check.js';

home();
check();
const root = document.getElementById('root');
root.append(check());

const routes = [
  { path: '/', component: home },
  { path: '/check', component: check },
];

function navegate(enlace) {
  const route = routes.find((routeFind) => routeFind.path === enlace);
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);
    root.append(route.component());
  }
}
navegate(window.location.pathname);
