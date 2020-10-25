import React, { useContext } from'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../../contexts/cartContext';
import './orderDetails.scss';


function CompraData() {

    const { order, setOrder, setCart } = useContext(CartContext);

    const resetShop = () => {
        setOrder({});
        setCart([]);
    }

    return (
        <div className="orderContainer">
            <h3>Detalles del pedido</h3>
            {order.id ?
                <div className="orderData">
                    <p>Nombre: <span>{order.buyer.name}</span></p>
                    <p>Email: <span>{order.buyer.email}</span></p>
                    <p>Precio Final: <span>${order.total}</span></p>
                    <p>Num. de pedido: <span>{order.id}</span></p>
                    <div className="pagoWrapper">
                        <Link to="/"><button className="botonPago" onClick={() => {resetShop()}}>Pagar!</button></Link>
                    </div>
                </div>
            :
                <div> </div>
            }
        </div>
    )
}

export default CompraData;