import {
  savePost, activeLoad, deleteId, updataPost, giveLike, disLike, getOnePost,
} from '../lib/cloudData';
import { currentUser } from '../configurar firebase/firebase';

function post() {
  const section = document.createElement('section');
  section.id = 'sectionWelcome';
  const containerBody = `
  

<header>
  <figure>
    <img id="bad-moms" src="https://fontmeme.com/permalink/230413/94187632b7e104d4a58cd78a1e645259.png">
  </figure>
  <div>
<button id="btnClouseLogin" type="button">cerrar sesión</button>
</div>
</header>


<main class ="mainWelcome">
<form id="post-publications">
  <label id="labelPost"></label>
  <input id="inputPublication" type="text" placeholder="¿Cómo te sientes hoy?"></input>
  <button id="btnPost" type="submit">Publicar</button> 
</form>
<div id="postContainer"></div>
</main>



`;

  section.innerHTML = containerBody;
  const btnClouse = section.querySelector('#btnClouseLogin');

  btnClouse.addEventListener('click', () => {
    window.open('/ ', '_self');
  });

  let edtitStatus = false;
  let id = '';
  const printPost = section.querySelector('#postContainer');
  async function load() {
    activeLoad((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const dataPost = doc.data();
        // if(dataPost.email === currentUser.email) entonces pintame en pantalla BtnEdit BtnDelete
        html += `
        
      
       <div class = "divPost">
        <p class="${doc.id}">${dataPost.content}</p>
        <button class="heart" "${dataPost.email}" data-id="${doc.id}">like</button>
        <spam class ="numberLikes">${dataPost.like.length}</spam>
        <button class="btnsDelete" data-id="${doc.id}" >Eliminar</button>
        <button class = "btnEdit" data-id ="${doc.id}">Editar</button>
        </div>
        `;
      });
      printPost.innerHTML = html;
      // función de dar like
      const btnsLike = printPost.querySelectorAll('.heart');
      btnsLike.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          // trae el email
          const emailPost = currentUser.email;
          // trae el id del post
          const classLike = e.target.dataset.id;
          const textL = section.querySelector(`.${classLike}`).textContent;
          console.log('ELMENTO: ', textL);
          // tenemos que traer la data del comentari
          getOnePost(classLike).then((res) => {
            const dataOnePost = res.data();
            if (dataOnePost.like !== undefined && dataOnePost.like.includes(currentUser.email)) {
              disLike(classLike, emailPost);
            } else {
              giveLike(classLike, emailPost);
            }
          });
        });
      });

      const btnDelete = printPost.querySelectorAll('.btnsDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          // eslint-disable-next-line no-restricted-globals, no-alert
          const messegeAlert = confirm('¿Seguro que quiere eliminar este post?');

          if (messegeAlert) { deleteId(e.target.dataset.id); }
        });
      });

      const btnsEdit = printPost.querySelectorAll('.btnEdit');
      const btnPostear = section.querySelector('#btnPost');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          btnPostear.innerText = 'Actualizar';
          // classP nos trae el ID de cada post
          const classP = e.target.dataset.id;
          //  texP nos va a traer el texto parrafo del documento a traves de su ID
          // utilizamos un textContent porque las referencias son text
          const textP = section.querySelector(`.${classP}`).textContent;

          const imputEdit = section.querySelector('#inputPublication');
          imputEdit.value = textP;

          id = e.target.dataset.id;
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
  formWelcome.addEventListener('submit', (e) => {
    e.preventDefault();

    const idImputPost = document.querySelector('#inputPublication');
    const btnPostear = section.querySelector('#btnPost');
    // condiciconal para que no se iproiman espacios en blanco
    // await savePost(idImputPost.value);
    // console.log(idImputPost.value);
    if (!edtitStatus) {
      savePost(idImputPost.value, currentUser.email);
      btnPostear.innerText = 'Publicar';
    } else {
      updataPost(id, {
        content: idImputPost.value,
      });
    }

    edtitStatus = false;
    formWelcome.reset();
  });

  return section;
}
export default post;

/* const idImputPost = document.querySelector('#inputPublication');
  if (idImputPost.value === '') {
    return false;
  } */
