// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbgTDgTGvW-oamuQcP0sFMgGVXrlUSbjE",
    authDomain: "ema-john-simple-b5555.firebaseapp.com",
    projectId: "ema-john-simple-b5555",
    storageBucket: "ema-john-simple-b5555.appspot.com",
    messagingSenderId: "1438148287",
    appId: "1:1438148287:web:f6c382b3b77d542540c80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;