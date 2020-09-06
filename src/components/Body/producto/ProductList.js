import React, {useEffect} from'react';
import Product from './Product';
import mate1 from '../../../images/aime.jpg';
import mate2 from '../../../images/clau.jpg';
import mate3 from '../../../images/matias.jpg';



function ProductList() {

    const data = [{
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


    useEffect(() => {
        const timer = setTimeout(() => {
          console.log(data);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);


    return <div>
        <Product data={data} />
    </div>


}

export default ProductList;