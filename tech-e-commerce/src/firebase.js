import firebase from '@firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyABue-cwLPZmoBf3dlNbLEqXlY9kY1bsdg",
  authDomain: "test-abc-c5d3d.firebaseapp.com",
  projectId: "test-abc-c5d3d",
  storageBucket: "test-abc-c5d3d.appspot.com",
  messagingSenderId: "434493635411",
  appId: "1:434493635411:web:4197a7daaf502819d03fa6",
  measurementId: "G-Y39RWQY71B"
};


const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}