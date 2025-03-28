import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(98)</p>
        </div>
        <div className="productdisplay-right-prices">
             <div className="productdisplay-right-price-old">NPR {product.old_price}</div>
             <div className="productdisplay-right-price-new">NPR {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div className="">S</div>
                <div className="">M</div>
                <div className="">L</div>
                <div className="">XL</div>
                <div className="">XXL</div>
            </div>
        </div>
         <button onClick={()=>{addToCart(product.id )}}>Add to cart</button>
         <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop-Top </p>
         <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest </p>
      </div>
    </div>
  )
}

export default ProductDisplay
