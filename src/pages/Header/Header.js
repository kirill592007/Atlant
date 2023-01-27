import React from 'react';
import './header.css'
import logo from '../../assets/header/Logo.svg'
import {NavLink, Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <Link to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
                    <div className="header__content">
                        <ul className="header__list">
                            <li className="header__item"><NavLink to="/" className="header__link">Главная</NavLink></li>
                            <li className="header__item"><NavLink to="/answersPage" className="header__link">Вопросы</NavLink></li>
                            <li className="header__item"><NavLink to="/reviewsPage" className="header__link">Отзывы</NavLink></li>
                        </ul>
                        <Link to="/orderPage"><button className="btn__small">Заказать Газ</button></Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;