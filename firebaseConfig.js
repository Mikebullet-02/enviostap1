// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
import {
  getFirestore
} from "firebase/firestore/lite";
import {
  getAuth
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9Fbzm0Xyvpl-Pl2IuZgOKVo9jwdis-PQ",
  authDomain: "precios-envios-tap.firebaseapp.com",
  databaseURL: "https://precios-envios-odm-default-rtdb.firebaseio.com",
  projectId: "precios-envios-tap",
  storageBucket: "precios-envios-tap.appspot.com",
  messagingSenderId: "223765647850",
  appId: "1:223765647850:web:48124cdec405738e692293",
  measurementId: "G-Y354XW737F",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics(app);
export {
  auth,
  db,
  analytics
};