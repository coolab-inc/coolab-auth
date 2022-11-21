// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfwvFyZ9K0BBRd97_Q2GxZtbQCLnTbwUs",
  authDomain: "coolab-55229.firebaseapp.com",
  projectId: "coolab-55229",
  storageBucket: "coolab-55229.appspot.com",
  messagingSenderId: "180573893817",
  appId: "1:180573893817:web:4611e4d583b7e6ccebd768",
  measurementId: "G-NDSWHFSR2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);