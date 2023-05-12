import {
  savePost, activeLoad, getPost, deleteId, getEdit,
} from '../lib/cloudData';

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
  <label id="labelPost">Postea</label>
  <input id="inputPublication" type="text" placeholder="¿Cómo te sientes hoy?"></input>
  <button id="btnPost" type="submit">Publicar</button>
  <button class="btnDelete" type="button">Eliminar</button>
</form>
<div id="postContainer">

</div>
</main>
`;
  section.innerHTML = containerBody;
  let edtitStatus = false;
  const printPost = section.querySelector('#postContainer');
  async function load() {
    activeLoad((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const dataPost = doc.data();
        html += `<p class="${doc.id}" >${dataPost.content}</p>
        <button class="btnsDelete" data-id="${doc.id}" >Eliminar</button>
        <button class = "btnEdit" data-id ="${doc.id}">Editar</button>
        `;
      });
      printPost.innerHTML = html;
      const btnDelete = printPost.querySelectorAll('.btnsDelete');
      console.log(btnDelete);
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log(e.target.dataset.id);
          deleteId(e.target.dataset.id);
        });
      });
      const btnsEdit = printPost.querySelectorAll('.btnEdit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          // classP nos trae el ID de cada post
          const classP = e.target.dataset.id;
          //  texP nos va a traer el texto parrafo del documento a traves de su ID
          // utilizamos un textContent porque las referencias son text
          const textP = section.querySelector(`.${classP}`).textContent;
          console.log('ELMENTO: ', textP);
          /// const edit = await getEdit(e.target.dataset.id);
          // const dataE = edit.data();
          // console.log(dataE);
          const imputEdit = section.querySelector('#inputPublication');
          console.log(imputEdit);
          imputEdit.value = textP;
          edtitStatus = true;

          // tenemops que hacer condicionales para que el texto de publicar cambie a actualizar
          // condiccionales para que ocurra el evento actualizar cuando se seleccione el boton edit
          // y ocurra el evento save post cuando se publique un post
        });
      });
    });
  }

  load();
  const formWelcome = section.querySelector('#post-publications');
  formWelcome.addEventListener('submit', async (e) => {
    e.preventDefault();

    const idImputPost = document.querySelector('#inputPublication');
    // condiciconal para que no se iproiman espacios en blanco
    await savePost(idImputPost.value);
    console.log(idImputPost.value);
    formWelcome.reset();
  });

  return section;
}
export default post;
