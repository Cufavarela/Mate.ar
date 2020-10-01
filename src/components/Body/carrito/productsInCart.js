import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../../contexts/cartContext';
import './cart.scss';



function ProductsInCart(mate) {

    return <div className="cartItems">
        <table>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>

                <tr>
                    <td>{mate.name}</td>
                    <td>{mate.qty}</td>
                    <td>${mate.price * mate.qty}</td>
                </tr>

        </table>
    </div>
}

export default ProductsInCart;