// aqui exportamos la funcion y returnamos
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../configurar firebase/firebase.js';

export const savePost = async (content) => {
 return await addDoc(collection(db, 'post'), { content });
};

export const getPost = () => getDocs(collection(db, 'post'));
