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

    loginWithCredentials(email.value, password.value)
      .then((res) => {
        password.value = '';
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  // promesa validar usuario ,correo y contraseña

  /*ormCheck.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emaill = document.querySelector('#email').nodeValue;
    const passwordd = document.querySelector('#password').nodeValue;
    console.log(email, passwordd);

    loginWithCredentials(emaill, password)

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
  });*/
  console.log('alert');
  return formCheck;
}
export default checkForm;
