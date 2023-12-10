
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCMQSmzBlrKtgxqXdDed63O_lEoHlCGAKY",
  authDomain: "myguide-a30b8.firebaseapp.com",
  projectId: "myguide-a30b8",
  storageBucket: "myguide-a30b8.appspot.com",
  messagingSenderId: "913072085449",
  appId: "1:913072085449:web:1d8e4269173919fd8cf018",
  measurementId: "G-MX19KCBH3F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);