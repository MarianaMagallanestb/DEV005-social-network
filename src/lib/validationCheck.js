import { createUserWithEmailAndPassword } from 'firebase/auth';

// import { async } from "regenerator-runtime";
import { auth } from '../configurar firebase/firebase';

export function loginWithCredentials(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
