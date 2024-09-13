// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from"firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChGln8eCjS9O6A1cV4oS1A0swrISIsH0w",
  authDomain: "fir-28961.firebaseapp.com",
  projectId: "fir-28961",
  storageBucket: "fir-28961.appspot.com",
  messagingSenderId: "1064810708935",
  appId: "1:1064810708935:web:608d086cbf4559ca7023e2",
  measurementId: "G-PLH972VGX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export{db}