// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXaEtJtEXbIPWbJ6jfGpXqw8gYDMpXKHQ",
  authDomain: "myfirstproj-9494e.firebaseapp.com",
  databaseURL: "https://myfirstproj-9494e-default-rtdb.firebaseio.com",
  projectId: "myfirstproj-9494e",
  storageBucket: "myfirstproj-9494e.appspot.com",
  messagingSenderId: "90415027958",
  appId: "1:90415027958:web:2b855a2c6377e359797ed7",
  measurementId: "G-7QHCDZ3GWE"
};

// Initialize Firebase
const initfirebase = app.initializeApp(firebaseConfig);
export default initfirebase;
export const provider = new GoogleAuthProvider(initfirebase);
export const auth = getAuth(initfirebase);
