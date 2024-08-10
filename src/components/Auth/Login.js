// src/components/Auth/Login.js
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log(response);
      
      login(response.data.authtoken);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div className='container my-3'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input
  //       type="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //       placeholder="Email"
  //       required
  //     />
  //     <input
  //       type="password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //       placeholder="Password"
  //       required
  //     />
  //     <button type="submit">Login</button>
  //   </form>
  // );
};

export default Login;
