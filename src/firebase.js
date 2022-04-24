
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdp-8Lnz91bjRaw_Sy57lYU-6nhDByohU",
  authDomain: "react-authentication-1c732.firebaseapp.com",
  projectId: "react-authentication-1c732",
  storageBucket: "react-authentication-1c732.appspot.com",
  messagingSenderId: "563929183585",
  appId: "1:563929183585:web:a3cced0e4c324b23220120",
  measurementId: "G-6DPT3NEX3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;