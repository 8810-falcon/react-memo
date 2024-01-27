import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR2AtLs6gnd7TEW5H6ytbLy5oZojmCDmo",
  authDomain: "react-memo-53c20.firebaseapp.com",
  projectId: "react-memo-53c20",
  storageBucket: "react-memo-53c20.appspot.com",
  messagingSenderId: "588051740538",
  appId: "1:588051740538:web:4cf599106f3334e68788c3",
  measurementId: "G-S51TTGM6B0",
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export default app;
