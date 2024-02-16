import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfdrLOfyzPxWur-R5ezC-eSBEcofNIKjc",
  authDomain: "licorstore-15a63.firebaseapp.com",
  projectId: "licorstore-15a63",
  storageBucket: "licorstore-15a63.appspot.com",
  messagingSenderId: "487807391181",
  appId: "1:487807391181:web:7cddf4bb3dc4eb65dc6084"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);