function home() {
  const section = document.createElement('section');
  const img = document.createElement('img');
  img.src = 'https://fontmeme.com/permalink/230413/94187632b7e104d4a58cd78a1e645259.png';
  const paragraph = document.createElement('p');
  const btnCheckIn = document.createElement('button');
  btnCheckIn.classList.add('mahahahahahaha');
  paragraph.textContent = '¡Comparte tu experiencia en confianza!';
  btnCheckIn.textContent = 'Resgistrarse';
  section.append(img, paragraph, btnCheckIn);

  return section;
}
export default home;
