import React, { useContext, useEffect, useState } from 'react';
import './productos.scss';
import Contador from '../contador/contador';
import { CartContext } from '../../../contexts/cartContext';
import BuyButton from './buyButton/buyButton';



function ProductDetails(props) {

    const [itemCount, setItemCount] = useState(1);

    return <div className="productContainer">
        <div className="producto">
            <div className="productoImg">
                <img  src={props.image} alt="producto"></img>
            </div>
            <div className="productInfo">
                <div className="productoName">
                    <h4>{props.name}</h4>
                </div>
                <div className="precio">${props.price}</div>
                <div className="description">{props.description}</div>
                <div className="btnContador">
                    <Contador initial={itemCount} max={props.stock} min={1} setCount={setItemCount}/>
                </div>
                <BuyButton id={props.id} name={props.name} price={props.price} counter={itemCount} />
            </div>
        </div>
    </div>
}

export default ProductDetails;