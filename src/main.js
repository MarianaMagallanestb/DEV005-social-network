// Este es el punto de entrada de tu aplicacion
// Páginas importadas
import { home } from './components/home.js';
import check from './components/check.js';
import { welcome } from './components/welcome.js';
import login from './components/iniciar.js';
import { error } from './components/error.js';

// traemos id de root al DOM
const root = document.getElementById('root');
// creación de rutas
const routes = [
  { path: '/', component: home },
  { path: '/check', component: check },
  { path: '/welcome', component: welcome },
  { path: '/login', component: login },
  { path: '/error', component: error },

];

const defaultRoute = '/';
// funcion que navega por las rutas
function navegate(enlace) {
  const route = routes.find((routeFind) => routeFind.path === enlace);
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);
    // root.append(route.component());
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navegate));
  } else {
    navegate('/error');
  }
}
window.onpopstate = () => {
  console.log('hubo un cambio');
  navegate(window.location.pathname);
};

navegate(window.location.pathname || defaultRoute);
