// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLbSqZdX-nROzDUPmVUrTcm5d8dkunIfI',
  authDomain: 'social-network-7ece4.firebaseapp.com',
  projectId: 'social-network-7ece4',
  storageBucket: 'social-network-7ece4.appspot.com',
  messagingSenderId: '954313566543',
  appId: '1:954313566543:web:fed0a09be287dcda4bfd3a',
  measurementId: 'G-BH3VE6308W',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
console.log('auth', auth);

export const currentUser = {};
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log('==>>> ', user);
    currentUser.uid = user.uid;
    currentUser.email = user.email;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
