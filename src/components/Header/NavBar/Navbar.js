import React from 'react';
import CartIcon from './Carticon/CartIcon';
import './navbar.scss';

function Navbar () {

    return(
        <nav className="navbar">
            <ul className="menu">
                <li className="navbarItem">
                    <a to="/">Inicio</a>
                </li>
                <li className="navbarItem">
                    <a to="/productos">Productos</a>
                </li>
                <li className="navbarItem">
                    <a to="/contacto">Contacto</a>
                </li>
                <li className="navbarItem">
                    <a to="/cart">
                        <CartIcon />
                    </a>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;