import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "next-fullstack-app-7e8bc.firebaseapp.com",
  projectId: "next-fullstack-app-7e8bc",
  storageBucket: "next-fullstack-app-7e8bc.appspot.com",
  messagingSenderId: "881523106202",
  appId: "1:881523106202:web:93339a825797a532ef5a23"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Signs in to the app
export const signInUser = async () => {
  // Sign in firebase using a popup auth and google as the provider
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

// Signs out of the app
export const signOutUser = async () => {
  // Sign out of firebase
  signOut(auth);
};
