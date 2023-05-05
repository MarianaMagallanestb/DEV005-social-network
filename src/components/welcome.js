import { savePost, getPost } from '../lib/cloudData';

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
<div id="postContainer"></div>
</main>
`;
  section.innerHTML = containerBody;

  const printPost = section.querySelector('#postContainer');
  console.log('print', printPost);
  window.addEventListener('load', async () => {
    const querySnapshot = await getPost();
    // query es todo mi objeto en formato firebase , se le agrega .data para pasarlo a formato js

    querySnapshot.forEach((e) => {
      const dataPost = e.data();
      console.log('dataPost', dataPost);
    }); // falta hacer un inner.html que imprima la data en pantalla
  });

  const formWelcome = section.querySelector('#post-publications');
  formWelcome.addEventListener('click', async (e) => {
    e.preventDefault();

    const idImputPost = document.querySelector('#inputPublication');
    await savePost(idImputPost.value);
    console.log(idImputPost.value);
    formWelcome.reset();
  });

  return section;
}
export default post;
