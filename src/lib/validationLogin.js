import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../configurar firebase/firebase';

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
/* export const buttonGoogle = document.querySelector('#btnGoogle');
buttonGoogle.addEventListener('click', async()=> {
  const provider = new GoogleAuthProvider()
try
cons
}

)* */
