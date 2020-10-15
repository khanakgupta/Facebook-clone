// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA7Qv5TAgjEs7rdcbx4YCnWEiMmT5Gkrnc",
    authDomain: "facebook-clone-1e7a4.firebaseapp.com",
    databaseURL: "https://facebook-clone-1e7a4.firebaseio.com",
    projectId: "facebook-clone-1e7a4",
    storageBucket: "facebook-clone-1e7a4.appspot.com",
    messagingSenderId: "419388981257",
    appId: "1:419388981257:web:4c64eab0443fab91bd38d8",
    measurementId: "G-MHS7QP5BV8",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;
  




  