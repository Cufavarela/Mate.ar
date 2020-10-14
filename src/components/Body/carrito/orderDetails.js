import React, { useContext } from'react';
import {CartContext} from '../../../contexts/cartContext';
import './orderDetails.scss';


function CompraData() {

    const { order } = useContext(CartContext);

    return (
        <div className="orderContainer">
            <h3>Detalles del pedido</h3>
            {order.id ?
                <div className="orderData">
                    <p>Nombre: <span>{order.buyer.name}</span></p>
                    <p>Email: <span>{order.buyer.email}</span></p>
                    <p>Precio Final: <span>${order.total}</span></p>
                    <p>Num. de pedido: <span>{order.id}</span></p>
                </div>
            :
                <div> </div>
            }
        </div>
    )
}

export default CompraData;