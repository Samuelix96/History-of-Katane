import React, { useState } from 'react'
import "../components/style/reset.css"
import { useAddResetPasswordMutation } from '../api/apiSlice'
import { useNavigate } from 'react-router-dom'


const Reset = () => {

    const navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [addReset] = useAddResetPasswordMutation()
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');

    console.log(email)
    console.log(password)
    console.log(confirmPassword)


    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                const response = await addReset({password,email});

                
                if (response.data) {
                    navigate(`/login`);
                    setConfirmPassword('');
                    setPassword('');
                    setEmail('');
                } else {
                    setError('Errore durante il reset della password');
                    setTimeout(() => {
                        setError(null);
                    }, 3000);
                }
            } catch (error) {
                setError('Errore durante il reset della password');
                console.error('Error resetting password:', error);
                setTimeout(() => {
                    setError(null);
                }, 3000);
            }
        } else {
            setError('Password and Confirm Password do not match');
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    };
    


  return (
    <div className='reset_div'>
      
    <form
    onSubmit={handleResetPassword} 
    class="form_reset">
     <div className="form-title"><span>Reset your Password and come back with us</span></div>
      <div className="title-2"><span>STAR</span></div>
      <div className="input-container">
        <p className=' fs-4 fst-italic text-light'>Confirm your email</p>
        <label className='text-light'>Email</label>
        <input className="input-mail" onChange={(e) =>setEmail(e.target.value) } name='email' type="email" placeholder="Confirm Email"/>
        <span> </span>
      </div>
      <div className="input-container">
        <p className=' fs-4 fst-italic text-light'>Add your new Password</p>
        <label className='text-light'> New Password</label>
        <input className="input-mail" onChange={(e) =>setPassword(e.target.value) } name='password' type="password" placeholder="New Password"/>
        <span> </span>
      </div>

      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>
      {error && <p className="error-message text-bg-danger"> {error}</p>}

      <div className="input-container">
        <label className='text-light'>Confirm New Password</label>
        <input className="input-pwd" onChange={(e) =>setConfirmPassword(e.target.value)} name='password' type="password" placeholder="Confirm new Password"/>
      </div>
      <button type="submit" class="submit my-3">
        <span className="sign-text">Reset</span>
      </button>

      
       
   </form>

    </div>
  )
}

export default Reset
