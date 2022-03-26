import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = ({ cart }) => {
    const [smShow, setSmShow] = useState(false);
    // const [lgShow, setLgShow] = useState(false);
    
//    console.log(cart)
    if(cart.length > 4){
        setSmShow(true)
    }
    // console.log(randomProduct)
    
    /* 
        */

    return (
        <>
            {/* <Button style={{ fontSize: '1.7rem', backgroundColor: 'rgb(2, 26, 65)', marginBottom: '1rem', border: 'none', borderRadius: '.8rem', padding: '1.2rem 2rem' }} onClick={() => setSmShow(true)} className="me-2">Choose 1 For Me</Button> */}
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
                    <h1>You cant select more than 4</h1>
                </Modal.Body>
            </Modal>
           
        </>
    );
}

export default ReactModal;