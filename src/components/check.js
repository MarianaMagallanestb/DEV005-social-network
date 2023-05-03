import { loginWithCredentials } from '../lib/validationCheck';

function checkForm() {
  const formCheck = document.createElement('form');
  formCheck.id = 'formCheck';
  // titulo
  const title = document.createElement('h2');
  title.textContent = 'Te damos la bienvenida a Bad Moms';
  title.id = 'h2CheckIn';
  // nombre de usuario
  const User = document.createElement('input');
  User.id = 'impUser';
  const laUser = document.createElement('label');
  laUser.textContent = 'Nombre de Usuario';
  laUser.id = 'idlaUser';
  // contraseña
  const password = document.createElement('input');
  const lapassword = document.createElement('label');
  password.id = 'impPassword';
  lapassword.textContent = 'Crea Contraseña';
  lapassword.id = 'IdlaPassword';
  // correo
  const email = document.createElement('input');
  const laemail = document.createElement('label');
  email.id = 'impEmail';
  laemail.textContent = 'Ingresa Correo';
  laemail.id = 'IdlaEmail';

  // botón submit
  const btnSubmit = document.createElement('button');
  btnSubmit.textContent = 'Submit';
  btnSubmit.id = 'btnSubmitt';
  console.log(formCheck);

  // mensajes de error
  const messengeErr = document.createElement('p');
  messengeErr.id = 'messenger1';
  messengeErr.textContent = '';

  formCheck.append(title, laUser, User, lapassword, password, laemail, email, btnSubmit);
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
        } else if (errorCode === 'auth/missing-password') {
          messengeErr.textContent = 'Por favor Crea Contraseña';
        } else if (errorCode === 'auth/email-already-in-use') {
          messengeErr.textContent = 'Este correo ya esta en uso';
        } else {
          messengeErr.textContent = 'gbreifhnerjfhiurgirg';
        }
      });
  });
  return formCheck;
}
export default checkForm;
