import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbMp5yrU0_hjeE-xfqkltYwUZ2ezjWLPI",
  authDomain: "crwn-clothing-db-cb60b.firebaseapp.com",
  projectId: "crwn-clothing-db-cb60b",
  storageBucket: "crwn-clothing-db-cb60b.appspot.com",
  messagingSenderId: "366891440071",
  appId: "1:366891440071:web:a2ce786e3f3147bb61abe2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth , provider);