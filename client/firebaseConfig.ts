// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7PAYLtKhb2XmkPhQtperS_4T0mjEWu28",
  authDomain: "fire-and-white-3d60b.firebaseapp.com",
  projectId: "fire-and-white-3d60b",
  storageBucket: "fire-and-white-3d60b.firebasestorage.app",
  messagingSenderId: "814911057952",
  appId: "1:814911057952:web:232e27ddfed460d8da8c45",
  measurementId: "G-Y570KC4L31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };