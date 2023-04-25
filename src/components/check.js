import { loginWithCredentials } from '../lib/validationCheck';

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
  const messengeErr = document.createElement('p');
  messengeErr.setAttribute('id', 'error');
  messengeErr.textContent = '';

  formCheck.appendChild(title);
  formCheck.appendChild(User);
  formCheck.appendChild(laUser);
  formCheck.appendChild(password);
  formCheck.appendChild(lapassword);
  formCheck.appendChild(email);
  formCheck.appendChild(laemail);
  formCheck.appendChild(btnSubmit);
  formCheck.appendChild(messengeErr);
  // FUNCION BOTON
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    loginWithCredentials(email.value, password.value)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('alert', errorCode);
        if (errorCode === 'auth/weak-password') {
          messengeErr.textContent = 'ingresa de minimo 6 caracteres';
        } else if (errorCode === 'auth/invalid-email') {
          messengeErr.textContent = 'correo Invalido';
        } else if (errorCode === 'auth/missing-email') {
          messengeErr.textContent = 'Porvafor Ingrese una dirección de correo electorinico';
        }
      });
  });
  return formCheck;
}
export default checkForm;
