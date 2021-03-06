import React from 'react'
import './Login.css'

const Login = props => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props

  return (
    <section className='login'>
      <div className='login-container'>
        {hasAccount ? (
          <>
            <h2 className='if-signin'>Sign in</h2>
          </>
        ) : (
          <> <h2 className='if-signup'>Sign up</h2> </>
        )}
        <label>Username</label>
        <input
          type='text'
          autoFocus
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p className='errorMsg'>{emailError}</p>
        <label>Password</label>
        <input
          type='password'
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <p className='errorMsg'>{passwordError}</p>
        <div className='btn-container'>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Login
