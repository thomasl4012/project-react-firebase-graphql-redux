import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyshU_J71SLeHcYBrio0-iWIyKqx-0-GQ",
  authDomain: "ecom-project-8c392.firebaseapp.com",
  databaseURL: "https://ecom-project-8c392-default-rtdb.firebaseio.com/",
  projectId: "ecom-project-8c392",
  storageBucket: "ecom-project-8c392.appspot.com",
  messagingSenderId: "464847519787",
  appId: "1:464847519787:web:6f40b3c937f800dae02a6e",
  measurementId: "G-6GR160WZYJ",
};

export const createUserProfilDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error ==>", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
