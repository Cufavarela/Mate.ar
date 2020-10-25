import React, { useState } from 'react';
import CartIcon from './Carticon/CartIcon';
import { Link } from 'react-router-dom';
import './navbar.scss';
import DropdownMenu from './dropdownMenu/dropdownMenu';

function Navbar () {

    const [isDown, setIsDown] = useState(false);

    const dropdown = () => {
        if (!isDown) {
            const menu = document.getElementsByClassName('dropdownMenu');
            menu[0].classList.remove('hidden');
            setIsDown(true);
        } else {
            const menu = document.getElementsByClassName('dropdownMenu');
            menu[0].classList.add('hidden');
            setIsDown(false);
        }
    }

    return(
        <nav className="navbar">
            <ul className="menu">
                <li className="navbarItem">
                    <Link to="/">Productos</Link>
                </li>
                <li className="navbarItem dropdown">
                    <a onClick={() => dropdown()}>Categorias</a>
                    <DropdownMenu />
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