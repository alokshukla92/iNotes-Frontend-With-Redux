// src/pages/LoginPage.js
import Login from '../components/Auth/Login';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {

  const authObj = useContext(AuthContext);
    console.log("User",authObj);
//  children : <Navigate to="/login" />;

 
  return !authObj.user ? (
    
    <div>
      <h2>Login</h2>
      <Login />
    </div>
  ) : <Navigate to="/" />;
};

export default LoginPage;
