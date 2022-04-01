import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";

const firebaseconfig ={
    
  apiKey: "AIzaSyBbyA7qmUyNvfyplN9hkHooB1oHVGF9IOw",
  authDomain: "redsocial-b86ff.firebaseapp.com",
  projectId: "redsocial-b86ff",
  databaseURL : "http//redsocial-b86ff.firebaseapp.com",
  storageBucket: "redsocial-b86ff.appspot.com",
  messagingSenderId: "177819895676",
  appId: "1:177819895676:web:75d7538dfe08185668c6f9",
  measurementId: "G-668J0VQKL3"

}

const app = initializeApp (firebaseconfig); 
const auth = getAuth(app);

export {auth}