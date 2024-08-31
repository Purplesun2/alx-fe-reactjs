import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Add form submission logic here
      console.log('Form submitted:', { username, email, password });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
