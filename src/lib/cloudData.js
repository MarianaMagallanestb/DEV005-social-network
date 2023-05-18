// aqui exportamos la funcion y returnamos
import {
  collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc, arrayUnion,
  arrayRemove,setDoc,
} from 'firebase/firestore';

import { db } from '../configurar firebase/firebase.js';
import { async } from 'regenerator-runtime';

export const savePost = async (content, email) => await addDoc(collection(db, 'post'), { content, email });

export const getPost = () => getDocs(collection(db, 'post'));
export const getOnePost = (id) => getDoc(doc(db, 'post', id));
export const activeLoad = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deleteId = (id) => deleteDoc(doc(db, 'post', id));
export const getEdit = (id) => getDoc(doc(db, 'post', id));
export const updataPost = (id, newcontent) => updateDoc(doc(db, 'post', id), newcontent);

export const giveLike = async (id, email) => await updateDoc(doc(db, 'post', id), {
  like: arrayUnion(email),
});

export const disLike = async (id, email) => await updateDoc(doc(db, 'post', id), {
  like: arrayRemove(email),
});

export const addLikeDocument = () => setDoc(doc(db, 'post'), {
  like: '',
});

