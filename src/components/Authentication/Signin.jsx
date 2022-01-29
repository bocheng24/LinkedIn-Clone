import React from 'react';
import './auth.css'
import fullLogo from '../../static/imgs/Linkedin-Logo-2011-2019.png'
import { auth } from '../../db'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function Signin() {
  console.log(auth)
  return (
    <div className='auth-body'>
        <div className="auth-container">
            <img className="full-logo" src={ fullLogo } alt="full logo" />
            <h2>Sign in</h2>
            <h4>Stay updated on your professional world</h4>
            <form className="main-form">
                <div className="text-field">
                    <TextField
                        required
                        id="outlined-required"
                        label="Username or email"
                        fullWidth
                    />
                </div>

                <div className="text-field">
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                    />
                </div>

                <Button variant='contained' fullWidth size='large'>Sign In</Button>
            </form>
        </div>
    </div>
  ) ;
}

export default Signin;
