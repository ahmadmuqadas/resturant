import React, { useState } from 'react';
import { auth } from '../../FirebaseConfig';
import { Link } from 'react-router-dom';
import googleImg from '../Media/search.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from 'react-router-dom';


export async function action({request}) {


  console.log('just something');

  const data = await request.formData();


  

  const submission = {
    email: data.get("email"),
    email: data.get("password"),
  }

  console.log(submission);
  return submission

}

const LogIn = () => {


  return (
    <div className='login-wrapper'>
      <div className="auth">
        <p className='login-txt'>Log in to Delicious</p>
        <Form className='login-form'>
          <input
            type="text"
            className='auth-input'
            placeholder='Enter your Email'
            name='email'
            
            
          />
          <input
            type="password"
            className='auth-input'
            placeholder='Enter your Password'
            name='password'
            
            
          />
          <button type='submit' className='login-btn'>Login</button>
          <p>Or Continue with:</p>
          <button type='button' className='google-btn'><img src={googleImg} className='google-icon' alt="" />Google</button>
          <p className='notsign-txt'>Not Signed Up yet?</p>
          <Link className='create-ac-txt'>Create an Account</Link>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;
