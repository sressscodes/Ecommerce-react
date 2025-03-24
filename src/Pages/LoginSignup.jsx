import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <input type='password' placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an Accoumt <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By Continuining I agree to the Terms of Use & Privacy Policy</p>
        </div>
      </div>  
    </div>
  )
}

export default LoginSignup