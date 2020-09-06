import React from 'react';
import cart from '../../../../images/cart.svg';
import './cart.scss';

function CartIcon (props) {

    return <div>
        <img src={cart} alt="carrito-de-compras"></img><div className="itemsInCart">({props.items})</div>
    </div>
}

export default CartIcon;