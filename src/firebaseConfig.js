/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7XxL4JvseNz8hMv_y543nffz-I2-fNFY",
  authDomain: "unixchange-4562c.firebaseapp.com",
  projectId: "unixchange-4562c",
  storageBucket: "unixchange-4562c.appspot.com",
  messagingSenderId: "868744436636",
  appId: "1:868744436636:web:229a9baff352e194350659",
  measurementId: "G-VE8B1VL7M8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {app, auth, db};
