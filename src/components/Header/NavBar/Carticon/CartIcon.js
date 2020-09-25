import React, { useContext } from 'react';
import cart from '../../../../images/cart.svg';
import './cart.scss';
import {CartContext} from '../../../../contexts/cartContext';

function CartIcon () {


    return <div>
        <img src={cart} alt="carrito-de-compras"></img><div className="itemsInCart">()</div>
    </div>
}

export default CartIcon;