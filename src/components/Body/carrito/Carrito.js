import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../../contexts/cartContext';
import './cart.scss';


function Carrito () {

    const { cart }  = useContext(CartContext);

    console.log(cart);
    console.log(cart.length);

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
            </div>
            }
            <div className="asideItems">
                <Link to="/"><h5 className="buttonBack"><span>↲</span>Seguir Comprando</h5></Link>
                <div className="shipping">
                    <p>Acá irían los datos de la compra para despachar</p>
                </div>
            </div>
        </div>
}

export default Carrito;