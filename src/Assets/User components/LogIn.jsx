import React, { useState } from 'react';
import { auth } from '../../FirebaseConfig';
import { Link } from 'react-router-dom';
import googleImg from '../Media/search.png';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in 
        console.log('signed successd');
        // Do something with the signed-in user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // Handle the error, e.g., show an error message to the user
      });
  };

  return (
    <div className='login-wrapper'>
      <div className="auth">
        <p className='login-txt'>Log in to Delicious</p>
        <form onSubmit={handleSignIn} className='login-form'>
          <input
            type="text"
            className='auth-input'
            placeholder='Enter your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className='auth-input'
            placeholder='Enter your Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <button type='submit' className='login-btn'>Login</button>
          <p>Or Continue with:</p>
          <button type='button' className='google-btn'><img src={googleImg} className='google-icon' alt="" />Google</button>
          <p className='notsign-txt'>Not Signed Up yet?</p>
          <Link className='create-ac-txt'>Create an Account</Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
