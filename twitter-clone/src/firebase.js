import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaxRBu3TzCtAFiYONINfa7IcEwICTwPps",
  authDomain: "twitter-clone-eac34.firebaseapp.com",
  databaseURL: "https://twitter-clone-eac34-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-eac34",
  storageBucket: "twitter-clone-eac34.appspot.com",
  messagingSenderId: "991555938802",
  appId: "1:991555938802:web:73a6409e7f1d001762e36b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
