//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPR_NnzssDAsX2tbGjPDdOF9mEOS280Kk",
  authDomain: "adsearn-8c09d.firebaseapp.com",
  projectId: "adsearn-8c09d",
  storageBucket: "adsearn-8c09d.firebasestorage.app",
  messagingSenderId: "788074481010",
  appId: "1:788074481010:web:07c4385fff775622b209eb",
  measurementId: "G-Y3DKTWFN0R",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app; 
