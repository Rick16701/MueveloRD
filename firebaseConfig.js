// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaTmSPkDqF9-oFuHUeQatbBMpYyGcfS4s",
  authDomain: "muevelord16701.firebaseapp.com",
  projectId: "muevelord16701",
  storageBucket: "muevelord16701.appspot.com",
  messagingSenderId: "628554389947",
  appId: "1:628554389947:web:24dfdf82a3ffa280ed4c9e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
