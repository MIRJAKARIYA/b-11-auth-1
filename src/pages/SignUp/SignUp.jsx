import React, { useContext } from "react";
import { NavLink } from "react-router";

import { valueConText } from "../../RootLayout/RootLayout";

const SignUp = () => {
    const {handleSignUp} = useContext(valueConText)

    const handleSubmit = (e) =>{
        e.preventDefault()
      
        const fullName = e.target.fullname.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmpassword = e.target.confirmpassword.value
        if(password.length <6){
            alert("Password must be equal or greater than 6")
            return;
        }
        if(password !== confirmpassword){
            alert("password and confirm password must be same")
            return
        }
        if(!/[a-z]/.test(password)){
            alert("password must contain at least one lower case letter")
            return
        }
        if(!/[A-Z]/.test(password)){
            alert("password must contain at least one upper case letter")
            return
        }
        if(!/\d/.test(password)){
            alert("password must contain at least one number")
            return
        }
        if(!/[$%^#@]/.test(password)){
            alert("password must contain one special character")
            return
        }


        handleSignUp(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
    
            alert("User sign up success")
            
          })

          .catch((error) => {
            
          
          });
      
        
    }
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md mx-auto sm:p-10 mt-[100px] bg-black text-white">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-600">Sign Up a new account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="confirmpassword" className="text-sm">
                Confirm Password
              </label>
            </div>
            <input
              type="text"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account?
            <NavLink
              to="/signin"
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-600"
            >
              Sign in
            </NavLink>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
