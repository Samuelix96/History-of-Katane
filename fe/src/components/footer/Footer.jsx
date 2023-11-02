import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="">
      <div className="footer">
  <div className="container">
    <div className="newsletter">
      <h2>Subscribe Our Newsletter</h2>
      <div className="form">
        <input className="form-control" placeholder="Email here"/>
        <button className="btn">Submit</button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo tristique dictum nec non quam. Suspendisse convallis, tortor eu placerat rhoncus, lorem quam iaculis felis, sed eleifend lacus neque id eros. Integer convallis volutpat neque
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-8">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="footer-link">
              <h3>Service Area</h3>
              <a href="">Lorem ipsum</a>
              <a href="">tempus posuere </a>
              <a href="">velit id accumsan</a>
              <a href="">ut porttitor</a>
              <a href="">Nam pretium</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="footer-link">
              <h3>Useful Link</h3>
              <a href="">Sed pretium</a>
              <a href="">ultricies turpis at</a>
              <a href="">Mauris cursus</a>
              <a href="">consectetur</a>
              <a href="">condimentum</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="footer-contact">
              <h3>Get In Touch</h3>
              <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
              <p><i className="fa fa-envelope"></i>info@example.com</p>
              <div className="footer-social">
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container footer-menu">
    <div className="f-menu">
      <a href="">Terms of use</a>
      <a href="">Privacy policy</a>
      <a href="">Cookies</a>
      <a href="">Help</a>
      <a href="">FQAs</a>
    </div>
  </div>
  <div className="container copyright">
    <div className="row">
      <div className="col-md-6">
        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
      </div>
      <div className="col-md-6">
        <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Footer
