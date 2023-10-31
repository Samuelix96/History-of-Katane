import React from 'react'
import "../components/style/login.css"
const Login = () =>
{
  return (
    <div className='login_container'>
        <div class="overlay">
      <form className='form_login'>

        <div class="con">

          <header class="head-form header_login">
            <h2>Log In</h2>

            <p>login here using your username and password</p>
          </header>

          <br />
          <div class="field-set">


            <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span>

            <input class="form-input" id="txt-input" type="text" placeholder="@UserName" required />

            <br />
            <span class="input-item">
              <i class="fa fa-key"></i>
            </span>

            <input class="form-input" type="password" placeholder="Password" id="pwd" name="password" required />


            <span>
              <i class="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
            </span>


            <br />


            <button class="log-in button_login"> Log In </button>
          </div>


          <div class="other">

            <button class="btn submits frgt-pass button_login">Forgot Password</button>

            <button class="btn submits sign-up button_login">Sign Up

              <i class="fa fa-user-plus" aria-hidden="true"></i>
            </button>

          </div>


        </div>


      </form>
    </div>
    </div>
    
  )
}

export default Login
