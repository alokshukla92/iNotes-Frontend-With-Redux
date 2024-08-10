// src/pages/LoginPage.js
import Login from '../components/Auth/Login';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const authObj = useContext(AuthContext);
  return !authObj.user ? (
    
    <div className='container my-3'>
      <h2 className='text-center my-3'>Login To Continue</h2>
      <Login />
    </div>
  ) : <Navigate to="/" />;
};

export default LoginPage;
