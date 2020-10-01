import React, { useContext, useEffect, useState } from 'react';
import {CartContext} from '../../../contexts/cartContext';
import Loading from '../loading.js/loading';
import ProductsInCart from './productsInCart';


function Carrito () {

    const [producto, setProducto] = useContext(CartContext);
    const [qty, setQty] = useContext(CartContext);

    return <div>
            <ProductsInCart />
        </div>
}

export default Carrito;