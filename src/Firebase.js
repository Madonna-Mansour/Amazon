// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvCgapemynO9gK3knw8RW-BFohh_faEkI",
  authDomain: "e-67199.firebaseapp.com",
  projectId: "e-67199",
  storageBucket: "e-67199.firebasestorage.app",
  messagingSenderId: "744007747435",
  appId: "1:744007747435:web:33ed8747b99713cf40ae2e",
  measurementId: "G-KJV2GDRLSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)