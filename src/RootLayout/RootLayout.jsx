import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar/Navbar";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Footer from "../component/Footer/Footer";
export const valueConText = createContext();
const RootLayout = () => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
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

  const handleForgetPassword = (email)=>{
    console.log(email)
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
   
  }
  const contextValues = {
    handleLogin,
    handleSignUp,
    setUser,
    user,
    loading,
    handleLogOut,
    handleForgetPassword
  };

  useEffect(() => {
// 
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      
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
        <Footer></Footer>
      </valueConText.Provider>
    </div>
  );
};

export default RootLayout;
