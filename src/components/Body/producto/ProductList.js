import React, { useEffect, useState } from'react';
import Product from './Product';
import { getFirestore } from '../../../firebase';
import Loader from '../loading.js/loading';



function ProductList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const ItemCollection = db.collection("Items");
      ItemCollection.get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log('No results!');
        }
        setProducts(querySnapShot.docs.map(doc => {
          return ({id: doc.id, ...doc.data() });
        }));
      }).catch((error) => {
        console.log('Error serching Items', error);
      }).finally(() => {
        setLoading(false);
      })
    }, []);

    return <>
    {loading ?
      <Loader />
    :
      <div>
          <Product data={products} />
      </div>}
    </>
}

export default ProductList;