// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-40bb3.firebaseapp.com",
  projectId: "mern-blog-40bb3",
  storageBucket: "mern-blog-40bb3.appspot.com",
  messagingSenderId: "561401202803",
  appId: "1:561401202803:web:8f81b5c4f7b683c232c206",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
