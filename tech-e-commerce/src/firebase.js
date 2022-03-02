import firebase from '@firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDg7Wkv6ecXlEY1eB7fw6QRqSvGa-J3tYY",
  authDomain: "tech-e-commerce2-b46fb.firebaseapp.com",
  projectId: "tech-e-commerce2-b46fb",
  storageBucket: "tech-e-commerce2-b46fb.appspot.com",
  messagingSenderId: "608689355086",
  appId: "1:608689355086:web:4dcdcf3fe5cf7e3f8c061f",
  measurementId: "G-N2ZGRRZYZY"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}