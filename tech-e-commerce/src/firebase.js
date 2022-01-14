// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvMKmVBGQEr77x6z6EEVI1ysRxm1f8arc",
  authDomain: "vue-tech-e-commerce.firebaseapp.com",
  projectId: "vue-tech-e-commerce",
  storageBucket: "vue-tech-e-commerce.appspot.com",
  messagingSenderId: "534580257919",
  appId: "1:534580257919:web:01379e779294e0a66dcb4a",
  measurementId: "G-GHXW4DPZ45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);