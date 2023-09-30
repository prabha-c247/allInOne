import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE, LOGIN } from '../../common/helpers/PageRoutes';

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }:ProtectedProps) => {
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem('loginuser');

  useEffect(() => {
    !isUserLoggedIn?navigate(LOGIN):navigate(HOME_PAGE);
  }, [navigate,isUserLoggedIn]);

  return <>{children}</>;
};

export default Protected;
