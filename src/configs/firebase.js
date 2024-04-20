// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTgwKpmublG1xvg9YSV1jKoDOqToK9xL4",
  authDomain: "fir-course-390f8.firebaseapp.com",
  projectId: "fir-course-390f8",
  storageBucket: "fir-course-390f8.appspot.com",
  messagingSenderId: "76200642132",
  appId: "1:76200642132:web:7b5ce10944ff8f72954fc1",
  measurementId: "G-55RSLVLB6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);