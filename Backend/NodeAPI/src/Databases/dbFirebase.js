
const firebase = require('firebase')
const firebaseApp = firebase.inicializeApp({

  apiKey: "AIzaSyBbyA7qmUyNvfyplN9hkHooB1oHVGF9IOw",
  authDomain: "redsocial-b86ff.firebaseapp.com",
  projectId: "redsocial-b86ff",
  storageBucket: "redsocial-b86ff.appspot.com",
  messagingSenderId: "177819895676",
  appId: "1:177819895676:web:75d7538dfe08185668c6f9",
  measurementId: "G-668J0VQKL3"
});
const db = firebaseApp.fireStore()

const User = db.collection("User")

module.exports = User;