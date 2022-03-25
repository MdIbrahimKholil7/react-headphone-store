import React, { useEffect, useState } from 'react';
import ProductCart from '../productCard/ProductCart';
import './Product.css'

const Product = () => {
    const [products,stateProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => stateProducts(data))
    },[])
    return (
        <div className='product-container'>
            <div className="products">
                {
                    products.map(product => <ProductCart></ProductCart>)
                }
            </div>
            <div className="cart-container">
                <h1>Cart container</h1>
            </div>
        </div>
    );
};

export default Product;