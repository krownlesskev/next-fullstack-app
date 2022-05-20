import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "next-fullstack-app-7e8bc.firebaseapp.com",
  projectId: "next-fullstack-app-7e8bc",
  storageBucket: "next-fullstack-app-7e8bc.appspot.com",
  messagingSenderId: "881523106202",
  appId: "1:881523106202:web:93339a825797a532ef5a23"
};

const app = initializeApp(firebaseConfig);