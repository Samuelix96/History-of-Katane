import React, { useState, useEffect } from 'react'
import "../components/style/login.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";



const Login = () =>
{
  const [ loginData, setLoginData ] = useState({})
  const [ error, setError ] = useState(null)
  const navigate = useNavigate();

  const handleInputChange = (e) =>
  {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [ name ]: value,
    })
  }
  console.log(loginData)


  const onSubmit = async (e) =>
  {
    e.preventDefault();
    try
    {
      const response = await fetch(`${ process.env.REACT_APP_SERVER_URL }/login`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(loginData)
      });
      const data = await response.json();

      if (data.token)
      {
        setLoginData(data)
        localStorage.setItem("token", JSON.stringify(data.token))

        const token = data.token;
        const decodedToken = jwtDecode(token);

        // Estrai il ruolo dall'oggetto decodedToken
        const userRole = decodedToken.role;

        if (userRole === "admin")
        {
          // Salvare i dati dell'utente con ruolo "admin" in localStorageAdmin
          localStorage.setItem('admin', JSON.stringify(decodedToken));
        } else
        {
          // Salvare i dati dell'utente con ruolo "user" in localStorageUser
          localStorage.setItem('user', JSON.stringify(decodedToken));
        }

        console.log(data.token)
        navigate('/')
      } else
      {
        setError("Accesso non riuscito Email o Password errate")
        setTimeout(() =>
        {
          setError(null);
        }, 5000);
      }
    } catch (error)
    {
      console.log("errore nella fetch del login", error)
    }

  }

  const redirectHandler = () =>
  {
    window.location.href = `${ process.env.REACT_APP_BASE_SERVER_URL }/auth/github`
  }


  return (
    <div className='login_container container-fluid'>
      <div className="overlay">
        <form onSubmit={ onSubmit } className='form_login'>
          <div className="con">
            <header className="head-form header_login">
              <h2>Log In</h2>
              <p>login here using your username and password</p>
            </header>
            <br />
            <div className="field-set">
              <div className='mini_sector my-3'>
                <label>Username</label>
                <input 
                 className="form-input " 
                 id="txt-input" 
                 type="text" 
                 name="email"
                 onChange={handleInputChange}
                 placeholder="@UserName"
                  required />
              </div>
              <div className='mini_sector'>
                <label>Password</label>
                <input
                 className="form-input"
                  type="password"
                  onChange={handleInputChange} 
                  placeholder="Password" 
                  id="pwd"
                   name="password" 
                   required />
              </div>

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
        { error && (
          <div className="alert alert-danger mb-3">
            { error }
          </div>
        ) }
      </div>
    </div>

  )
}

export default Login







