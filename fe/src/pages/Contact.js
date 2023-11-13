import React from 'react'
import { motion } from 'framer-motion'
import "../components/style/contact.css"
import MainLayout from '../layout/MainLayout';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faEnvelope,  faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';




const Contact = () =>
{
  return (

    <MainLayout>
      <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: 0 } }
      >


        <div>
          <h1 className=' back__h1 '>If you want to contact me, these are my addresses</h1>
        </div>

        <div className='body__contact '>
          <section id="contact">

            <h1 className="section-header">Contact</h1>


            <div class="contact-wrapper">

              <form id="contact-form" className="form-horizontal">

                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" className="form_control" placeholder="NAME" name="name"  required />
                  </div>
                </div>
                <br/>
                <div claclassNamess="form-group">
                  <div className="col-sm-12">
                    <input type="email" className="form_control"  placeholder="EMAIL" name="email"  required />
                  </div>
                </div>
                <br/>
                <textarea className="form_control textarea_control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                <button className="btn btn-primary send-button d-flex"  type="submit" >
                  <div className="alt-send-button">
                    <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                  </div>

                </button>

              </form>



              <div className="direct-contact-container">

                <ul className="contact-list">
                  <li className="list-item"><FontAwesomeIcon icon={faLocationDot} /><span className="contact-text place">City, State</span></li>

                  <li className="list-item"><FontAwesomeIcon icon={faPhone} /><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>

                  <li className="list-item"><FontAwesomeIcon icon={faEnvelope} /><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></li>

                </ul>

                <hr />
                <ul className="social-media-list">
                  <li><a href="/" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                  </li>
                  <li><a href="/" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                  </li>
                  <li>
                  <a href="/museum" target="_blank" className="contact-icon"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                  </li>
                  <li><a href="/" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon="fa-brands fa-github" /></a>
                  </li>
                </ul>
                <hr />

                <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

              </div>

            </div>

          </section>


        </div>

      </motion.div>
    </MainLayout>


  );
}

export default Contact;

