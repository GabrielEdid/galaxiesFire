// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA67bWN7_ndWiYkOOgwsrg7W57CM56ww4I",
  authDomain: "galaxiesfire-7d958.firebaseapp.com",
  projectId: "galaxiesfire-7d958",
  storageBucket: "galaxiesfire-7d958.appspot.com",
  messagingSenderId: "595550670792",
  appId: "1:595550670792:web:c31cab9aaad5b197227afd",
  measurementId: "G-BP4T44VJZX",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);
