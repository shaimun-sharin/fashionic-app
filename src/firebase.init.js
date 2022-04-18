// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuc4LMLhoEIDMYdamV8oj7SMJOl01119s",
  authDomain: "fashionic-app.firebaseapp.com",
  projectId: "fashionic-app",
  storageBucket: "fashionic-app.appspot.com",
  messagingSenderId: "504877892276",
  appId: "1:504877892276:web:ebd7fd3920db31f3a8cde1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
