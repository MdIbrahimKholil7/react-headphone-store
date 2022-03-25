import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import ProductCart from '../productCard/ProductCart';
import './Product.css'

const Product = () => {
    const [products, stateProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => stateProducts(data))
    }, [])

    // declare state for cart 
    const [carts, cartState] = useState([])
    // adding event handler for cart 
    let productArr=[]
    const cartHandler = product => {
        productArr.push(...carts,product)
        cartState(productArr)
    }
    

    console.log(carts)
    



    return (
        <div className='product-container'>
            <div className="products">
                {
                    products.map(product => <ProductCart
                        key={product.id}
                        product={product}
                        cartHandler={cartHandler}
                    ></ProductCart>)
                }
            </div>
            <div className="cart-container">
                <h1>Selected Items : {carts.length}</h1>
                {
                    carts.map(cart => <Cart cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Product;