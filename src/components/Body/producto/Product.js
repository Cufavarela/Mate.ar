import React from'react';
import './productos.scss';

function Product(props) {
    return <div className="productContainer">
        <ul className="productList">
        {props.data.map(element =>
                <li key={element.id}>
                <div className="producto">
                    <img className="productoImg" src={element.image} alt="producto"></img>
                    <div className="productoName">
                        <h4>{element.name}</h4>
                    </div>
                    <div className="precio">${element.price}</div>
                    <div className="description">{element.description}</div>
                </div>
            </li>
            )}
        </ul>
    </div>
}

export default Product;