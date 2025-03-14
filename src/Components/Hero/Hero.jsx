import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>

      <div className="hero-left">
        <h2>Plants That Make Life Better!</h2>
        <div>
        <p>From <span style={{ color: "#038b2a" }}>Succulents</span> to<span style={{ color: "#038b2a" }}> Statement Plants</span></p>
        <p>We Have It All!</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt='' />
      </div>

    </div>
  )
}

export default Hero