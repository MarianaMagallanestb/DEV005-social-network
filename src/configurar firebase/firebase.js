// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLbSqZdX-nROzDUPmVUrTcm5d8dkunIfI',
  autgithDomain: 'social-network-7ece4.firebaseapp.com',
  projectId: 'social-network-7ece4',
  storageBucket: 'social-network-7ece4.appspot.com',
  messagingSenderId: '954313566543',
  appId: '1:954313566543:web:7216ef0012cd54244bfd3a',
  measurementId: 'G-ESSGY9SNCM',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
