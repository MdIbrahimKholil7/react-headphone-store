import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = ({ cart }) => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    let randomProduct;
    if (cart) {
        const randomNum = Math.floor(Math.random() * cart.length);
        randomProduct=cart[randomNum]
        // console.log(randomNum)
        // console.log(cart)
    }
    
    // console.log(randomProduct)
    const {name,price,img}=randomProduct || {}
    /* 
        */

    return (
        <>
            <Button style={{ fontSize: '1.7rem', backgroundColor: 'rgb(2, 26, 65)', marginBottom: '1rem', border: 'none', borderRadius: '.8rem', padding: '1.2rem 2rem' }} onClick={() => setSmShow(true)} className="me-2">Choose 1 For Me</Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                    
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{width:'7rem'}} src={img} alt="" />
                    <h4>Name:{name}</h4>
                    <h5>Price:${price}</h5>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
}

export default ReactModal;