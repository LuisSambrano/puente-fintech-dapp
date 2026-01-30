import React, { useState } from 'react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logic to handle password reset request here
    console.log('Password reset request submitted for email:', email);
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {isSubmitted ? (
        <p>Password reset instructions have been sent to your email.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPasswordPage;
