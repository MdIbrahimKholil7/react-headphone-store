import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import ReactModal from '../modal/ReactModal';
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
        if(productArr.length > 4){
            return alert('you cant choose more than 4')
          }
        cartState(productArr)
    }
    
    const chooseBtn=()=>{
        const randomNum = Math.floor(Math.random() * carts.length);
        let randomProduct=carts[randomNum]
        console.log(randomProduct)
        carts.splice(0,carts.length,randomProduct)
        const newCart=[...carts]
        cartState(newCart)
        console.log(newCart)
        console.log(randomProduct)
        /* const newProd=carts.filter(cart => cart.id !== randomProduct.id)
        // console.log(newProd)
        
        for(let prod of newProd){
            let item=carts.indexOf(prod)
            carts.splice(item,1)
            let newItem=[...carts]
            cartState(newItem)
        } */
        
    }
    // console.log(carts)


    // console.log(carts)
    // randomly choose btn 
    
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
                <h4>Selected Items : {carts.length}</h4>
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                    
                }
                <div className="btn-container">
                    {/* <ReactModal cart={carts}></ReactModal> */}
                    <button onClick={chooseBtn} className='choose-btn'>Choose 1 For Me</button>
                    <button className='again-btn'>Choose Again </button>
                </div>
                
               
            </div>
        </div>
    );
};

export default Product;