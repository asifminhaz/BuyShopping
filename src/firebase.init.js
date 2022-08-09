// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8KktW1NQk8fvVD1fZASOCMBjDiDDKm_s",
  authDomain: "task-authentication-98caf.firebaseapp.com",
  projectId: "task-authentication-98caf",
  storageBucket: "task-authentication-98caf.appspot.com",
  messagingSenderId: "740412643170",
  appId: "1:740412643170:web:1d9211dbe381d554bd7e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth