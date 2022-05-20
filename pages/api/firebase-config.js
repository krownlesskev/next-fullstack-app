import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "next-fullstack-app-7e8bc.firebaseapp.com",
  projectId: "next-fullstack-app-7e8bc",
  storageBucket: "next-fullstack-app-7e8bc.appspot.com",
  messagingSenderId: "881523106202",
  appId: "1:881523106202:web:93339a825797a532ef5a23"
};

const app = initializeApp(firebaseConfig);