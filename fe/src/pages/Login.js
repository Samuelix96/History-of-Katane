import React from 'react'
import "../components/style/login.css"
const Login = () =>
{
  return (
    <div className='login_container'>
        <div className="overlay">
      <form className='form_login'>

        <div className="con">

          <header className="head-form header_login">
            <h2>Log In</h2>

            <p>login here using your username and password</p>
          </header>

          <br />
          <div className="field-set">


            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>

            <input className="form-input" id="txt-input" type="text" placeholder="@UserName" required />

            <br />
            <span className="input-item">
              <i className="fa fa-key"></i>
            </span>

            <input className="form-input" type="password" placeholder="Password" id="pwd" name="password" required />


            <span>
              <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
            </span>


            <br />


            <button className="log-in button_login"> Log In </button>
          </div>


          <div className="other">

            <button className="btn submits frgt-pass button_login">Forgot Password</button>

            <button className="btn submits sign-up button_login">Sign Up

              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </button>

          </div>


        </div>


      </form>
    </div>
    </div>
    
  )
}

export default Login
