import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0) 
            {
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img className='carticon-product-icon ' src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p>NPR {e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>NPR {e.new_price*cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
                    </div>
                    <hr />
                </div>
            }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>NPR {getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping Free</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>NPR {getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promoode">
            <p>If you have a promocode, Enter it here.</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
