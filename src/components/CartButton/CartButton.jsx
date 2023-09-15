import React from 'react';
import { BiCart } from 'react-icons/bi';
import './CartButton.css';

function CartButton() {
    return (
        <button type="button" className="cart__button">
            <BiCart />
            <span className="cart-status">1</span>
        </button>
    );
}

export default CartButton;
