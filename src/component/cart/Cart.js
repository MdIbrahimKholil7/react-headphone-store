import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = ({ cart, deleteHandler }) => {

    const { name, img } = cart

    return (
        <div className='cart'>
           
            <img src={img} alt="" />
            <h3>{name}</h3>
            <FontAwesomeIcon onClick={() => deleteHandler(cart)} className='trash' icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;