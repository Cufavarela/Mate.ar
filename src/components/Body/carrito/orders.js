import React, { useContext } from 'react';
import {CartContext} from '../../../contexts/cartContext';

function FinalizarCompra () {

    const { crearOrden, user, order }  = useContext(CartContext);

    return (
        <div>
            {user.name && !order.id
            ? <button className="botonFinalizar" onClick={() => crearOrden()}>Finalizar compra</button>
            : <div> </div>
            }
        </div>
    )
}

export default FinalizarCompra;