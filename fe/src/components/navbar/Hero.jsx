import React from 'react'
import "./hero.css"

const Hero = () =>
{
  return (
    <div className='container-fluid sector-hero'>
      <section className="d-flex justify-content-center text-center">
        <div className="hero__text">
          <a href="/" target="_blank">
            <img className="logo" src="https://i.pinimg.com/originals/a6/dd/bc/a6ddbc6da8c7bf84f1ca99827ee9b14d.jpg" /></a>
          <h1>KATANSTORY</h1>
          <p className="subtitle">Discovering the wonderful art of Japan</p>
        </div>
      </section>
    </div>

  )
}

export default Hero
