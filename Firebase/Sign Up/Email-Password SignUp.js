// Notes at Below 
// Sign Up (Register) With Email & Password 

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

// Signup.js or App.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Adjust the path based on your file structure

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed up successfully!");
      console.log(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // set at Target
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // set at Target
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;


// // Notes
// ## 1. Login with Email & Password (Sign-Up)
//  Steps: (work on Login Page import in Login Page)
//     - 1. create auth instance :
//           import { getAuth } from "firebase/auth";
//           const auth = getAuth(app);
//     - 2. create Sign-up user function
//          import function createUserWithEmailAndPassword
//          import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // Sign Demo File
// import { app } from "./firebase"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth(app);

// function Demo() {

//   const signupUser = ( ) => {
//     createUserWithEmailAndPassword(
//       auth,
//       "umeshkotwal7@gmail.com",
//       'Umesh@123'
//     ).then((value) => console.log(value));
//   }
//   return (
//     <>
//       <h1>Hello I am Demo</h1>
//       <button onClick={signupUser}>Sign-in user</button>

//     </>
//   )
// }

// export default Demo;
