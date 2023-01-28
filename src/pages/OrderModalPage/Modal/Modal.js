import React  from 'react';
import cross from '../../../assets/modal/cross.svg'
import './modal.css'
import {NavLink, useNavigate} from "react-router-dom";
const Modal = () => {
    const navigate = useNavigate()
    const redirect = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <section className="modal">
            <div className="modal__content">
                <div className="modal__top">
                    <h3 className="title title__small">Доставим газ <br/>за 4 часа</h3>
                    <NavLink to="/"><img src={cross} alt=""/></NavLink>
                </div>
                <div className="modal__bottom">
                    <form onSubmit={redirect} className="modal__form">
                        <input required className="input" type="text" placeholder="Имя"/>
                        <input required className="input" type="number" placeholder="Телефон"/>
                        <button className="btn">Заказать доставку газа</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Modal;