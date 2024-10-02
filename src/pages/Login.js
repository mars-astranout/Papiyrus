import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser, users }) => {
  // State for input fields and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Navigation hook to redirect
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if user exists in the list of users
    const user = users.find((user) => user.username === username && user.password === password);
    
    if (user) {
      setUser(user); // Set the logged-in user
      navigate('/'); // Redirect to the home page
    } else {
      setError('Invalid username or password'); // Set error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
