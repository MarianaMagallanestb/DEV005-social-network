// Este es el punto de entrada de tu aplicacion
// Páginas importadas
import { initializeApp } from 'firebase/app';
import './configurar firebase/firebase';
import { home } from './components/home.js';
import { check } from './components/check.js';
import { welcome } from './components/welcome.js';

initializeApp();
check();
// traemos id de root al DOM
const root = document.getElementById('root');
// creación de rutas
const routes = [
  { path: '/', component: home },
  { path: '/check', component: check },
  { path: '/welcome', component: welcome },
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
