// aqui exportaras las funciones que necesites

import { loginWithCredentials } from "./validationCheck";
// Dom formulario
const formularyCheck = document.querySelector('#claseTotal');

// agregarmos eveneto submit al formulario
formularyCheck.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Dom imput Email, Pasword y usser
  const emaill = document.querySelector('#email').nodeValue;
  const passwordd = document.querySelector('#password').nodeValue;
  console.log(emaill, passwordd);

  // promesa
  loginWithCredentials(emaill, passwordd)
    .then((userCredential) => {
    // Signed in

      //const user = userCredential.user;
    // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
});
