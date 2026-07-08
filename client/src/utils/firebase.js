
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-agent-ea11c.firebaseapp.com",
  projectId: "ai-agent-ea11c",
  storageBucket: "ai-agent-ea11c.firebasestorage.app",
  messagingSenderId: "864337697725",
  appId: "1:864337697725:web:1bafb4f4613682c34610d4",
  
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}