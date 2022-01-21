import firebase from '@firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDhHPXrIEMn9cxrunmdQ1ofIa14ik9RxuU",
  authDomain: "tech-e-commerce-f5a2b.firebaseapp.com",
  projectId: "tech-e-commerce-f5a2b",
  storageBucket: "tech-e-commerce-f5a2b.appspot.com",
  messagingSenderId: "150959269760",
  appId: "1:150959269760:web:d7d693e94aa4a140fe8365",
  measurementId: "G-QM9P80ZL6E"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}