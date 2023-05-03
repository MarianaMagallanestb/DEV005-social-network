import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../configurar firebase/firebase';

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
