// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7wSJ-YA9c2d7ounT8wY0wdNgSqTykhzc",
  authDomain: "latihan-dts-ingga.firebaseapp.com",
  projectId: "latihan-dts-ingga",
  storageBucket: "latihan-dts-ingga.appspot.com",
  messagingSenderId: "808174473302",
  appId: "1:808174473302:web:912b0cab4fa83743aa6bf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// create user with email and password
const registerWithEmailAndPassword = async (email, password) => {
  // user otomatis sign in oleh firebase
  try {
    const getUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user yang tergis dan berhasil login adalah", getUser.user);
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
};

// login
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    console.log("user yang berhasil login adalah", userLogin.user);
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
};

// logout
const logout = async () => {
  try {
    const logout = await signOut(auth);
    console.log("user berhasil logout", logout);
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
};
