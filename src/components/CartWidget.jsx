import cart from '../assets/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
export const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)
    return (
        <Link to="/checkout">
            <img src={cart} alt="Carrito" /> <span>{totalWidget}</span>
        </Link>
    )



};
