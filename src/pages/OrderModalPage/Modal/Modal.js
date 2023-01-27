import React  from 'react';
import cross from '../../../assets/modal/cross.svg'
import './modal.css'
import {NavLink} from "react-router-dom";
const Modal = () => {
    return (
        <section className="modal">
            <div className="modal__content">
                <div className="modal__top">
                    <h3 className="title title__small">Доставим газ <br/>за 4 часа</h3>
                    <NavLink to="/"><img src={cross} alt=""/></NavLink>
                </div>
                <div className="modal__bottom">
                    <form action="" className="modal__form">
                        <input className="input" type="text" placeholder="Имя"/>
                        <input className="input" type="number" placeholder="Телефон"/>
                        <NavLink to="/"><button className="btn">Заказать доставку газа</button></NavLink>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Modal;