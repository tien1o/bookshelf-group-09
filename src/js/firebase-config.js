
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEF0apjyCh1G1hlF9ORToGMydcTPh60_Q",
  authDomain: "testbook-e88dc.firebaseapp.com",
  databaseURL: "https://testbook-e88dc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testbook-e88dc",
  storageBucket: "testbook-e88dc.appspot.com",
  messagingSenderId: "45728032180",
  appId: "1:45728032180:web:c085fe110452f52a747ee1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);