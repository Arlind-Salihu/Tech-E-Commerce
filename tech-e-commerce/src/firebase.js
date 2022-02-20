import firebase from '@firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA-5Vj73dZd_TjPNpvTJjiEnI5JfNJ3AFY",
  authDomain: "tech-e-commerce-9ae2b.firebaseapp.com",
  projectId: "tech-e-commerce-9ae2b",
  storageBucket: "tech-e-commerce-9ae2b.appspot.com",
  messagingSenderId: "1092895869531",
  appId: "1:1092895869531:web:4356ec67a251dcbf304d7e",
  measurementId: "G-QE26BZ1CL9"
};


const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}