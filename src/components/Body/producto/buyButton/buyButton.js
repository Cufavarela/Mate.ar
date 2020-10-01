import React, { useContext } from 'react';
import { CartContext } from '../../../../contexts/cartContext';
import './buyButton.scss';

function BuyButton({id, name, price, counter}) {

    const { addProduct }  = useContext(CartContext);

    return <div>
            <button type="button" className="alCarrito" onClick={() => addProduct(id, counter, name, price)}>Agregar {counter} al carrito</button>
        </div>
}

export default BuyButton;

