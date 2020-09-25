import React, { useContext, useEffect, useState } from 'react';
import {CartContext} from '../../../contexts/cartContext';
import Loading from '../loading.js/loading';
import ProductsInCart from './productsInCart';


function Carrito () {

    const [productId, setProductId] = useContext(CartContext);
    const [qty, setQty] = useContext(CartContext);


    const mock = [{
        id: 1,
        name: 'Aimé',
        description: 'El Mate Aimé es re cheto, no es para vos si a tu nombre de agregan el prefijo "LA".',
        stock: 5,
        price: 750
    },
    {
        id: 2,
        name: 'DeVito',
        description: 'El Mate DeVito es ideal para tu vieja, porque es cortito y gordito.',
        stock: 1,
        price: 700
    },
    {
        id: 3,
        name: 'On Fire',
        description: 'El Mate On Fire está genial para vos que te dicen antorcha en vez de Diego.',
        stock: 8,
        price: 760
    }];



    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const detalles = new Promise((res, rej) => {
            setTimeout(() => res(mock), 1000);
        })
            .then(resp => setProduct(resp[productId - 1]))
            .catch(rej => console.error("Algo está andando mal."))
            .finally(resp => setLoading(false));

    }, []);

    return <div>
        {loading ? <Loading />
        : <ProductsInCart {...product} />
        }
    </div>
}

export default Carrito;