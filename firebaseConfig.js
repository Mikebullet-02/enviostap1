// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTd9riOM7Lbji1mBvHDQuydmNMrWFSj3g",
  authDomain: "precios-envios-odm.firebaseapp.com",
  databaseURL: "https://precios-envios-odm-default-rtdb.firebaseio.com",
  projectId: "precios-envios-odm",
  storageBucket: "precios-envios-odm.appspot.com",
  messagingSenderId: "802208494147",
  appId: "1:802208494147:web:fee055c13df4aef4045af6",
  measurementId: "G-LTMJMJLXRQ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics(app);
export { auth, db, analytics };
