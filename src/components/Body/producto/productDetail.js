import React from 'react';
import './productos.scss';
import Contador from '../contador/contador';


function ProductDetails(props) {


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
                    <Contador initial={1} max={props.stock} min={0} onAdd={props.onAdd} />
                </div>
            </div>
        </div>
    </div>
}

export default ProductDetails;