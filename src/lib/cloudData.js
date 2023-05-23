// aqui exportamos la funcion y returnamos
import {
  collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc, arrayUnion,
  arrayRemove, setDoc,
} from 'firebase/firestore';

import { db } from '../configurar firebase/firebase.js';

export const savePost = (content, email) => addDoc(collection(db, 'post'), { content, email, like: [] });

export const getPost = () => getDocs(collection(db, 'post'));
export const getOnePost = (id) => getDoc(doc(db, 'post', id));
export const activeLoad = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deleteId = (id) => deleteDoc(doc(db, 'post', id));
export const getEdit = (id) => getDoc(doc(db, 'post', id));
export const updataPost = (id, newcontent) => updateDoc(doc(db, 'post', id), newcontent);

export const giveLike = (id, email) => updateDoc(doc(db, 'post', id), {
  like: arrayUnion(email),
});

export const disLike = (id, email) => updateDoc(doc(db, 'post', id), {
  like: arrayRemove(email),
});

export const addLikeDocument = () => setDoc(doc(db, 'post'), {
  like: '',
});
export {
  deleteDoc,
};
