// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvH9LgrwaEyxV9Y07Z6sKTePSFZKKDacE",
  authDomain: "adima-ai-8dcb1.firebaseapp.com",
  projectId: "adima-ai-8dcb1",
  storageBucket: "adima-ai-8dcb1.firebasestorage.app",
  messagingSenderId: "1013216053455",
  appId: "1:1013216053455:web:cc7f3300eb5f22971d4fba",
  measurementId: "G-RYZPBRQ9BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
