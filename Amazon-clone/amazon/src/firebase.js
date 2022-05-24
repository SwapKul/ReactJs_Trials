// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsv9TDp_y7eXhzKuKDf-vHAVQMTJp0qXI",
  authDomain: "clone-13ad7.firebaseapp.com",
  projectId: "clone-13ad7",
  storageBucket: "clone-13ad7.appspot.com",
  messagingSenderId: "1066531944295",
  appId: "1:1066531944295:web:28cd1172859e0c0f00a1c2",
  measurementId: "G-KRNFM1M15F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);