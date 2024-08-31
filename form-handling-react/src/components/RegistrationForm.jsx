import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value="username"
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value="email"
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value="password"
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
