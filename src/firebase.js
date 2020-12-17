import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZ9tSApf_TL_SfWH1a4Xf2Ok5NYQS9lSk",
  authDomain: "portfolio-98801.firebaseapp.com",
  databaseURL: "https://portfolio-98801.firebaseio.com",
  projectId: "portfolio-98801",
  storageBucket: "portfolio-98801.appspot.com",
  messagingSenderId: "994180628272",
  appId: "1:994180628272:web:32a47de838ae03c98112f5",
});

const db = firebaseApp.firestore();

export {db};
