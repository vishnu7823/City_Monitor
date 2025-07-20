import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_yn3Gm9oaA-IxOSrzcQ_-p3sPY8PErhQ",
  authDomain: "city-monitor-f8ac1.firebaseapp.com",
  projectId: "city-monitor-f8ac1",
  storageBucket: "city-monitor-f8ac1.appspot.com",  
  messagingSenderId: "58442493270",
  appId: "1:58442493270:web:1a555ed2b7432d799bbaf7",
  measurementId: "G-FYWD85YQQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
