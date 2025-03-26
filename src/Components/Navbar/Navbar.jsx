import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const[menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
        <p>Prakriti</p>
      </div>
      <div className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none', color: '#1c1c1c'}} to='/' >Home</Link>{menu === "shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("indoors")}}><Link style={{textDecoration: 'none', color: '#1c1c1c'}} to='/indoors' >Indoor</Link>{menu === "indoors"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("outdoors")}}><Link style={{textDecoration: 'none', color: '#1c1c1c'}} to='/outdoors' >Outdoor</Link>{menu === "outdoors"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("flowerings")}}><Link style={{textDecoration: 'none', color: '#1c1c1c'}} to='/flowerings' >Flowering</Link>{menu === "flowerings"?<hr/>:<></>}</li>
      </div>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='cart-icon'/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar