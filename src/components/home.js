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
  paragraph.textContent = 'Conéctate con otras Mamás y comparte experiencias únicas de la maternidad';

  // botón que llevará a la página de registro
  const btnCheckIn = document.createElement('button');
  btnCheckIn.id = 'btnCheciin';
  btnCheckIn.textContent = 'Registrarse';
  const btnLogin = document.createElement('button');
  btnLogin.id = 'btnLogiin';
  btnLogin.textContent = 'Iniciar Sesión';
  const sectionImg = document.createElement('section');

  const containerImgHome = `
  <img src="img/fe.jpg" alt="Imagen">
  `;
  sectionImg.innerHTML = containerImgHome;
  section.appendChild(img);
  section.appendChild(paragraph);
  section.appendChild(btnCheckIn);
  section.appendChild(btnLogin);
  btnLogin.addEventListener('click', () => {
    window.open('/login', '_self');
  });
  btnCheckIn.addEventListener('click', () => {
    window.open('/check', '_self');
  });
  return section;
}
