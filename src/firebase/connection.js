/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlrNWu0u7HgIszQ96k8VebhHijdZg5d8g",
  authDomain: "pizzaria-773c6.firebaseapp.com",
  projectId: "pizzaria-773c6",
  storageBucket: "pizzaria-773c6.firebasestorage.app",
  messagingSenderId: "203658947034",
  appId: "1:203658947034:web:ebfc0ab065f663050d38e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db};