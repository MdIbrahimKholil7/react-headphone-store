import React from 'react';
import './ProductCart.css'
const ProductCart = ({product}) => {
    const {img,name,price}=product
    // console.log(product.id)
    return (
        <div className='card'>
            <img className='img' src={img} alt="" />
            <div className="details">
                <h4>Name : {name}</h4>
                <h3>Price : ${price}</h3>
            </div>
            <button className='add-btn'>Add To Cart</button>
        </div>
    );
};

export default ProductCart;