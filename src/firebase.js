// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; // For Firestore (database)
import { getAuth } from 'firebase/auth'; // For Firebase Authentication (optional)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkKOJWmZWDwQEat0MTtnz2gT-bOgB6tuI",
    authDomain: "health-track-bd0b4.firebaseapp.com",
    projectId: "health-track-bd0b4",
    storageBucket: "health-track-bd0b4.appspot.com",
    messagingSenderId: "859942261690",
    appId: "1:859942261690:web:0d580936d9e9c11d484383",
    measurementId: "G-WMXEXMWQRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore (Database)
const db = getFirestore(app);

// Initialize Firebase Auth (optional)
const auth = getAuth(app);

export { db, auth };