// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxR88mFiLzCHQhaHlG30Wbj2xDNjYnJgY",
  authDomain: "ticket-booking-4988a.firebaseapp.com",
  projectId: "ticket-booking-4988a",
  storageBucket: "ticket-booking-4988a.firebasestorage.app",
  messagingSenderId: "854220329356",
  appId: "1:854220329356:web:9230a20790590dfe20c6a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get reference to the service
const auth = getAuth(app)