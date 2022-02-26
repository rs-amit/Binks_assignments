import React, { useState } from 'react';
import "./Login.css";
import { useDispatch, useSelector } from 'react-redux';
import {LoginUser} from "../redux/Action/AuthAction"

function Login() {
  const [email, setEmail] = useState("Ankita@gmail.com")
  const [password, setPassword] = useState('Ankita')
  const dispatch = useDispatch()

  const LoginHandler = async (e) => {
    e.preventDefault()
    console.log('its working...')
    dispatch(LoginUser(email, password))
  }

  return (
    <div className='login'>
      <div className='login-wrap'>
        <h2>Sign-in</h2>
        <form className='login-Form' onSubmit={LoginHandler}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='agreement'>By Signing-in you agree to the BINDS condition to Use And Sale. Please See our Privacy Notice, our Cookies Notice and our interest- Based Ads Notice.</p>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login;