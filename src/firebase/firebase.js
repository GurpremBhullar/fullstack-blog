import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgTr9BPl-kpBExPfsNbGReMunfkp5QSow",
  authDomain: "fullstack-blog-f0a3f.firebaseapp.com",
  projectId: "fullstack-blog-f0a3f",
  storageBucket: "fullstack-blog-f0a3f.appspot.com",
  messagingSenderId: "654424501532",
  appId: "1:654424501532:web:f46007bebbef232d5b1ed9",
  measurementId: "G-N5XB46SJXS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
