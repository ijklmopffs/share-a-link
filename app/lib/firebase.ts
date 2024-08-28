import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDz7ovAi4F3SJxOvo5Tb7ZueyP755H161w",
  authDomain: "devlinks-622c1.firebaseapp.com",
  projectId: "devlinks-622c1",
  storageBucket: "devlinks-622c1.appspot.com",
  messagingSenderId: "791385740709",
  appId: "1:791385740709:web:d081d42cd5c5326c3c444c",
  measurementId: "G-NYHV7P1NHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
