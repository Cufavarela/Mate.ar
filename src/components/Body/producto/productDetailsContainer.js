import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../loading.js/loading';
import { getFirestore } from '../../../firebase';
import './productDetails.scss';
import './buyButton/buyButton.scss';
import BuyButton from './buyButton/buyButton';


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
        : <div className="productDetailsContainer">
            <div className="producto">
                <div className="productoImg">
                    <img  src={product.image} alt="producto"></img>
                </div>
                <div className="productInfo">
                    <div className="productoName">
                        <h4>{product.name}</h4>
                    </div>
                    <div className="precio">${product.price}</div>
                    <div className="description">{product.description}</div>
                    <BuyButton {...product}/>
                </div>
            </div>
        </div>
        }
    </div>
}

export default DetallesDeProducto;