import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {getDatabase, off, ref, set, get, onValue, onChildRemoved, onChildChanged, onChildAdded, update, remove, push} from 'firebase/database';
import moment from 'moment';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, signInWithPopup, signOut };
