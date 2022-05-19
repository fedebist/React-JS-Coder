// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIOAHoUebZ1FD6obRsvVGp362kShwZglQ",
  authDomain: "phone-store-mdp.firebaseapp.com",
  projectId: "phone-store-mdp",
  storageBucket: "phone-store-mdp.appspot.com",
  messagingSenderId: "387447744605",
  appId: "1:387447744605:web:1aaa9bae787a983c2405b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* exportar base de datos (db) */
export default db;
