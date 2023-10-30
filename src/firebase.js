import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDL1epodXsamGEBTcKc82uKfAQ9FB0504",
  authDomain: "blog-ae0a7.firebaseapp.com",
  projectId: "blog-ae0a7",
  storageBucket: "blog-ae0a7.appspot.com",
  messagingSenderId: "771266943825",
  appId: "1:771266943825:web:0ba644e25c3eda428e9170"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
