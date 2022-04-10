// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDdkcUjCE7p81-QZhy8Vr5pdoAOMZa2Vs",
  authDomain: "ema-john-aeccd.firebaseapp.com",
  projectId: "ema-john-aeccd",
  storageBucket: "ema-john-aeccd.appspot.com",
  messagingSenderId: "767779278534",
  appId: "1:767779278534:web:1d131083a38ddb852211c7",
  measurementId: "G-L57BXNC5HN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
