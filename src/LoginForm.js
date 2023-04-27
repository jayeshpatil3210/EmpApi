import React, { useState } from 'react';

const LoginForm = () => {
  const [login, setLogin] = useState(true);
  const [fname, setfname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginClick = () => {
    setLogin(true);
  };

  const handleRegisterClick = () => {
    setLogin(false);
  };

  const handlefnameChange = (event) => {
    setfname(event.target.value);
  };


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log('usrname ' +event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login) {
      // Handle login logic
      console.log('Logging in...');
    } else {
      // Handle registration logic
      console.log('Registering...' +event.target.value);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-toggle">
        <button className={login ? 'active' : ''} onClick={handleLoginClick}>Login</button>
        <button className={!login ? 'active' : ''} onClick={handleRegisterClick}>Register</button>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        {!login && (
            <>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <input type="text" placeholder="email" value={fname} onChange={handleUsernameChange} />
          <input type="text" placeholder="Mobile no." value={fname} onChange={handleUsernameChange} />
          <input type="text" placeholder="zipcode" value={fname} onChange={handleUsernameChange} />
           </>
        )}
         
        <button type="submit">{login ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
}

export default LoginForm;
