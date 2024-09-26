// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhyBGemRfASI5OqIK-QmEr0GSRhiJLL94",
  authDomain: "ecom-app-833a8.firebaseapp.com",
  projectId: "ecom-app-833a8",
  storageBucket: "ecom-app-833a8.appspot.com",
  messagingSenderId: "532115524211",
  appId: "1:532115524211:web:cd64725b2732cbe3d0f806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}