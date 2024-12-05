import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBQsSTdWUz4Je7-BWbIgVL7qjMR7iFRy0g",
  authDomain: "demofirebase-7ed8e.firebaseapp.com",
  projectId: "demofirebase-7ed8e",
  storageBucket: "demofirebase-7ed8e.firebasestorage.app",
  messagingSenderId: "725026213043",
  appId: "1:725026213043:web:c1dff80fbb9cc7dadb74c6",
  measurementId: "G-HG8GZZ806G"
};

export const app = initializeApp(firebaseConfig); // using this app we can communication with our app
export const messaging = getMessaging(app);  // create messaging name variable
