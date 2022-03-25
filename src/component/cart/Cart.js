import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const {name,img}=cart
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <FontAwesomeIcon className='trash' icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;