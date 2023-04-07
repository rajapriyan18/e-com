import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx8Fv6YEE9rWLp3Yk2RBTgqFYlhDiIfJQ",
  authDomain: "react-eshop-e2a68.firebaseapp.com",
  projectId: "react-eshop-e2a68",
  storageBucket: "react-eshop-e2a68.appspot.com",
  messagingSenderId: "170077411165",
  appId: "1:170077411165:web:305321b7effa7f2cf33ab4",
  measurementId: "G-GXQ22NBYEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
