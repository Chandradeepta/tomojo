import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATtASAvN5TVFjEoaOZ5uMUtSsoGjYSgAs",
  authDomain: "tomojo-942be.firebaseapp.com",
  projectId: "tomojo-942be",
  storageBucket: "tomojo-942be.appspot.com",
  messagingSenderId: "220353583832",
  appId: "1:220353583832:web:d75ddf69e8d22cf6a555ad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
