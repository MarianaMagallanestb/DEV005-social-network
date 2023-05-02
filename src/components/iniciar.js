function signInForm() {
  const signIn = document.createElement('form');
  signIn.setAttribute = ('id', 'login');
  // titulo
  const title2 = document.createElement('h2');
  title2.textContent = '¡Iniciando la Aventura!';
  title2.setAttribute = ('id', 'titlelogin');
  // contraseña
  const password2 = document.createElement('input');
  const lapassword2 = document.createElement('label');
  password2.setAttribute('id', 'password2');
  lapassword2.textContent = 'Ingresa Contraseña';
  lapassword2.classList.add('labelpassword2');
  // correo
  const email2 = document.createElement('input');
  const laemail2 = document.createElement('label');
  email2.setAttribute('id', 'email2');
  laemail2.textContent = 'Escribe tu Correo';
  laemail2.classList.add('labelemail2');

  // botón submit
  const btnlogin = document.createElement('button');
  btnlogin.textContent = 'Inicia Sesión';
  btnlogin.setAttribute('id', 'btnlogin');
  console.log(signIn);

  // mensajes de error
  const messengeErr2 = document.createElement('p');
  messengeErr2.setAttribute('id', 'error2');
  messengeErr2.textContent = '';

  signIn.appendChild(title2);
  signIn.appendChild(lapassword2);
  signIn.appendChild(password2);
  signIn.appendChild(laemail2);
  signIn.appendChild(email2);
  signIn.appendChild(btnlogin);
  signIn.appendChild(messengeErr2);

  /* btnlogin.addEventListener('click', (e) => {
    e.preventDefault();
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email2.value, password2.value)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }); */
  return signIn;
}
export default signInForm;
