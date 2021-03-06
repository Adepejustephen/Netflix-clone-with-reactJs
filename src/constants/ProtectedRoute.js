import React from 'react'
import { Navigate } from "react-router-dom";
import { useUserAuth } from '../contexts/firebaseContext';
import * as ROUTES from './routes'



const ProtectedRoute = ({ children }) => {
    let {user}  = useUserAuth();
    
    
    if (!user) {
        return <Navigate to={ROUTES.HOME} />;
    }


    return children;
}

export default ProtectedRoute



