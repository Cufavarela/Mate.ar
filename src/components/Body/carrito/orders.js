import React, { useContext } from 'react';
import {CartContext} from '../../../contexts/cartContext';

function FinalizarCompra () {

    const { crearOrden }  = useContext(CartContext);

    return (
        <button className="botonFinalizar" onClick={() => crearOrden()}>Finalizar compra</button>
    )
}

export default FinalizarCompra;