import React from 'react'
import { Container } from 'react-bootstrap'
import "../components/style/registration.css"

const Registration = () =>
{
  return (
    <Container className='conte_regi'>    
   
      <div id="container">
        <header className='header_regi'>Register new account</header>
        <form method="post">
          <fieldset className='fieldset_regi'>
            <br />
            <input type="text" name="username" id="username" placeholder="Username" required autofocus />
            <br /><br />
            <input type="email" name="email" id="email" placeholder="E-mail" required />
            <br /><br />
            <input type="password" name="password" id="password" placeholder="Password" required />
            <br /><br />
            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" required />
            <br /> <br /> <br />
            <label for="submit"></label>
            <input className='input_regi' type="submit" name="submit" id="submit" value="REGISTER" />
          </fieldset>
        </form>
      </div>
   
    </Container>

  )
}

export default Registration
