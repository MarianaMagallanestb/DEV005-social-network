import { loginWithCredentials } from "../lib/validationCheck";

function checkForm() {
  const formCheck = document.createElement('form');
  formCheck.setAttribute = ('id', 'claseTotal');
  // titulo
  const title = document.createElement('h2');
  title.textContent = '¡Bienvenida!';
  // nombre de usuario
  const User = document.createElement('input');
  User.setAttribute('id', 'user');
  const laUser = document.createElement('label');
  laUser.textContent = 'Nombre de Usuario';
  laUser.classList.add('labelUser');
  // contraseña
  const password = document.createElement('input');
  const lapassword = document.createElement('label');
  password.setAttribute('id', 'password');
  lapassword.textContent = 'Crea Contraseña';
  lapassword.classList.add('labelpassword');
  // correo
  const email = document.createElement('input');
  const laemail = document.createElement('label');
  email.setAttribute('id', 'email');
  laemail.textContent = 'Ingresa Correo';
  laemail.classList.add('labelemail');

  // botón submit
  const btnSubmit = document.createElement('button');
  btnSubmit.textContent = 'Submit';
  btnSubmit.setAttribute('id', 'btnSubmit');
  console.log(formCheck);

  // mensajes de error
  let messengeErr = document.createElement('p');
  messengeErr.setAttribute('id', 'error');
  messengeErr = '';

  formCheck.appendChild(title);
  formCheck.appendChild(User);
  formCheck.appendChild(laUser);
  formCheck.appendChild(password);
  formCheck.appendChild(lapassword);
  formCheck.appendChild(email);
  formCheck.appendChild(laemail);
  formCheck.appendChild(btnSubmit);
  // FUNCION BOTON

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    try {
      const credentials = loginWithCredentials(email.value, password.value);
      console.log(credentials);
    } catch (err) {
      if (err.code === 'auth/weak-password') {
        alert('contraseña invalida');
      }
    }
  });

  console.log('alert');
  return formCheck;
}
export default checkForm;
