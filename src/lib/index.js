// aqui exportaras las funciones que necesites

import { loginWithCredentials } from "./validationCheck";

const formularyCheck = document.querySelector('#claseTotal');

formularyCheck.addEventListener('submit', async (e) => {
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

