import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCS3eTZP6GK0VZVoF1ZhR0__gIqZiTfe8g",
  authDomain: "vue-tech-e-commerce-3b435.firebaseapp.com",
  projectId: "vue-tech-e-commerce-3b435",
  storageBucket: "vue-tech-e-commerce-3b435.appspot.com",
  messagingSenderId: "393942536139",
  appId: "1:393942536139:web:8032e329425a4c9c20704e",
  measurementId: "G-EENJGT2ZXD"
};

export const fb = firebase.initializeApp(firebaseConfig);