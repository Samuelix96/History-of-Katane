import React, { useState } from 'react';
import '../components/style/forget.css';
import { useAddForgetPasswordMutation } from '../api/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [forgetPass] = useAddForgetPasswordMutation();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await forgetPass({ email });
      if (response.data.statusCode) {
        toast.success('Check your Email for Reset your Password', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEmail(''); // Reset email input
      } else {
        toast.error('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password', error);
      toast.error('Error sending email. Please try again.');
    }
  };

  return (
    <div className='forget-pass'>
      <div className="form-container">
        <div className="logo-container">Forgot Password</div>
        <form onSubmit={handleResetPassword} className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button className="form-submit-btn" type="submit">
            Send Email
          </button>
        </form>
        <p className="signup-link">
          Don't have an account?
          <a href="/registration" className="signup-link link"> Sign up now</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
