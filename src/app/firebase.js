// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy-cPNA-h4xse6Fc97G_B_XzqrxMK6HWg",
  authDomain: "restaurat-29586.firebaseapp.com",
  projectId: "restaurat-29586",
  storageBucket: "restaurat-29586.appspot.com",
  messagingSenderId: "31324590509",
  appId: "1:31324590509:web:90a3d0d7b34984c68cd124",
  measurementId: "G-H1ZRQRHZYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if Firebase Analytics is supported before initializing it
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Export Firestore instance
const db = getFirestore(app);

export { db };