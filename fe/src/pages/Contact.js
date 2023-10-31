import React from 'react'
import { motion } from 'framer-motion'
import "../components/style/contact.css"
import MainLayout from '../layout/MainLayout';

const Contact = () =>
{
  return (
    <MainLayout>
        <motion.div
      initial={ { width: 0 } }
      animate={ { width: "100%" } }
      exit={ { width: 0 } }
    >
      <h1 className='text-center my-4'>If you want to contact me, these are my addresses</h1>
      <div>

        <div className='box_form'>
        <div class="container_form_section">
          <form id="contact" action="" method="post">
            <h3>Colorlib Contact Form</h3>
            <h4>Contact us for custom quote</h4>
            <fieldset className='fieldset_contact'>
              <input placeholder="Your name" type="text" tabindex="1" required autofocus />
            </fieldset >
            <fieldset className='fieldset_contact'>
              <input placeholder="Your Email Address" type="email" tabindex="2" required />
            </fieldset>
            <fieldset className='fieldset_contact'>
              <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
            </fieldset>
            <fieldset className='fieldset_contact'>
              <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
            </fieldset>
            <fieldset className='fieldset_contact'>
              <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset>
            <fieldset className='fieldset_contact'>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
            <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
          </form>
        </div>
        </div>

      </div>
    </motion.div>
    </MainLayout>
    
  );
}

export default Contact;
