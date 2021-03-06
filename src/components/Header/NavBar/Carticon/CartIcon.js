import React, { useContext } from 'react';
import cartImg from '../../../../images/cart.svg';
import './cart.scss';
import {CartContext} from '../../../../contexts/cartContext';

function CartIcon () {

    const { cart }  = useContext(CartContext);

    const totalQty = cart.length;

    return <div>
        <img src={cartImg} alt="carrito-de-compras"></img><div className="itemsInCart">{totalQty}</div>
    </div>
}

export default CartIcon;