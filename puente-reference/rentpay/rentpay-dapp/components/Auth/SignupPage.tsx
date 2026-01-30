import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logic to handle signup request here
    console.log('Signup form submitted:', formData);
    setIsSubmitted(true);
    // Reset form data after submission
    setFormData({ email: '', password: '' });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {isSubmitted ? (
        <p>Thank you for signing up! Please check your email for verification.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={6} // Example minimum password length
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default SignupPage;
