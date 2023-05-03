function post() {
  const section = document.createElement('section');
  const containerBody = `

<header>
  <figure>
    <img id="bad-moms" src="https://fontmeme.com/permalink/230413/94187632b7e104d4a58cd78a1e645259.png">
  </figure>
</header>

<main>
<form id="post-publications">
<div id="buttons">
  <label id="labelPost">Postea</label>
  <input id="inputPublication" type="text" placeholder="¿Cómo te sientes hoy?"></input>
  <button id="btnPost" type="button">Publicar</button>
</div>
</form>
</main>
`;
  section.innerHTML = containerBody;

  const btnPubli = document.getElementById('btnPost');
  btnPubli.addEventListener('click', (e) => {
    e.preventDefault();
  });

  return section;
}
export default post;
