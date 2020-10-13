import React, { useContext } from 'react';
import cartImg from '../../../../images/cart.svg';
import './cart.scss';
import {CartContext} from '../../../../contexts/cartContext';

function CartIcon () {

    const { cart }  = useContext(CartContext);

    console.log(cart.length);

    const totalQty = cart.length;

    console.log(totalQty);


    return <div>
        <img src={cartImg} alt="carrito-de-compras"></img><div className="itemsInCart">{totalQty}</div>
    </div>
}

export default CartIcon;