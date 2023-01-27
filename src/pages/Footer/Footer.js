import React, {useState} from 'react';
import './footer.css'
import logo from '../../assets/header/Logo.svg'
import {NavLink, Link} from "react-router-dom";
const Footer = () => {
    const [hover, setHover] = useState(1)
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__left">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                    <div className="footer__right">
                        <p className="footer__desc">+7 926 330-68-34</p>
                        <Link to="/answersPage" className="footer__subtitle">Срочный вопрос</Link>
                    </div>
                </div>
                <div className="footer__bottom">
                    <ul className="footer__list">
                        <li className="footer__item"><NavLink onClick={() => setHover(2)} to="/" className={`footer__link ${hover === 2 && 'nohover'}`}>Главная</NavLink></li>
                        <li className="footer__item"><NavLink onClick={() => setHover(3)} to="/answersPage" className={`footer__link ${hover === 3 && 'nohover'}`}>Вопросы</NavLink></li>
                        <li className="footer__item"><NavLink onClick={() => setHover(4)} to="/reviewsPage" className={`footer__link ${hover === 4 && 'nohover'}`}>Отзывы</NavLink></li>
                    </ul>
                    <Link to="/orderPage"><button className="btn__small">Заказать Газ</button></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;