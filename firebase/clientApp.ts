import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseIn = firebase;

const clientCredenetials = {
  apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectid: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appid: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (firebaseIn.getApps.length === 0) {
  firebaseIn.initializeApp(clientCredenetials);
}

export default firebaseIn;
