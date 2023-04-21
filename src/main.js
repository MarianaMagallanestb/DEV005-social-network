// Este es el punto de entrada de tu aplicacion
// Páginas importadas
import { home } from './components/home.js';
import check from './components/check.js';
import { welcome } from './components/welcome.js';

// traemos id de root al DOM
const root = document.getElementById('root');
// creación de rutas
const routes = [
  { path: '/', component: home },
  { path: '/check', component: check },
  { path: '/welcome', component: welcome },
];

const defaultRoute = '/';
// funcion que navega por las rutas
function navegate(enlace) {
  const route = routes.find((routeFind) => routeFind.path === enlace);
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);
    root.append(route.component());
  }
}
navegate(window.location.pathname || defaultRoute);
