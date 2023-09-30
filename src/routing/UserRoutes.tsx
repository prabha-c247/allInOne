// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pageRoutes
import { HOME_PAGE, ADD_USER, EDIT_USER, SIGN_UP, LOGIN } from '../common/helpers/PageRoutes';
//components
import Home from '../components/pages/home/Home';
import AddUser from '../components/pages/adduser/AddUser';
import EditUser from '../components/pages/edituser/EditUser';
import SignUp from '../components/authentication/SignUp';
import Login from '../components/authentication/Login';
import Protected from '../components/authentication/Protected';
import Header from '../components/pages/header/Header';
// import Navbar from '../components/authentication/Navbar';
 
export const UserRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>         
          <Route path={HOME_PAGE} element={<Protected><Home /></Protected>} />
          <Route path={ADD_USER} element={<Protected><AddUser /></Protected>} />
          <Route path={`${EDIT_USER}/:id`} element={<Protected><EditUser /></Protected>} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>  
    </>
  );
};



