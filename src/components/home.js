export function home() {
  // section
  const section = document.createElement('section');

  // titulo
  const img = document.createElement('img');
  img.src = 'https://fontmeme.com/permalink/230413/94187632b7e104d4a58cd78a1e645259.png';
  img.classList.add('img');

  // parrafo
  const paragraph = document.createElement('p');
  paragraph.classList.add('parrafohome');
  paragraph.textContent = '¡Comparte tu experiencia en confianza!';

  // botón que llevará a la página de registro
  const btnCheckIn = document.createElement('botton');
  btnCheckIn.classList.add('btnhome');
  btnCheckIn.textContent = 'Resgistrarse';

  section.append(img, paragraph, btnCheckIn);

  return section;
}
