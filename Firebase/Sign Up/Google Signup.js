// Google ( Register With Google )
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// Google SignUp Function
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"; // Adjust the path based on your file structure

function GoogleSignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}`);
      console.log("User signed in successfully:", user);
    } catch (error) {
      alert(error.message);
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

export default GoogleSignIn;


// Notes :-  //
// ### To Add Google Provider ###
// Step 1:
// - import GoogleAuthProvider and signInWithPopup
// - import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Step 2:
// - Create signInWithGoogle Function
// - add GoogleAuthProvider as Provider
// : const SignupWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       alert(`Welcome ${user.displayName}`);
//       console.log("User signed in successfully:", user);
//     } catch (error) {
//       alert(error.message);
//       console.error("Error signing in with Google:", error.message);
//     }
//   };

// - give button onClick call
//   <Button onClick={SignupWithGoogle} variant="light" className="border border-rounded">