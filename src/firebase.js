// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5imiT18dZBwfSTUTT9q_7ci1I-_n_wSM",
    authDomain: "expensetracker-5382e.firebaseapp.com",
    projectId: "expensetracker-5382e",
    storageBucket: "expensetracker-5382e.appspot.com",
    messagingSenderId: "87892451245",
    appId: "1:87892451245:web:a2235c434b26e23a474b24",
    measurementId: "G-6N7YB6GVP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);


export { app,auth,db , provider};
