// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-a0093.firebaseapp.com",
  projectId: "blog-a0093",
  storageBucket: "blog-a0093.firebasestorage.app",
  messagingSenderId: "668453611361",
  appId: "1:668453611361:web:75f035f76f262ef6914720"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);