import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANB6T94RD_5arK0t2RARH_YQ5hbwkRDWA",
  authDomain: "fir-chat-app-d3a3c.firebaseapp.com",
  projectId: "fir-chat-app-d3a3c",
  storageBucket: "fir-chat-app-d3a3c.appspot.com",
  messagingSenderId: "774138966129",
  appId: "1:774138966129:web:11da967f29a8543e5b2bd0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);