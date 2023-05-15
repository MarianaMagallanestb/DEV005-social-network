// aqui exportamos la funcion y returnamos
import {
  collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc,
} from 'firebase/firestore';

import { db } from '../configurar firebase/firebase.js';

export const savePost = async (content) => await addDoc(collection(db, 'post'), { content });

export const getPost = () => getDocs(collection(db, 'post'));
export const activeLoad = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deleteId = (id) => deleteDoc(doc(db, 'post', id));
export const getEdit = (id) => getDoc(doc(db, 'post', id));
export const updataPost = (id, newcontent) => updateDoc(doc(db, 'post', id), newcontent);
