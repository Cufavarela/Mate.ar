import React from 'react';
import CartIcon from './Carticon/CartIcon';
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar (props) {

    return(
        <nav className="navbar">
            <ul className="menu">
                <li className="navbarItem">
                    <Link to="/">Productos</Link>
                </li>
                <li className="navbarItem">
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li className="navbarItem">
                    <Link to="/cart">
                        <CartIcon />
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;