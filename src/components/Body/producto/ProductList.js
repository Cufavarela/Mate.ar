import React, { useState } from'react';
import Product from './Product';
import mate1 from '../../../images/aime.jpg';
import mate2 from '../../../images/clau.jpg';
import mate3 from '../../../images/matias.jpg';



function ProductList() {

    const mock = [{
        id: 'aaa',
        name: 'Aimé',
        image: mate1,
        description: 'El Mate Aimé es re cheto, no es para vos si a tu nombre de agregan el prefijo "LA".',
        stock: 5,
        price: 750
      },
      {
        id: 'aab',
        name: 'DeVito',
        image: mate2,
        description: 'El Mate DeVito es ideal para tu vieja, porque es cortito y gordito.',
        stock: 1,
        price: 700
      },
      {
        id: 'aac',
        name: 'On Fire',
        image: mate3,
        description: 'El Mate On Fire está genial para vos que sos un fuego y te dicen antorcha en vez de Diego.',
        stock: 8,
        price: 760
    }];

    const [products, setProducts] = useState([]);


    const productos = new Promise((res, rej) => {
      setTimeout(() => res(mock), 2000);
    })
      .then(resp => setProducts(resp))
      .catch(rej => console.error("Esto está andando mal."));


    return <div>
        <Product data={products} />
    </div>
}

export default ProductList;