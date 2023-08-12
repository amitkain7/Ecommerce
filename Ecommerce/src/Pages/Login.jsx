import React from 'react'

function Login() {
  return (
    <div className='login-page'>
        <div className='login_wrapper'>
            <h1>SIGN IN</h1>
            <form >
                <input type="text" placeholder='username' />
                <input type="text" placeholder='password' />
                <button className='login-btn'>LOGIN</button>
                <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
                <a href="">CREATE A NEW ACCOUNT</a>
            </form>
        </div>
    </div>
  )
}

export default Login