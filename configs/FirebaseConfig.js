// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "projetos-536cd.firebaseapp.com",
    projectId: "projetos-536cd",
    storageBucket: "projetos-536cd.firebasestorage.app",
    messagingSenderId: "561901085656",
    appId: "1:561901085656:web:0000ca31c2d157f3d708ad",
    measurementId: "G-DSEDP1P2PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);