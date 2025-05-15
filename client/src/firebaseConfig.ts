import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7PAYLtKhb2XmkPhQtperS_4T0mjEWu28",
  authDomain: "fire-and-white-3d60b.firebaseapp.com",
  projectId: "fire-and-white-3d60b",
  storageBucket: "fire-and-white-3d60b.firebasestorage.app",
  messagingSenderId: "814911057952",
  appId: "1:814911057952:web:232e27ddfed460d8da8c45",
  measurementId: "G-Y570KC4L31"
};

const app = initializeApp(firebaseConfig);

let analytics;
isSupported().then(supported => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, analytics, storage, db };
