import { initializeApp , firebase} from "firebase/app"; 
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBio40Sfssw_B59mg-yOIoBW0vsINRoYho",
  authDomain: "redsocial-795a2.firebaseapp.com",
  projectId: "redsocial-795a2",
  databaseURL : "http://redsocial-795a2.firebaseio.com",
  storageBucket: "redsocial-795a2.appspot.com",
  messagingSenderId: "728894857645",
  appId: "1:728894857645:web:9021c6f408b795278b0124",
  measurementId: "G-1HPG9YMXC3"
};

const app = initializeApp (firebaseConfig); 
const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db};

