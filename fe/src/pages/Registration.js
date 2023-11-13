import React, { useState } from 'react'
import "../components/style/registration.css"
import { useAddRegistrationMutation } from '../api/apiSlice'
import { useNavigate } from 'react-router-dom'

const Registration = () =>
{

  const navigate = useNavigate()
  
  const [ file, setFile ] = useState(null)
  const [ signinData, setSigninData ] = useState({})


  console.log(file)
  console.log(signinData)

  const [ addRegistration ] = useAddRegistrationMutation()



  const handleInputChange = (e) =>
  {
    const { name, value } = e.target;

    setSigninData({
      ...signinData,
      [ name ]: value,
    })
  }

  const handleSetFileChange = (e) => 
  {
    setFile(e.target.files[ 0 ])
  }


  const uploadFile = async (avatar) =>
  {
    const fileData = new FormData()
    console.log(fileData)
    fileData.append("avatar", avatar)

    try
    {
      const response = await fetch(`${ process.env.REACT_APP_SERVER_URL }/registration/cloudUpload`, {
        method: 'POST',
        body: fileData
      });
      if (response.status === 200)
      {
        return response.json();
      } else
      {
        throw new Error('Errore nella chiamata post del file con cloudinary');
      }
    } catch (error)
    {
      console.log("errore nella chiamata post del file", error)
    }
  }

  const sendPost = async (e) =>
  {
    e.preventDefault();
    if (file)
    {
      try
      {
        const uploadAvatar = await uploadFile(file);
        const finalBody = {
          ...signinData,
          avatar: uploadAvatar.avatar,
        };
        await addRegistration(finalBody);
        setSigninData({})
        setFile(null);
        setTimeout(() =>
        {
          navigate('/login');
        }, 1000);
      } catch (error)
      {
        console.log('errore nell\'invio del post', error);
      }
    }
  };


  return (
    <div className='form__regi'>
      <form 
      onSubmit={sendPost}
      class="form">
        <p class="title">Registration  </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <input
              class="input"
              type="text"
              name='firstName'
              onChange={ handleInputChange }
              placeholder="FirstName"
              required="" />

            <span>Firstname</span>
          </label>

          <label>
            <input
              class="input"
              type="text"
              name='lastName'
              onChange={ handleInputChange }
              placeholder="LastName"
              required="" />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input
            class="input"
            type="text"
            name='nickName'
            onChange={ handleInputChange }
            placeholder="Your Nickname"
            required="" />
          <span>NickName</span>
        </label>
        <label>
          <input
            class="input"
            type="email"
            name="email"
            onChange={ handleInputChange }
            placeholder="Email"
            required="" />
          <span>Email</span>
        </label>
        <label>
          <input
            class="input"
            type="password"
            name='password'
            onChange={ handleInputChange }
            placeholder="Password"
            required="" />
          <span>Password</span>
        </label>

        <label>
          <input
            class="input"
            type="date"
            name='birth'
            onChange={ handleInputChange }
            placeholder="Your full Birth"
            required="" />
          <span>Birth</span>
        </label>
        <label>
          <input
            class="input"
            type="file"
            name='avatar'
            onChange={ handleSetFileChange }
            placeholder="Img about yourself"
            required="" />
          <span>Avatar</span>
        </label>

        <button type='submit' class="submit">Submit</button>
        <p class="signin">Already have an acount ? <a href={ `/login` }>Signin</a> </p>
      </form>
    </div>
  )
}

export default Registration
