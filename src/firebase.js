// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
apiKey: "AIzaSyAGmT_iiEjwOsGiWkjPLNYqIC5SugoApIs",
authDomain: "car-website-4e946.firebaseapp.com",
projectId: "car-website-4e946",
storageBucket: "car-website-4e946.appspot.com",
messagingSenderId: "348943656791",
appId: "1:348943656791:web:f1d70ece9da7d24475c012",
measurementId: "G-FLM60923EQ"
};
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
