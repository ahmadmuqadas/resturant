import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import googleImg from '../Media/search.png';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';



export async function LoginAction({request}) {

  let formData = await request.formData();
const email = formData.get('email');
const password = formData.get('password');
const confirmPassword = formData.get('confirmPassword');

// console.log(password, confirmPassword);
if (password !== confirmPassword) {
  // console.log('password does not match');
} else {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(userCredential.user);
    return userCredential;
    
  } catch (error) {
console.log(error);
  }
}

return null;

}

function googlePopup () {
  const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
})

console.log('function is called');

}


const LogIn = (props) => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const handleToggle = () => {
    setIsCreateAccount((prev) => !prev);
  };



  return (
    <>
      <div className='login-wrapper'>
        <div className="auth">
          <p className='login-txt'>{isCreateAccount ? 'Create an Account' : 'Log in to Delicious'}</p>
          {/* Conditional rendering based on isCreateAccount */}
          {isCreateAccount ? (
            // Create Account Form
            <Form className='login-form signup' method='post'>
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
                autoComplete='current-password'
              />
              <input
                type="Confirm Your password"
                className='auth-input'
                placeholder='Confirm your Password'
                name='confirmPassword'
                autoComplete='current-password'
              
              />
              <button type='submit' className='login-btn'>
                Create Account
              </button>
              {/* {errors ? <pre>{errors.error.message}</pre> : null}
            {errors ? <h4>{errors.message}</h4> : null} */}
           
           

            
              <p className='notsign-txt'>Or Continue with:</p>
              <button type='button' className='google-btn' onClick={googlePopup}>Google</button>
              <p className='notsign-txt'>Already have an account?</p>
              <Link className='create-ac-txt' onClick={handleToggle}>
                Log in
              </Link>
            </Form>
          ) : (
            // Login Form
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
                autoComplete='current-password'
              />
              <button type='submit' className='login-btn'>
                Login
              </button>
              <p className='notsign-txt'>Or Continue with:</p>
              <button type='button' className='google-btn'>Google</button>
              <p className='notsign-txt'>Not Signed Up yet?</p>
              <Link className='create-ac-txt' onClick={handleToggle}>
                Create an Account
              </Link>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

export default LogIn;
