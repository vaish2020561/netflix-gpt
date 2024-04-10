
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDT52_HsT6HGfmXcz6yVoQBmY0KEaQdVA",
  authDomain: "netflix-gpt-d4b0b.firebaseapp.com",
  databaseURL: "https://netflix-gpt-d4b0b-default-rtdb.firebaseio.com",
  projectId: "netflix-gpt-d4b0b",
  storageBucket: "netflix-gpt-d4b0b.appspot.com",
  messagingSenderId: "806116271816",
  appId: "1:806116271816:web:6049d6dfe2c29fb535e7fd",
  measurementId: "G-4SYYXYS348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();