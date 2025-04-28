
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAceLqCKxcTy01MuPKcrJZBcmDfKYrbM0g",
  authDomain: "my-auth-practice-project.firebaseapp.com",
  projectId: "my-auth-practice-project",
  storageBucket: "my-auth-practice-project.firebasestorage.app",
  messagingSenderId: "42514132359",
  appId: "1:42514132359:web:3eabdd2995d9dcfeed3722"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)