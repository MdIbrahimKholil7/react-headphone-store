import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Modal from 'react-modal';
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
    let productArr = []
    const cartHandler = product => {
        let newIndex=carts.indexOf(product)
        if(newIndex > -1){
           return alert('already added')
        }
        if(newIndex === -1){
            productArr.push(...carts,product)
        }
        
        // console.log(newIndex)
        /* else if (newIndex > 0){
            return alert('already Added')
        } */
        
        if (productArr.length > 4) {
            setIsOpen(true)
            // return alert('you cant choose more than 4')
            return
        }
        cartState(productArr)
    }

    // choose btn event handler 
    const chooseBtn = () => {
        if(carts.length === 0){
            return alert ('Please choose some cart')
        }
        const randomNum = Math.floor(Math.random() * carts.length);
        let randomProduct = carts[randomNum]
        carts.splice(0, carts.length, randomProduct)
        const newCart = [...carts]
        cartState(newCart)

    }

    // choose again btn handler 
    const chooseAgain = () => {
        const emptyArr = []
        cartState(emptyArr)
    }

    // delete cart btn 
    const deleteHandler = (product) => {
        const deleteIndex=carts.indexOf(product)
        carts.splice(deleteIndex,1)
        const newDeleteProduct=[...carts]
        cartState(newDeleteProduct)
        /* console.log(carts)
        console.log(deleteIndex) */
    }

    // react modal 
    const [modalIsOpen, setIsOpen] =useState(false);

    
      function closeModal() {
        setIsOpen(false);
      }
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return (
        
        <div className='product-container'>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <h1>You can't Select More than four product</h1>
      </Modal>
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
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                        deleteHandler={deleteHandler}
                    ></Cart>)

                }
                <div className="btn-container">
                    {/* <ReactModal cart={carts}></ReactModal> */}
                    <button onClick={chooseBtn} className='choose-btn'>Choose 1 For Me</button>
                    <button onClick={chooseAgain} className='again-btn'>Choose Again </button>
                </div>


            </div>
        </div>
    );
};

export default Product;