import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAYxW9KZfDWWFoJDqdBa5-HxQsfqmnOAEQ",
  authDomain: "symbolic-datum-225614.firebaseapp.com",
  projectId: "symbolic-datum-225614",
  storageBucket: "symbolic-datum-225614.appspot.com",
  messagingSenderId: "239782269190",
  appId: "1:239782269190:web:532d1629b2dec6d7990e87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app)

export { db, auth }
