import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="Offers-left">
        <h1>Springs</h1>
        <h1>into Savings!</h1>
        <p>Enjoy up to 25% off on selected plants and accessories. Refresh your garden with seasonal deals!</p>
        <button>Check Now</button>
      </div>
      <div className="Offers-right">
        <img src={exclusive_image} alt='' />
      </div>
    </div>
  )
}

export default Offers