// Este es el punto de entrada de tu aplicacion
// Páginas importadas
import { home } from './components/home.js';
import { check } from './components/check.js';

check();
// traemos id de root al DOM
const root = document.getElementById('root');
// creación de rutas
const routes = [
  { path: '/', component: home },
  { path: '/check', component: check },
];
// funcion que navega por las rutas
function navegate(enlace) {
  const route = routes.find((routeFind) => routeFind.path === enlace);
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);
    root.append(route.component());
  }
}
navegate(window.location.pathname);

// Eventos Dom check
// *const form = document.querySelector('.claseTotal');
// form.addEventListener('submit', e =>{
// e.preventDefault();
// checkInputs();
// });
//  EL METODO CHECK INPUTS ES UNA FUNCIÓN PARA VALIDAR LOS INPUTS
