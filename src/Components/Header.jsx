import React from 'react';
import '../css/Header.css';
import '../App.css';
import logo from '../image/logo.png'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="intro_header">
                    <div className="logo">
                        <div className="logo_img">
                            <img className="img_pizza" src={logo} />
                        </div>
                        <div className="logo_text">
                            <div className="logo__title">PIZZA-Rasul</div>
                            <div className="logo__text">самая вкусная пицца во вселенной</div>
                        </div>
                    </div>
                    <nav className="nav">
                        <Link className="nav__link" to="/">Акции</Link>
                        <Link className="nav__link" to="/">Контакты</Link>
                        <Link className="nav__link" to="/About">О нас</Link>
                        <Link className="basket" to="/Basket">Корзина</Link>
                    </nav>
                </div>
            </div>
        </div >
    );
}

export default Header;
