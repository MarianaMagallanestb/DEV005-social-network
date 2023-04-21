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
  const submit = document.createElement('button');
  submit.textContent = 'Submit';
  submit.classList.add('btnSubmit');
  console.log(formCheck);

  formCheck.appendChild(title);
  formCheck.appendChild(User);
  formCheck.appendChild(laUser);
  formCheck.appendChild(password);
  formCheck.appendChild(lapassword);
  formCheck.appendChild(email);
  formCheck.appendChild(laemail);
  formCheck.appendChild(submit);
  // FUNCION BOTON

  // aqui exportaras las funciones que necesites



formCheck.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').nodeValue;
  const password = document.querySelector('#password').nodeValue;
  console.log(email, password);

loginWithCredentials(email, password)
    .then((userCredential) => {
    // Signed in
    // const user = userCredential.user;//
      const userinput = document.querySelector('#user').nodeValue;

    // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      });
});

  return formCheck;
}
export default checkForm;
