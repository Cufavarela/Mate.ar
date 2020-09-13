import React from'react';
import './productos.scss';
import { Link } from 'react-router-dom';



function Product(props) {

    return <div className="productContainer">
        <ul className="productList">
        {props.data.map(element =>
            <li key={element.id}>
                <Link to={'/product/' + element.id}>
                <div className="producto">
                    <img className="productoImg" src={element.image} alt="producto"></img>
                    <h4 className="productoName">{element.name}</h4>
                </div>
                </Link>
            </li>
            )}
        </ul>
    </div>
}

export default Product;