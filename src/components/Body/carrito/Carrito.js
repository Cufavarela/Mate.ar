import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../../contexts/cartContext';
import BotonFin from './orders';
import './cart.scss';
import CompraData from './orderDetails';
import mate from '../../../images/mate.svg';


function Carrito () {

    const { cart }  = useContext(CartContext);

    return <div className="cartItems">
        { cart.length === 0
            ? <div className="noItems">No hay Items en el carrito <span>😲</span></div>
            : <div className="itemInCartContainer">
                <div className="itemInCart">
                    <h5 className="name">Nombre</h5>
                    <h5>Precio</h5>
                </div>
                {cart.map(itemInCart =>
                <div className="itemInCart">
                    <h5 className="name">{itemInCart.name}</h5>
                    <h5>${itemInCart.price}</h5>
                </div>
                )}
            <div className="finalizarWrapper">
                <BotonFin />
            </div>
            </div>
            }
            <div className="asideItems">
                <Link to="/"><h5 className="buttonBack"><span>🛒</span>Seguir Comprando</h5></Link>
                <div className="shipping">
                    <CompraData />
                    <div className="mateWrapper">
                        <img src={mate}></img>
                    </div>
                </div>
            </div>
        </div>
}

export default Carrito;