import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configurar firebase/firebase';

export function loginWithCredentials(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
