// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYbly4tO7LntHuN6ufwY4cwSlFon3kBbQ",
  authDomain: "fir-project-df7b7.firebaseapp.com",
  projectId: "fir-project-df7b7",
  storageBucket: "fir-project-df7b7.appspot.com",
  messagingSenderId: "507428210688",
  appId: "1:507428210688:web:319e747308938305f830e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;