import check from './check';

check();
export function home() {
  // section
  const section = document.createElement('section');
  section.id = 'sectionHome';
  // titulo
  const img = document.createElement('img');
  img.src = 'https://fontmeme.com/permalink/230413/94187632b7e104d4a58cd78a1e645259.png';
  img.id = 'imgHome';

  // parrafo
  const paragraph = document.createElement('h2');
  paragraph.id = 'paragraphHome';
  paragraph.textContent = '¡Comparte tu experiencia en confianza!';

  // botón que llevará a la página de registro
  const btnCheckIn = document.createElement('button');
  btnCheckIn.id = 'btnCheciin';
  btnCheckIn.textContent = 'Resgistrarse';
  const btnLogin = document.createElement('button');
  btnLogin.id = 'btnlogin';
  btnLogin.textContent = 'Iniciar Sesión';
  section.appendChild(img);
  section.appendChild(paragraph);
  section.appendChild(btnCheckIn);
  section.appendChild(btnLogin);
  btnLogin.addEventListener('click', (e) => {
    window.open('/login', '_self');
  });
  btnCheckIn.addEventListener('click', (e) => {
    window.open('/check', '_self');
  });
  return section;
}
