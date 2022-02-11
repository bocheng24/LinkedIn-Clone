import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../db'
import { createUserWithEmailAndPassword } from "firebase/auth";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

import fullLogo from '../../static/imgs/Linkedin-Logo-2011-2019.png'
import './auth.css'

import { validInput } from '../utils' 

function Signup() {

    console.log(auth)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const [emailValid, setEmailValid] = useState(true)
    const [usernameValid, setUsernameValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)
    const [confPasswordValid, setConfPasswordValid] = useState(true)

    let navigate = useNavigate();
  
    const signIn = () => {
        navigate('/signin');
    }
    
    const signUpApp = e => {
        
        e.preventDefault()

        if (email && username && password && confPassword && password === confPassword) {
            console.log('Form valid')
        } 
        else {
            console.log('Form invalid')
            setEmailValid(false)
            setUsernameValid(false)
            setPasswordValid(false)
            setConfPasswordValid(false)
        }

    }
  
    return (

      <div className='auth-body'>
          <div className="auth-container">
              <img className="full-logo" src={ fullLogo } alt="full logo" />
              <h2>Create Account</h2>
              <h4>Stay updated on your professional world</h4>

              <form onSubmit={ signUpApp } className="main-form">
                  <div className="text-field">
                      <TextField
                          error={ !emailValid }
                          id="email"
                        //   required
                          label="Email"
                          fullWidth
                          type="email"
                          onChange={ e => {
                              setEmail(e.target.value)
                              setEmailValid(e.target.value.length > 0)
                            } 
                          }
                          value={ email }
                      />
                  </div>
                  
                  <div className="text-field">
                      <TextField
                          error={ !usernameValid }
                        //   required
                          label="Username"
                          fullWidth
                          onChange={ e => { 
                              setUsername(e.target.value) 
                              setUsernameValid(e.target.value.length > 0)
                            }
                          }
                          value={ username }
                      />
                  </div>
  
                  <div className="text-field">
                      <TextField
                          error={ !passwordValid }
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                          fullWidth
                        //   required
                          onChange={ e => {
                              setPassword(e.target.value)
                              setPasswordValid(e.target.value.length > 0)
                            } 
                          }
                          value={ password }
                      />
                  </div>

                  <div className="text-field">
                      <TextField
                          error={ !confPasswordValid }
                          label="Confirm Password"
                          type="password"
                          autoComplete="current-password"
                          fullWidth
                        //   required
                          onChange={ e => {
                              setConfPassword(e.target.value)
                              setConfPasswordValid(e.target.value.length > 0 && e.target.value === password)
                            } 
                          }
                          value={ confPassword }
                      />
                  </div>
  
                  <Button variant='contained' 
                          fullWidth 
                          size='large'
                        //   onClick={ signUpApp }
                          color="secondary"
                          type='submit'
                  >
                      Sign Up
                  </Button>
              </form>
              <div className="sign-up-box">
                  <p>Already a member? Click to <span onClick={ signIn }>Sign In</span></p>
              </div>
          </div>
      </div>

    ) ;
}

export default Signup
