// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALYAN4kHY_iUNn9yybROLfPdGVdGLOWyo",
  authDomain: "izzul-portfolio-chat.firebaseapp.com",
  projectId: "izzul-portfolio-chat",
  storageBucket: "izzul-portfolio-chat.firebasestorage.app",
  messagingSenderId: "205237780727",
  appId: "1:205237780727:web:50f98c84997c38206893f2",
  measurementId: "G-S2E6QYDYBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
