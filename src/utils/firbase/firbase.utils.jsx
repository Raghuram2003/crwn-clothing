import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  

  const userSnapshot = await getDoc(userDocRef);
  

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("There was an error creating an user ", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword= async (email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser =async ()=> await signOut(auth);

export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth,callback);