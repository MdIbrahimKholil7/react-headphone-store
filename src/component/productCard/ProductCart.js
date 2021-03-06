import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProductCart.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const ProductCart = ({product,cartHandler}) => {
    const {img,name,price}=product
    // console.log(product.id)
    return (
        <div data-aos="zoom-in" className='card'>
            <img className='img' src={img} alt="" />
            <div className="details">
                <h4>Name : {name}</h4>
                <h3>Price : ${price}</h3>
            </div>
            <button onClick={()=>cartHandler(product)} className='add-btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default ProductCart;