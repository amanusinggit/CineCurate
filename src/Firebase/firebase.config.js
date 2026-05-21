import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVADW88OvgQUoDbH_ie8u59hTyJShX-lw",
  authDomain: "cinecurate.firebaseapp.com",
  projectId: "cinecurate",
  storageBucket: "cinecurate.firebasestorage.app",
  messagingSenderId: "338394655900",
  appId: "1:338394655900:web:7ce0f86bd03a5351eb5159",
  measurementId: "G-0YVJB7F6F2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
