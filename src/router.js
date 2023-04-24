import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';
import Dashboard from './pages/dashboard/dashboard'; 
import ProtectedRoute from './routes/protectedroute';
import AuthRoute from './routes/authroute';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<AuthRoute><Signin/></AuthRoute>}/>
        <Route  path='/Signup' element={<AuthRoute><Signup/></AuthRoute>}/>
        <Route  path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router