import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnpdzg4hyaSwILUWG-jttP6oOLs5OWU3c",
  authDomain: "sistema-opombo.firebaseapp.com",
  projectId: "sistema-opombo",
  storageBucket: "sistema-opombo.appspot.com",
  messagingSenderId: "878372441390",
  appId: "1:878372441390:web:b2698c0f9bfe36781afebf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)