import React from 'react'

function Register() {
  return (
    <div className='Resister-page'>
        <div className='Wrapper'>
        <h1>CREATE AN ACCOUNT</h1>
      <form >
        <input type="text" placeholder='name'/>
        <input type="text" placeholder='last name' />
        <input type="text" placeholder='username' />
        <input type="text" placeholder='email' />
        <input type="text" placeholder='password' />
        <input type="text" placeholder='confirm password' />
        <span className='Agreement'>
        By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
        </span>
        <button className='create'> CREATE</button>
        </form>    
        </div>
    </div>
  )
}

export default Register