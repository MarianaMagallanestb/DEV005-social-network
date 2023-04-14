export function home() {
  const section = document.createElement('section');
  const img = document.createElement('img');
  img.src = 'https://fontmeme.com/permalink/230413/94187632b7e104d4a58cd78a1e645259.png';
  img.classList.add('img');
  const paragraph = document.createElement('p');
  paragraph.classList.add('parrafohome');
  const btnCheckIn = document.createElement('input');
  btnCheckIn.classList.add('btnhome');
  paragraph.textContent = '¡Comparte tu experiencia en confianza!';
  btnCheckIn.textContent = 'Resgistrarse';
  section.append(img, paragraph, btnCheckIn);

  return section;
}
