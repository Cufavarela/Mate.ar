import React, { useContext } from 'react';
import { CartContext } from '../../../../contexts/cartContext';
import './buyButton.scss';

function BuyButton({id, name, price}) {

    const { addProduct }  = useContext(CartContext);

    return <div>
            <button type="button" className="alCarrito" onClick={() => addProduct(id, name, price)}>Agregar al carrito</button>
        </div>
}

export default BuyButton;

