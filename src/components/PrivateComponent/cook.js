import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserData } from '../../services/storage';

const CookPrivatePage = () => {
  const loginStatus = (getUserData()[1] !== null) && ((getUserData()[2] === 'cook') || (getUserData()[2] === 'admin'));
  return loginStatus ? (
    <Outlet />
  ) : (< Navigate to ='/' replace/>
  )
};

export default CookPrivatePage;
