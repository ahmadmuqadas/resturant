import React from 'react'
import { Form } from 'react-router-dom'



export async function action ({request}) {

  console.log(request);
  const data = await request.formData();

  const formSubmission = {
    email: data.get('email'),
    password: data.get('password'),

  }

  console.log(formSubmission);
  return formSubmission

}


const AdminLogin = () => {



  return (
    <div>
        <Form method='post'>
          <input type="text"
          placeholder='Enter email or User ID'
          name='email'
          autoComplete='username'
         
          />

          <input type="password"
          placeholder='Enter Password'
          name='password'
          autoComplete='current-password'
          />
                  <button>Log In</button>
        </Form>

        
    </div>
  )
}

export default AdminLogin