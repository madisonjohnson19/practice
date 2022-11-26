import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignIn.css';
import Button, { ButtonProps }  from '@mui/material/Button';


async function loginUser(credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label >
          <p className='userName'>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className='userName'>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div  >
        <Button 
        type="submit"
             style={{
              color:"#fff",
              width:"250px",
              borderColor: 'white',
              backgroundColor: "#3E3E42",
              padding: "8px 26px",
              fontSize: "18px",
              marginTop: "20px"
            
          }}
            >
                Sign In
            </Button>
            </div>
                  <Button 
                  style={{
                    color:"#fff",
                    width:"250px",
                    borderColor: 'white',
                    backgroundColor: "#5286db",
                    // padding: "8px 26px",
                    fontSize: "18px",
                    marginTop: "20px"
                  
                }}
                  href='/signUp'>Create an Account</Button>

          
        

      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};