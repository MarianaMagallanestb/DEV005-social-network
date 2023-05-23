import { login } from '../lib/validationLogin';

function signInForm(navegate) {
  const signIn = document.createElement('form');
  signIn.setAttribute = ('id', 'login');
  signIn.id = 'signInForm';
  // titulo
  const title2 = document.createElement('h2');
  title2.textContent = 'Iniciar Sesión';
  title2.id = 'titleLogin';
  title2.classList.add('classIniciar');
  // contraseña
  const password2 = document.createElement('input');
  password2.setAttribute('type', 'password');
  password2.placeholder = 'Contraseña';
  password2.id = 'password2';
  password2.classList.add('classIniciar');

  // correo
  const email2 = document.createElement('input');
  email2.placeholder = 'Correo Electronico';
  email2.id = 'email2';
  email2.classList.add('classIniciar');
  // botón submit
  const btnlogin = document.createElement('button');
  btnlogin.textContent = 'Inicia Sesión';
  btnlogin.id = 'btnLogin';
  btnlogin.classList.add('classIniciar');
  console.log(signIn);
  // botón google

  const btnGoogle = document.createElement('button');
  btnGoogle.textContent = 'Google';
  btnGoogle.id = 'btnGoogle';
  btnGoogle.classList.add('classGoogle');

  // mensajes de error
  const messengeErr2 = document.createElement('p');
  messengeErr2.id = 'messegeErr2';
  messengeErr2.textContent = '';
  messengeErr2.classList.add('classIniciar');

  const labelPasswordL = document.createElement('p');
  labelPasswordL.id = 'laPasswordLogin';
  labelPasswordL.textContent = 'Ingrese su contraseña';

  const laEmailLogin = document.createElement('p');
  laEmailLogin.id = 'laEmailLogin';
  laEmailLogin.textContent = 'Ingrese su correo';

  signIn.appendChild(title2);
  signIn.appendChild(laEmailLogin);
  signIn.appendChild(email2);
  signIn.appendChild(labelPasswordL);
  signIn.appendChild(password2);
  signIn.appendChild(btnlogin);
  signIn.appendChild(btnGoogle);
  signIn.appendChild(messengeErr2);

  // promesa

  btnlogin.addEventListener('click', (e) => {
    e.preventDefault();

    login(email2.value, password2.value)
      .then((res) => {
        navegate('/welcome');
        console.log(res);
      })
      .catch((error) => {
        // const errorMessage = error.message;
        const errorCode = error.code;
        console.log('alert', errorCode);
        if (errorCode === 'auth/weak-password') {
          messengeErr2.textContent = 'Ingresa de minimo 7 caracteres';
        } else if (errorCode === 'auth/invalid-email') {
          messengeErr2.textContent = 'Correo Invalido';
        } else if (errorCode === 'auth/missing-email') {
          messengeErr2.textContent = 'Porvafor Ingrese una dirección de correo electorinico';
        } else if (errorCode === 'auth/missing-password') {
          messengeErr2.textContent = 'Por favor Ingrese Contraseña';
        } else if (errorCode === 'auth/wrong-password') {
          messengeErr2.textContent = 'Contraseña Invalida';
        } else if (errorCode === 'auth/user-not-found') {
          messengeErr2.textContent = 'Usuario no encontrado';
        } else if (password2.value || email2.value === '') {
          messengeErr2.textContent = 'Porfavor llene todos los campos';
        }
      });
  });

  return signIn;
}
export default signInForm;
