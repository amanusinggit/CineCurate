// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cinecurate-11f1c.firebaseapp.com",
  projectId: "cinecurate-11f1c",
  storageBucket: "cinecurate-11f1c.firebasestorage.app",
  messagingSenderId: "691092830933",
  appId: "1:691092830933:web:325ba240489a163451005c",
  measurementId: "G-1BKVJYLJD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
