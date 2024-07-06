import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnpdzg4hyaSwILUWG-jttP6oOLs5OWU3c",
  authDomain: "sistema-opombo.firebaseapp.com",
  projectId: "sistema-opombo",
  storageBucket: "sistema-opombo.appspot.com",
  messagingSenderId: "878372441390",
  appId: "1:878372441390:web:b2698c0f9bfe36781afebf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage}