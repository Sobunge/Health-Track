// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the auth module
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBY1yTv8bzI2hFMgZZLMFv-AyrhNkEHdXU",
    authDomain: "health-track-c8dd1.firebaseapp.com",
    projectId: "health-track-c8dd1",
    storageBucket: "health-track-c8dd1.appspot.com",
    messagingSenderId: "792750270938",
    appId: "1:792750270938:web:3fb01a14c554123eeff8e3",
    measurementId: "G-4B43LHY91V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); // Export the auth object

export default app;
