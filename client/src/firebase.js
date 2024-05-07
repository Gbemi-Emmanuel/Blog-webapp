// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-webapp-2bcdc.firebaseapp.com",
  projectId: "blog-webapp-2bcdc",
  storageBucket: "blog-webapp-2bcdc.appspot.com",
  messagingSenderId: "469965337737",
  appId: "1:469965337737:web:815fccf72a3fffc58d8258"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);