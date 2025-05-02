import React, { useContext } from 'react';
import About from '../../pages/About/About';
import { valueConText } from '../../RootLayout/RootLayout';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    
  const {user,loading} = useContext(valueConText)
  const location = useLocation()

  if(loading){
    return <div>loading....</div>
  }



  if(!user || !user?.email){
    return <Navigate state={{from:location.pathname}} to="/signin"></Navigate>
  }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;