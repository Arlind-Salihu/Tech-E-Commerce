import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALu0a3zv28OzbUT4-JehbkJP0j2Fx7g3Q",
  authDomain: "tech-e-commerce.firebaseapp.com",
  projectId: "tech-e-commerce",
  storageBucket: "tech-e-commerce.appspot.com",
  messagingSenderId: "1039381493464",
  appId: "1:1039381493464:web:b27f2f206f4d4128d649ad",
  measurementId: "G-71R6QTL2L7"
};

export const fb = firebase.initializeApp(firebaseConfig);