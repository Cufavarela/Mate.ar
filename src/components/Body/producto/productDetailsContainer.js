import React, { useContext, useEffect, useState } from 'react';
import ProductDetails from './productDetail';
import { useParams } from 'react-router-dom';
import Loading from '../loading.js/loading';
import { getFirestore } from '../../../firebase';


function DetallesDeProducto () {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const ItemCollection = db.collection("Items");
        const item = ItemCollection.doc(id);
        item.get()
        .then((doc) => {
            if (!doc.exists) {
                console.log("Item does not exists!");
            }
            console.log("Item found!");
            setProduct({id: doc.id, ...doc.data() });
        })
        .catch((error) => {
            console.log("Error searching Item: ", error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id]);

    return <div>
        {loading ? <Loading />
        : <ProductDetails {...product} />
        }
    </div>
}

export default DetallesDeProducto;