import React from 'react';
import logo from '../../images/logoMate.svg';
import Navbar from './NavBar/Navbar';
import './header.scss';

function Header (props) {
    return <div className="header">
        <img className="logo" src={logo} alt="logo"></img>
        <Navbar items={props.items}/>
    </div>
}

export default Header;