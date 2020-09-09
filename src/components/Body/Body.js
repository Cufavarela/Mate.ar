import React from 'react';
import './body.scss';
import ProductList from './producto/ProductList';
import DetallesContainer from './producto/productDetailsContainer';

function Body ({onAdd}) {

    return <div className="body">
        <ProductList onAdd={onAdd}/>
        <DetallesContainer onAdd={onAdd} />
    </div>
}

export default Body;