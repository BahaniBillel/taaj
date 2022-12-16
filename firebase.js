import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDehIOEKozlaHKw-88dTN4ceEQFcMyOa0Y",
  authDomain: "taaj-913e0.firebaseapp.com",
  projectId: "taaj-913e0",
  storageBucket: "taaj-913e0.appspot.com",
  messagingSenderId: "1095855053655",
  appId: "1:1095855053655:web:0c6228577ad391411efc12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
