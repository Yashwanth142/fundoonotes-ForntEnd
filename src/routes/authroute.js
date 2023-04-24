import React from 'react'
import { Navigate } from "react-router-dom";

function AuthRoute({children}) {
    if(!localStorage.getItem('token')){
        console.log(children)
        return children
     }else{
        return <Navigate to="/Dashboard" replace={true} />
     }
}

export default AuthRoute