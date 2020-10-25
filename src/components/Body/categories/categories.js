import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loading.js/loading';
import Product from '../producto/Product'
import { getFirestore } from '../../../firebase';

const FilteredItemsList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const categoryDocRef = db.collection('categories').doc(id);
        const itemCollection = db.collection('Items');
        const selectCollection = itemCollection.where('category', '==', categoryDocRef);
        selectCollection.get()
        .then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                console.log('No results!');
            }
            setProducts(querySnapShot.docs.map(doc => {
                console.log(doc.data());
                return ({id: doc.id, ...doc.data() });
            }));
        }).catch((error) => {
            console.log('Error serching Items', error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        })
        }, [id]);

    return(
        <div>
            { loading ? <Loader /> : <Product data={products} />}
        </div>
    );
};

export default FilteredItemsList;