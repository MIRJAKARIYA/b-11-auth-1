import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar/Navbar";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const valueConText = createContext();
const RootLayout = () => {
  const [user, setUser] = useState(null);
    console.log(user)
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  const contextValues = {
    handleLogin,
    handleSignUp,

    user,
    handleLogOut
  };

  useEffect(() => {
// 
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
   
        setUser(currentUser)
        // if (currentUser) {
        //   // User is signed in, see docs for a list of available properties
        //   // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = currentUser.uid;
        //   // ...
        // } else {
        //   // User is signed out
        //   // ...
        // }
      });

      return ()=>{
        unsubscribe()
      }
  
  },[]);
  return (
    <div>
      <valueConText.Provider value={contextValues}>
        <Navbar></Navbar>
        <Outlet />
      </valueConText.Provider>
    </div>
  );
};

export default RootLayout;
